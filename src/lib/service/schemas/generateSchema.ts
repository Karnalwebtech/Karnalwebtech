const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thesalesmens.com";
export function generateSchema(data: any) {
  if (!data) return [];
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data?.title,
      description: data?.description,
      url: `${baseUrl}/${data.slug}`,
      image: data.path,
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
