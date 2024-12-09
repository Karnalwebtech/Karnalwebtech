import { generateSchema } from "@/lib/service/schemas/generateSchema";
import Index from "@/module/constact-us/Index";
import { base_url } from "@/paths";
import { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";

export const metadata: Metadata = {
  title:
    "Contact Us - Karnal Web Tech: Your Partner in Web Design, Development, and SEO Solutions.",
  description:
    "Contact Karnal Web Tech for expert web design, development, and SEO services. Let’s discuss how we can help you grow your online presence.",
  keywords: [
    "Contact Web Design Experts",
    "Get in Touch with Our Team",
    "Talk to Our Design Team",
    "Professional SEO Services Contact",
    "Request a Free Consultation",
    "Speak to an SEO Specialist",
    "Web Development Inquiry",
    "Custom Web Solutions Contact",
    "Ask About Our SEO Packages",
    "Start Your Web Project Today",
    "Contact Us for Digital Marketing",
    "Affordable Web Design Services",
    "Get Help with Website Development",
    "Connect with Web Experts",
    "Inquire About Web Design Services",
    "Talk to Our SEO Consultants",
  ],
  openGraph: {
    title:
      "Contact Us - Karnal Web Tech: Your Partner in Web Design, Development, and SEO Solutions.",
    description:
      "Contact Karnal Web Tech for expert web design, development, and SEO services. Let’s discuss how we can help you grow your online presence.",
    url: `${base_url}/contact-us`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/contact-us.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web tech contact-us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title:
      "Contact Us - Karnal Web Tech: Your Partner in Web Design, Development, and SEO Solutions.",
    description:
      "Contact Karnal Web Tech for expert web design, development, and SEO services. Let’s discuss how we can help you grow your online presence.",
    images: ["/assets/contact-us.webp"],
  },
  alternates: {
    canonical: `${base_url}/contact-us`,
  },
};

export default function ContactUs() {
  const schema: any = generateSchema({
    title:
      "Contact Us - Karnal Web Tech: Your Partner in Web Design, Development, and SEO Solutions.",
    description:
      "Contact Karnal Web Tech for expert web design, development, and SEO services. Let’s discuss how we can help you grow your online presence.",
    slug: "contact-us",
    path: "/assets/contact-us.webp",
  });
  return (
    <>
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <Index />
    </>
  );
}
