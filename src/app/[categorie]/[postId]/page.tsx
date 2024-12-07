import { fetchData } from "@/lib/api";
import BlogPage from "@/module/blog/single-blog-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { memo } from "react";

interface SlugPageProps {
  params: {
    postId: string;
    categorie: string;
  };
}
interface Keyword {
  id: number;
  name: string;
}
export async function generateMetadata({
  params: { postId },
}: SlugPageProps): Promise<Metadata> {
  const { data } = await fetchData(`post/blog/${postId}`);
    
  // Ensure keywords is an array and extract the 'name' property if it exists
  const keywordsArray = Array.isArray(data?.seo?.keywords) 
    ? data.seo.keywords.map((keyword: string | Keyword) => 
        typeof keyword === 'string' ? keyword : keyword.name
      )
    : [];
    console.log(keywordsArray)
  return {
    title: data?.seo?.title,
    description: data?.seo?.meta_description,
    keywords: [data?.seo?.keywords].join(', '),
    openGraph: {
      title: data?.seo?.title,
      description: data?.seo?.meta_description,
      url: "https://thesalesmens.com",
      siteName: "KarnalWebTech",
      images: [
        {
          url: data?.feature_image?.path,
          width: 800,
          height: 600,
          alt: data?.feature_image?.altText || data?.seo?.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@KarnalWebTech",
      title: data?.seo?.title,
      description: data?.seo?.meta_description,
      images: [data?.feature_image?.path],
    },
    robots: "index, follow",
    // viewport: "width=device-width, initial-scale=1",
    alternates: {
      canonical: "https://thesalesmens.com",
    },
  };
}
const MemoizedBlogPage = memo(BlogPage);
export default async function Blog({
  params: { postId, categorie },
}: SlugPageProps) {
  try {
    const { data } = await fetchData(`post/blog/${postId}`);
    if (categorie.toLowerCase() !== data.categorie[0].title.toLowerCase()) {
      notFound(); // Trigger 404 if category doesn't match
    }
    return (
      <div>
        <MemoizedBlogPage apidata={data} />
      </div>
    );
  } catch (error) {
    // If it's a NEXT_NOT_FOUND error, let it propagate
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error;
    }
    // For other errors, you can render an error state
    return notFound();
  }
}
