import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
import { fetchData } from "@/lib/api";
import Index from "@/module/blog/Index";
import { Metadata } from "next";
import { memo } from "react";

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

interface SlugPageProps {
  params: {
    categorie: string;
  };
}

// Fetch static params for dynamic routes
export async function generateStaticParams(): Promise<SlugPageProps["params"][]> {
  try {
    const data = await fetchData("categorie/categorie-urls");
    if (!Array.isArray(data)) throw new Error("Invalid data format");

    return data.slice(0, 30).map(({ slug }: { slug: string }) => ({
      categorie: slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({
  params: { categorie },
}: SlugPageProps): Promise<Metadata> {
  try {
    const { data } = await fetchData(`categorie/shop/${categorie}`);

    return {
      title: data?.seo?.title,
      description: data?.seo?.meta_description,
      openGraph: {
        title: data?.seo?.title,
        description: data?.seo?.meta_description,
        url: `https://thesalesmens.com/${categorie}`,
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
        canonical: `https://thesalesmens.com/${categorie}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while generating metadata.",
    };
  }
}

// Memoized component for performance optimization
const MemoizedBlogPage = memo(Index);

// Main page component
export default async function Page({ params: { categorie } }: SlugPageProps) {
  try {
    const { data } = await fetchData(`categorie/shop/${categorie}`);
    const schema: any = generateSchema(data);

    return (
      <>
        {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
        {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
        <div>
          <MemoizedBlogPage cat_id={data?._id} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering page:", error);

    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error; // Let Next.js handle 404 errors
    }

    // Render fallback UI for other errors
    return <div>An error occurred while loading the blog post.</div>;
  }
}
