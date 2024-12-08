import Index from "@/module/home/Index";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";

export default function Home() {
  const jsonLd: any = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Karnal Web Tech",
      image: "https://karnalwebtech-xi.vercel.app/assets/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address",
        addressLocality: "Karnal",
        addressRegion: "Haryana",
        postalCode: "132001",
        addressCountry: "IN",
      },
      url: "https://karnalwebtech-xi.vercel.app",
      telephone: "8816041566",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/YourFacebookPage",
        "https://www.twitter.com/YourTwitterHandle",
        "https://www.linkedin.com/company/your-linkedin-page",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        bestRating: "5",
        reviewCount: "525",
      },
    },
    // Optional: Add BreadcrumbList here if needed.
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://karnalwebtech-xi.vercel.app",
        },
        // Add more breadcrumb items as needed
      ],
    },
  ];

  return (
    <>
      {jsonLd[0] && <JsonLd<WebPage> item={jsonLd[0]} />}
      {jsonLd[1] && <JsonLd<BreadcrumbList> item={jsonLd[1]} />}
      <Index />
    </>
  );
}
