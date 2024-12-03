import { fetchData } from "@/lib/api";
import { MetadataRoute } from "next";

interface ShopCategory {
  slug: string;
}

interface Post {
  slug: string;
  categorie: { slug: string }[];
}

// Define the possible values for changeFrequency explicitly
type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thesalesmens.com";

  // Utility function to create sitemap entries
  const createSitemapEntry = (
    url: string,
    changeFrequency: ChangeFrequency,
    priority: number
  ) => ({
    url: url.replace(/\/+$/, ""), // Remove trailing slash
    lastModified: new Date().toISOString(), // Current date in ISO 8601 format
    changeFrequency,
    priority,
  });

  let categorySitemap: MetadataRoute.Sitemap = [];
  let postSitemap: MetadataRoute.Sitemap = [];

  try {
    const { data: categoryData } = await fetchData("categorie");
    categorySitemap =
      (categoryData?.result as ShopCategory[])?.map((category) =>
        createSitemapEntry(`${baseUrl}/${category.slug}`, "weekly", 0.7)
      ) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  try {
    const { data: postData } = await fetchData("post/store");
    postSitemap =
      (postData?.result as Post[])?.map((post) =>
        createSitemapEntry(
          `${baseUrl}/${post.categorie[0]?.slug}/${post.slug}`,
          "weekly",
          0.7
        )
      ) || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

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
