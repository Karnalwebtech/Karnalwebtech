import { JsonLd } from 'react-schemaorg'
import { WebPage, BreadcrumbList } from 'schema-dts'
import { fetchData } from "@/lib/api";
import Index from "@/module/blog/Index";
import { Metadata } from "next";
import { memo } from "react";
function generateSchema(data: any) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data?.seo?.title,
      description: data?.seo?.meta_description,
      url: `https://thesalesmens.com/${data?.slug}`,
      image: data?.feature_image?.path,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "KarnalWebTech",
        url: "https://thesalesmens.com"
      },
      about: {
        "@type": "Thing",
        name: data?.title
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://thesalesmens.com",
            name: "Home"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `https://thesalesmens.com/${data?.slug}`,
            name: data?.title
          }
        }
      ]
    }
  ];
}
interface SlugPageProps {
  params: {
    categorie: string;
  };
}

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
    const schema: any = generateSchema(data);
    return (
      <>
        <JsonLd<WebPage> item={schema[0]} />
        <JsonLd<BreadcrumbList> item={schema[1]} />
        <div>
          <MemoizedBlogPage cat_id={data?._id} />
        </div>
      </>
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
