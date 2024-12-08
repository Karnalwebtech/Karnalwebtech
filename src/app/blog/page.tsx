import { generateSchema } from "@/lib/service/schemas/generateSchema";
import Index from "@/module/blog/Index";
import { base_url } from "@/paths";
import { Metadata } from "next";
import React from "react";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";

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
    url: `${base_url}/blog`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/blog.webp",
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
    images: ["/assets/blog.webp"],
  },
  alternates: {
    canonical: `${base_url}/blog`,
  },
};
export default function Blog() {
  const schema: any = generateSchema({
    title: "Karnal Web Tech Blog: Web Design, Development, and Digital Trends",
    description:
      "Stay updated with expert insights on web development, SEO, and digital marketing. Karnal Web Tech's blog offers valuable tips for businesses in Haryana and beyond.",
    slug: "blog",
    path: "/assets/blog.webp",
  });
  return (
    <>
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <Index />
    </>
  );
}
