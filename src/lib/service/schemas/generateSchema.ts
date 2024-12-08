import { base_url } from "@/paths";

export function generateSchema(data: any) {
  if (!data) return [];
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data?.title,
      description: data?.description,
      url: `${base_url}/${data.slug}`,
      image: data.path,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "KarnalWebTech",
        url: base_url,
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
            "@id": base_url,
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${base_url}/${data.slug}`,
            name: data.title,
          },
        },
      ],
    },
  ];
}
