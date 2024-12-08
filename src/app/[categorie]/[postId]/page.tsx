import { fetchData } from "@/lib/api";
import { readCache, writeCache } from "@/lib/service/cache";
import BlogPage from "@/module/blog/single-blog-page";
import { base_url } from "@/paths";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { memo } from "react";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";

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

interface PostUrl {
  slug: string;
  categorie: [{ slug: string }];
}

export async function generateStaticParams(): Promise<
  SlugPageProps["params"][]
> {
  const cacheKey = "post-urls";
  const cachedData = readCache<SlugPageProps["params"][]>(cacheKey);

  if (cachedData) {
    console.log("Using cached static params");
    return cachedData;
  }
  try {
    const data = await fetchData(`post/post-urls`);
    const result = data || [];
    // Ensure result is an array before mapping
    if (!Array.isArray(result)) {
      throw new Error("Invalid result format");
    }
    // Map over result to extract slugs
    const params= result.slice(0, 50).map(({ slug, categorie }: PostUrl) => ({
      categorie: categorie?.[0]?.slug, // Assuming the API returns a category
      postId: slug,
    }));
    writeCache(cacheKey, params);
    return params
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params: { postId,categorie },
}: SlugPageProps): Promise<Metadata> {
  const { data } = await fetchData(`post/blog/${postId}`);

  // Ensure keywords is an array and extract the 'name' property if it exists
  const keywordsArray = Array.isArray(data?.seo?.keywords)
    ? data.seo.keywords.map((keyword: string | Keyword) =>
        typeof keyword === "string" ? keyword : keyword.name
      )
    : [];

  return {
    title: data?.seo?.title,
    description: data?.seo?.meta_description,
    keywords: keywordsArray.join(", "),
    openGraph: {
      title: data?.seo?.title,
      description: data?.seo?.meta_description,
      url: `${base_url}/${categorie}/${postId}`,
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
    alternates: {
      canonical: `${base_url}/${categorie}/${postId}`,
    },
  };
}

const MemoizedBlogPage = memo(BlogPage);

function generateSchema(data: any,categorie:string,postId:string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data?.seo?.title,
      description: data?.seo?.meta_description,
      url: `${base_url}/${data?.slug}`,
      image: data?.feature_image?.path,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "KarnalWebTech",
        url: `${base_url}/${categorie}/${postId}`,
      },
      about: {
        "@type": "Thing",
        name: data?.title,
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
            "@id":base_url,
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${base_url}/${data?.slug}`,
            name: data?.title,
          },
        },
      ],
    },
  ];
}

export default async function Blog({
  params: { postId, categorie },
}: SlugPageProps) {
  try {
    const { data } = await fetchData(`post/blog/${postId}`);

    // Ensure the category matches, else show 404
    if (categorie.toLowerCase() !== data.categorie[0].slug.toLowerCase()) {
      notFound(); // Trigger 404 if category doesn't match
    }

    // Generate structured schema data
    const schema: any = generateSchema(data,categorie,postId);

    return (
      <>
        {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
        {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
        <div>
          <MemoizedBlogPage apidata={data} />
        </div>
      </>
    );
  } catch (error) {
    // If it's a NEXT_NOT_FOUND error, let it propagate
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error;
    }
    // For other errors, render 404 page
    return notFound();
  }
}
