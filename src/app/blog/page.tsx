import { fetchData } from "@/lib/api";
import Index from "@/module/blog/Index";
import { Metadata } from "next";
import React from "react";

// Schema generation function
function generateSchema(data: any) {
  if (!data) return [];

  const baseUrl = "https://thesalesmens.com";

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.seo?.title,
      description: data.seo?.meta_description,
      url: `${baseUrl}/${data.slug}`,
      image: data.feature_image?.path,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "KarnalWebTech",
        url: baseUrl,
      },
      about: {
        "@type": "Thing",
        name: data.title,
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
            "@id": `${baseUrl}/${data.slug}`,
            name: data.title,
          },
        },
      ],
    },
  ];
}

export const metadata: Metadata = {
  title: "Our Blog | Company Name",
  description:
    "Explore our portfolio of innovative projects across various industries.",
  openGraph: {
    title: "Our Projects | Company Name",
    description:
      "Explore our portfolio of innovative projects across various industries.",
    siteName: "KarnalWebTech",
    // images: [
    //   {
    //     url: data?.feature_image?.path,
    //     width: 800,
    //     height: 600,
    //     alt: data?.feature_image?.altText || data?.seo?.title,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    // title: data?.seo?.title,
    // description: data?.seo?.meta_description,
    // images: [data?.feature_image?.path],
  },
  robots: "index, follow",
  alternates: {
    canonical: `https://thesalesmens.com/blog`,
  },
};

export default function Blog() {
  return (
    <div>
      <Index />
    </div>
  );
}
