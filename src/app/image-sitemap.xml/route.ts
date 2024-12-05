import { fetchData } from "@/lib/api";
const CACHE_TTL = 3600000; // 1 hour in milliseconds
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

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache: Record<string, CacheEntry> = {};

// Memoize groupedImages to avoid recalculating the same data
const groupedImagesCache: Record<string, GroupedImages> = {};

function normalizeImageUrl(url: string): string {
  if (url.includes('firebasestorage.googleapis.com')) {
    const firebaseUrl = url.match(/https:\/\/firebasestorage\.googleapis\.com.*/);
    return firebaseUrl ? firebaseUrl[0] : url;
  }
  return url;
}

function groupImagesByUrl(images: Image[]): GroupedImages {
  const cacheKey = images.map(img => img.displayedpath).join(',');
  if (groupedImagesCache[cacheKey]) {
    return groupedImagesCache[cacheKey];
  }

  const grouped = images.reduce((acc: GroupedImages, image) => {
    const key = `${baseUrl}/${image.displayedpath.replace(/^\/+/, '')}`;
    
    if (!acc[key]) {
      acc[key] = { images: [], lastmod: image.updatedAt };
    }

    acc[key].images.push(image);
    
    // Only update if the current image has a newer date
    const currentDate = new Date(image.updatedAt);
    const lastmodDate = new Date(acc[key].lastmod);
    if (currentDate > lastmodDate) {
      acc[key].lastmod = image.updatedAt;
    }

    return acc;
  }, {});

  groupedImagesCache[cacheKey] = grouped;
  return grouped;
}

const escapeXml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");

async function generateImageSitemap(): Promise<string> {
  const imageData = await fetchData("image/image-url") as Image[];
  const groupedImages = groupImagesByUrl(imageData);

  const sitemapEntries = Object.entries(groupedImages).map(([url, data]) => {
    const imageEntries = data.images.map(image => `
      <image:image>
        <image:loc>${escapeXml(normalizeImageUrl(image.path))}</image:loc>
        <image:title>${escapeXml(image.title || "Boxify Pack")}</image:title>
        <image:caption>${escapeXml(image.caption || "Boxify Pack")}</image:caption>
      </image:image>
    `).join('');

    return `
      <url>
        <loc>${escapeXml(url)}</loc>
        <lastmod>${data.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        ${imageEntries}
      </url>
    `;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="${SITEMAP_NAMESPACE}" xmlns:image="${IMAGE_NAMESPACE}">
      ${sitemapEntries}
    </urlset>`;
}

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
