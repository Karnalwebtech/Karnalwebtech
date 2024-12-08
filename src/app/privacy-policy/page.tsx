import { generateSchema } from "@/lib/service/schemas/generateSchema";
import Index from "@/module/privacy-policy/Index";
import { base_url } from "@/paths";
import { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  keywords: ["privacy-policy"],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    url: `${base_url}/privacy-policy`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/privacy-policy.webp",
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
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    images: ["/assets/privacy-policy.webp"],
  },
  alternates: {
    canonical: `${base_url}/privacy-policy`,
  },
};
export default function PrivacyPolicy() {
  const schema: any = generateSchema({
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    slug: "privacy-policy",
    path: "/assets/privacy-policy.webp",
  });
  return (
    <>
      {" "}
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <div className="bg-gray-100">
        <Index />
      </div>
    </>
  );
}
