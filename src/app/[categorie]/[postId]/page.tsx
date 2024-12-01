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

export async function generateMetadata({
  params: { postId },
}: SlugPageProps): Promise<Metadata> {
  try {
    const { data } = await fetchData(`post/blog/${postId}`);

    return {
      title: data?.title || "Default Title",
      description: data?.meta_description || "Default Description",
      // openGraph: {
      //   images: [{ url: data?.canonical_url || "/default-image.jpg" }],
      // },
    };
  } catch (error) {
    // If it's a NEXT_NOT_FOUND error, let it propagate
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error;
    }
    // For other errors, return a fallback metadata
    return {
      title: "Post Not Found",
      // ... other fallback metadata
    };
  }
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
