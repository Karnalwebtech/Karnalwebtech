import { notFound } from "next/navigation";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://crm-rjsc.onrender.com/api/api";

interface RetryConfig {
  maxRetries: number;
  initialDelay: number;
  maxDelay: number;
}

const defaultRetryConfig: RetryConfig = {
  maxRetries: 3,
  initialDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
};

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchData(
  path: string, 
  retryConfig: Partial<RetryConfig> = {}
): Promise<any> {
  const config = { ...defaultRetryConfig, ...retryConfig };
  let lastError: Error | null = null;
  let attempt = 0;

  while (attempt < config.maxRetries) {
    try {
      const response = await fetch(`${apiUrl}/v2/${path}`, {
        next: { revalidate: 3600 }, // Cache revalidation interval
      });

      // Handle different response status codes
      switch (response.status) {
        case 200:
          return await response.json();
        case 404:
          notFound();
        case 429: // Too Many Requests
          // Get retry delay from header or calculate exponential backoff
          const retryAfter = response.headers.get('Retry-After');
          const backoffDelay = Math.min(
            config.maxDelay,
            config.initialDelay * Math.pow(2, attempt)
          );
          const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : backoffDelay;
          
          console.warn(`Rate limited. Retrying after ${waitTime}ms... (Attempt ${attempt + 1}/${config.maxRetries})`);
          await delay(waitTime);
          attempt++;
          continue;
        default:
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
          }
      }
    } catch (error) {
      lastError = error as Error;

      // If it's a NEXT_NOT_FOUND error, propagate it immediately
      if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
        throw error;
      }

      // For other errors, retry with exponential backoff
      if (attempt < config.maxRetries - 1) {
        const backoffDelay = Math.min(
          config.maxDelay,
          config.initialDelay * Math.pow(2, attempt)
        );
        console.warn(`Request failed. Retrying after ${backoffDelay}ms... (Attempt ${attempt + 1}/${config.maxRetries})`);
        await delay(backoffDelay);
        attempt++;
        continue;
      }

      // Log the final error
      console.error("Error fetching data:", lastError);
      throw new Error(
        `Failed after ${config.maxRetries} attempts: ${lastError.message}`
      );
    }
  }

  // This should never be reached due to the throw in the catch block
  throw new Error("Maximum retry attempts exceeded");
}

// Example usage with custom retry configuration:
/*
try {
  const data = await fetchData("some/endpoint", {
    maxRetries: 5,
    initialDelay: 2000,
    maxDelay: 15000
  });
} catch (error) {
  // Handle error
}
*/

