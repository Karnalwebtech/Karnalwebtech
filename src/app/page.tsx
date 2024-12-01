import Index from "@/module/home/Index";

export default function Home() {
  const jsonLd = {
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
  };
  return (
    <div>
      <Index />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
