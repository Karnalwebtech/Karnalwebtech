import { fetchData } from "@/lib/api";
import { readCache, writeCache } from "@/lib/service/cache";

const SITEMAP_NAMESPACE = "http://www.sitemaps.org/schemas/sitemap/0.9";
const IMAGE_NAMESPACE = "http://www.google.com/schemas/sitemap-image/1.1";
const DEFAULT_BASE_URL = "https://thesalesmens.com";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL;

interface Image {
  path: string;
  title: string;
  caption: string;
  displayedpath: string;
  updatedAt: string;
  description?: string;
  license?: string;
}

interface GroupedImages {
  [key: string]: {
    images: Image[];
    lastmod: string;
  };
}

const groupedImagesCache: Record<string, GroupedImages> = {};

/**
 * Normalize Firebase image URLs or return the original URL.
 */
const normalizeImageUrl = (url: string): string => {
  if (url.includes("firebasestorage.googleapis.com")) {
    const firebaseUrl = url.match(/https:\/\/firebasestorage\.googleapis\.com.*/);
    return firebaseUrl ? firebaseUrl[0] : url;
  }
  return url;
};

/**
 * Escape special characters in XML.
 */
const escapeXml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");

/**
 * Group images by their displayed URL and determine the latest modification date.
 */
const groupImagesByUrl = (images: Image[]): GroupedImages => {
  const cacheKey = images.map((img) => img.displayedpath).join(",");
  if (groupedImagesCache[cacheKey]) {
    return groupedImagesCache[cacheKey];
  }

  const grouped = images.reduce((acc: GroupedImages, image) => {
    const key = `${baseUrl}/${image.displayedpath.replace(/^\/+/g, "")}`;

    if (!acc[key]) {
      acc[key] = { images: [], lastmod: image.updatedAt };
    }

    acc[key].images.push(image);

    // Update lastmod if the current image has a newer updatedAt date
    if (new Date(image.updatedAt) > new Date(acc[key].lastmod)) {
      acc[key].lastmod = image.updatedAt;
    }

    return acc;
  }, {});

  groupedImagesCache[cacheKey] = grouped;
  return grouped;
};

/**
 * Generate the image sitemap XML content.
 */
const generateImageSitemap = async (): Promise<string> => {
  const cacheKey = "image-sitemap";
  const cachedData = readCache<string>(cacheKey);

  if (cachedData) {
    console.log("Using cached static sitemap");
    return cachedData;
  }

  const imageData = (await fetchData("image/image-url")) as Image[];
  const groupedImages = groupImagesByUrl(imageData);

  const sitemapEntries = Object.entries(groupedImages)
    .map(([url, data]) => {
      const imageEntries = data.images
        .map(
          (image) => `
        <image:image>
          <image:loc>${escapeXml(normalizeImageUrl(image.path))}</image:loc>
          <image:title>${escapeXml(image.title || "Boxify Pack")}</image:title>
          <image:caption>${escapeXml(image.caption || "Boxify Pack")}</image:caption>
        </image:image>
      `
        )
        .join("");

      return `
      <url>
        <loc>${escapeXml(url)}</loc>
        <lastmod>${data.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        ${imageEntries}
      </url>
    `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="${SITEMAP_NAMESPACE}" xmlns:image="${IMAGE_NAMESPACE}">
      ${sitemapEntries}
    </urlset>`;

  writeCache(cacheKey, sitemap);
  return sitemap;
};

/**
 * HTTP GET handler to generate and serve the image sitemap.
 */
export async function GET() {
  try {
    const sitemap = await generateImageSitemap();
    return new Response(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
