import { fetchData } from "@/lib/api";

export const CACHE_TTL = 3600000; // 1 hour in milliseconds
export const SITEMAP_NAMESPACE = "http://www.sitemaps.org/schemas/sitemap/0.9";
export const IMAGE_NAMESPACE = "http://www.google.com/schemas/sitemap-image/1.1";
export const DEFAULT_BASE_URL = "https://thesalesmens.com";

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
  }
}

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache: Record<string, CacheEntry> = {};

const normalizeImageUrl = (url: string): string => 
  url.includes('firebasestorage.googleapis.com') 
    ? url.match(/https:\/\/firebasestorage\.googleapis\.com.*/)?.at(0) ?? url
    : url;

const groupImagesByUrl = (images: Image[]): GroupedImages => 
  images.reduce((acc: GroupedImages, image) => {
    const key = `${baseUrl}/${image.displayedpath.replace(/^\/+/, '')}`;
    
    if (!acc[key]) {
      acc[key] = { images: [], lastmod: image.updatedAt };
    }
    
    acc[key].images.push(image);
    acc[key].lastmod = new Date(image.updatedAt) > new Date(acc[key].lastmod) 
      ? image.updatedAt 
      : acc[key].lastmod;
    
    return acc;
  }, {});

const cachedFetchData = async (endpoint: string): Promise<any> => {
  const now = Date.now();
  if (cache[endpoint] && now - cache[endpoint].timestamp < CACHE_TTL) {
    return cache[endpoint].data;
  }

  try {
    const data = await fetchData(endpoint);
    cache[endpoint] = { data, timestamp: now };
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};

const clearCache = (endpoint?: string): void => {
  if (endpoint) {
    delete cache[endpoint];
    console.log(`Cache cleared for endpoint: ${endpoint}`);
  } else {
    Object.keys(cache).forEach((key) => delete cache[key]);
    console.log("Cache cleared for all endpoints");
  }
};

const createSitemapEntry = (
  url: string,
  title: string,
  caption: string,
  path_url: string,
  updatedAt: string,
  changeFrequency: ChangeFrequency,
  priority: number
): Image => ({
  path: url,
  title,
  caption,
  displayedpath: path_url,
  updatedAt,
  description: caption,
});

const escapeXml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");

const generateImageSitemap = async (): Promise<string> => {
  const imageData = await fetchData("image/image-url") as Image[];
  const groupedImages = groupImagesByUrl(imageData);

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="${SITEMAP_NAMESPACE}"
            xmlns:image="${IMAGE_NAMESPACE}">
      ${Object.entries(groupedImages).map(([url, data]) => `
        <url>
          <loc>${escapeXml(url)}</loc>
          <lastmod>${data.lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          ${data.images.map(image => `
            <image:image>
              <image:loc>${escapeXml(normalizeImageUrl(image.path))}</image:loc>
              <image:title>${escapeXml(image.title || "Boxify Pack")}</image:title>
              <image:caption>${escapeXml(image.caption || "Boxify Pack")}</image:caption>
            </image:image>
          `).join('')}
        </url>
      `).join('')}
    </urlset>`;
};

export { cachedFetchData, clearCache, createSitemapEntry, generateImageSitemap };

