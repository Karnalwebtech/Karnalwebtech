import { fetchData } from "@/lib/api";
import Index from "@/module/blog/Index";
import { Metadata } from "next";
import { memo } from "react";

interface SlugPageProps {
  params: {
    categorie: string;
  };
}

// Corrected function name
// export async function generateStaticParams() {
//   const { data } = await fetchData(`categorie`);
//   const result = data?.result || [];

//   // Ensure result is an array before mapping
//   if (!Array.isArray(result)) {
//     throw new Error("Invalid result format");
//   }

//   // Map over result to extract slugs
//   return result.map(({ slug }) => ({ categorie: slug })).slice(0, 30); // Include keys for dynamic routes
// }

export async function generateMetadata({
  params: { categorie },
}: SlugPageProps): Promise<Metadata> {
  const { data } = await fetchData(`categorie/shop/${categorie}`);

  return {
    title: data?.seo?.title,
    description: data?.seo?.meta_description,
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

// Memoized component for better performance
const MemoizedBlogPage = memo(Index);

export default async function Page({ params: { categorie } }: SlugPageProps) {
  try {
    const { data } = await fetchData(`categorie/shop/${categorie}`);
    return (
      <div>
        <MemoizedBlogPage cat_id={data?._id} />
      </div>
    );
  } catch (error) {
    // If it's a NEXT_NOT_FOUND error, let it propagate
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error;
    }
    // For other errors, you can render an error state
    return <div>An error occurred while loading the blog post.</div>;
  }
}
