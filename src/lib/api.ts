export const apiUrl = process.env.API_BASE_URL || "https://invent-mlo7.onrender.com/api";
import { notFound } from "next/navigation";
console.log(apiUrl)
export async function fetchData(path: string): Promise<any> {
  try {
    // Make the API request
    const response = await fetch(`${apiUrl}/v2/${path}`, {
      next: { revalidate: 3600 }, // Cache revalidation interval
    });

    // If the response is a 404, trigger Next.js's notFound
    if (response.status === 404) {
      notFound();
    }

    // Check for other unsuccessful responses
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Return the parsed JSON data if the response is successful
    return await response.json();
  } catch (error) {
    // Check if the error is from notFound()
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      // Re-throw the NEXT_NOT_FOUND error
      throw error;
    }

    // Log other errors
    console.error("Error fetching data:", error);

    // Throw a generic error for other cases
    throw new Error("An unexpected error occurred while fetching data.");
  }
}
