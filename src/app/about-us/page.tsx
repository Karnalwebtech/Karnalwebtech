import { generateSchema } from "@/lib/service/schemas/generateSchema";
import Index from "@/module/about-us/Index";
import { base_url } from "@/paths";
import { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
export const metadata: Metadata = {
  title: "About Us - Karnal Web Tech: Empowering Digital Success",
  description:
    "Learn about Karnal Web Tech, your trusted partner for web design, development, SEO, and digital marketing services. We deliver innovative solutions for businesses in Haryana and beyond.",
  keywords: [
    "about Karnal Web Tech",
    "web design services",
    "digital marketing agency",
    "SEO services in Haryana",
    "web development in Karnal",
    "Next.js development",
    "Haryana IT solutions",
    "digital success",
    "online business growth",
    "website development Haryana",
    "e-commerce solutions",
    "graphic design services",
    "content marketing agency",
  ],
  openGraph: {
    title: "About Us - Karnal Web Tech: Empowering Digital Success",
    description:
      "Karnal Web Tech delivers expert web design, development, SEO, and digital marketing solutions to help businesses grow and thrive online.",
    url: `${base_url}/about-us`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/about-us.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web Tech About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title: "About Us - Karnal Web Tech: Empowering Digital Success",
    description:
      "Karnal Web Tech delivers expert web design, development, SEO, and digital marketing solutions to help businesses grow and thrive online.",
    images: ["/assets/about-us.webp"],
  },
  alternates: {
    canonical: `${base_url}/about-us`,
  },
};

export default function AboutUs() {
  const schema: any = generateSchema({
    title: "About Us - Karnal Web Tech: Empowering Digital Success",
    description:
      "Karnal Web Tech delivers expert web design, development, SEO, and digital marketing solutions to help businesses grow and thrive online.",
    slug: "about-us",
    path: "/assets/about-us.webp",
  });
  return (
    <>
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <Index />
    </>
  );
}
