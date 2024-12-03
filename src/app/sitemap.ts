import { fetchData } from "@/lib/api";
import { MetadataRoute } from "next";

interface ShopCategory {
  slug: string;
}

interface Post {
  slug: string;
  categorie: { slug: string }[];
}

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

// Simple in-memory cache
const cache: { [key: string]: { data: any; timestamp: number } } = {};
const CACHE_TTL = 3600000; // 1 hour in milliseconds

async function cachedFetchData(endpoint: string) {
  const now = Date.now();
  if (cache[endpoint] && now - cache[endpoint].timestamp < CACHE_TTL) {
    return cache[endpoint].data;
  }

  try {
    const { data } = await fetchData(endpoint);
    cache[endpoint] = { data, timestamp: now };
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

const createSitemapEntry = (
  url: string,
  changeFrequency: ChangeFrequency,
  priority: number
) => ({
  url: url.replace(/\/+$/, ""),
  lastModified: new Date().toISOString(),
  changeFrequency,
  priority,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thesalesmens.com";

  const [categoryData, postData] = await Promise.all([
    cachedFetchData("categorie"),
    cachedFetchData("post/store"),
  ]);

  const categorySitemap: MetadataRoute.Sitemap =
    (categoryData?.result as ShopCategory[])?.map((category) =>
      createSitemapEntry(`${baseUrl}/${category.slug}`, "weekly", 0.7)
    ) || [];

  const postSitemap: MetadataRoute.Sitemap =
    (postData?.result as Post[])?.map((post) =>
      createSitemapEntry(
        `${baseUrl}/${post.categorie[0]?.slug}/${post.slug}`,
        "weekly",
        0.7
      )
    ) || [];

  const staticRoutes = [
    "",
    "/contact-us",
    "/blog",
    "/project",
    "/faq",
    "/about-us",
    "/privacy-policy",
    "/terms-conditions",
  ].map((route) => createSitemapEntry(`${baseUrl}${route}`, "daily", 0.7));

  return [...staticRoutes, ...categorySitemap, ...postSitemap];
}

