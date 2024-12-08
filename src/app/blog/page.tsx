import Index from "@/module/blog/Index";
import { Metadata } from "next";
import React from "react";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thesalesmens.com";
const jsonLd: any = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends.",
    description:
      "Stay updated with expert tips, trends, and insights in web design, development, and digital marketing on the Karnal Web Tech Blog.",
    url: `${baseUrl}/blog`,
    image: "/assets/blog.webp",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "KarnalWebTech",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": baseUrl,
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${baseUrl}/blog`,
          name: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends.",
        },
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends",
  description:
    "Explore expert insights on web design, development, SEO, and digital marketing trends. Karnal Web Tech's blog offers valuable tips for businesses in Haryana and beyond.",
  keywords: [
    "web development",
    "Karnal web tech",
    "SEO",
    "Next.js",
    "web development in Haryana",
    "Haryana digital solutions",
    "SEO services in Haryana",
    "IT solutions Haryana",
    "Haryana web design",
    "digital marketing Haryana",
    "Next.js development Haryana",
    "Haryana web tech services",
    "graphic design services Haryana",
    "content writing Haryana",
    "e-commerce solutions Haryana",
    "product listing services Haryana",
  ],
  openGraph: {
    title:
      "Karnal Web Tech Blog: Insights on Web Design, Development, and Digital Trends",
    description:
      "Discover expert tips and trends in web development, SEO, and digital marketing. Karnal Web Tech's blog is your go-to resource for staying ahead in the digital landscape.",
    url: "https://thesalesmens.com/blog",
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "https://thesalesmens.com/assets/blog.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web Tech Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends",
    description:
      "Stay updated with expert insights on web development, SEO, and digital marketing. Karnal Web Tech's blog offers valuable tips for businesses in Haryana and beyond.",
    images: ["https://thesalesmens.com/assets/blog.webp"],
  },
  alternates: {
    canonical: "https://thesalesmens.com/blog",
  },
};
export default function Blog() {
  return (
    <>
      {jsonLd[0] && <JsonLd<WebPage> item={jsonLd[0]} />}
      {jsonLd[1] && <JsonLd<BreadcrumbList> item={jsonLd[1]} />}
      <Index />
    </>
  );
}
