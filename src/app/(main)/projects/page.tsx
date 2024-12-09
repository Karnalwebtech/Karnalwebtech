import { generateSchema } from '@/lib/service/schemas/generateSchema';
import Index from '@/module/projects/Index'
import { base_url } from '@/paths';
import { Metadata } from 'next'
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";

export const metadata: Metadata = {
  title: "Our Projects: Web Development, Digital Marketing, SEO, and E-Commerce Solutions by Karnal Web Tech",
  description:
    "Karnal Web Tech's innovative projects, including cutting-edge web development, impactful digital marketing strategies, top-notch SEO services, and tailored e-commerce solutions. Empowering businesses in Haryana and beyond to achieve digital success and online growth.",
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
    title: "Our Projects: Web Development, Digital Marketing, SEO, and E-Commerce Solutions by Karnal Web Tech",
    description:
      "Karnal Web Tech's innovative projects, including cutting-edge web development, impactful digital marketing strategies, top-notch SEO services, and tailored e-commerce solutions. Empowering businesses in Haryana and beyond to achieve digital success and online growth.",
    url: `${base_url}/projects`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/projects.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web Tech projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title: "Our Projects: Web Development, Digital Marketing, SEO, and E-Commerce Solutions by Karnal Web Tech",
    description:
      "Karnal Web Tech's innovative projects, including cutting-edge web development, impactful digital marketing strategies, top-notch SEO services, and tailored e-commerce solutions. Empowering businesses in Haryana and beyond to achieve digital success and online growth.",
    images: ["/assets/projects.webp"],
  },
  alternates: {
    canonical: `${base_url}/projects`,
  },
};
export default function ProjectsPage() {
  const schema: any = generateSchema({
    title: "Our Projects: Web Development, Digital Marketing, SEO, and E-Commerce Solutions by Karnal Web Tech",
    description:
      "Karnal Web Tech's innovative projects, including cutting-edge web development, impactful digital marketing strategies, top-notch SEO services, and tailored e-commerce solutions. Empowering businesses in Haryana and beyond to achieve digital success and online growth.",
    slug: "projects",
    path: "/assets/projects.webp",
  });
  return (
    <>
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <Index />
    </>
  )
}