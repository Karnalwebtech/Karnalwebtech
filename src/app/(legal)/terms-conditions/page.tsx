import { generateSchema } from "@/lib/service/schemas/generateSchema";
import { address, base_url, contact_number, email } from "@/paths";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review Karnal Web Tech's Terms and Conditions for details on using our web design, development, and SEO services. Stay informed about your rights and responsibilities.",
  keywords: ["terms-conditions"],
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Review Karnal Web Tech's Terms and Conditions for details on using our web design, development, and SEO services. Stay informed about your rights and responsibilities.",
    url: `${base_url}/terms-conditions`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/terms-conditions.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web tech terms-conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title: "Terms & Conditions",
    description:
      "Review Karnal Web Tech's Terms and Conditions for details on using our web design, development, and SEO services. Stay informed about your rights and responsibilities.",
    images: ["/assets/terms-conditions.webp"],
  },
  alternates: {
    canonical: `${base_url}/terms-conditions`,
  },
};
const TermsAndConditions = () => {
  const schema: any = generateSchema({
    title: "Terms & Conditions",
    description:
      "Review Karnal Web Tech's Terms and Conditions for details on using our web design, development, and SEO services. Stay informed about your rights and responsibilities.",
    slug: "terms-conditions",
    path: "/assets/terms-conditions.webp",
  });
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-6">
            Welcome to
            <Link href={"/"}> prefetch={true}
              <span className="font-bold">Karnal web tech</span>
            </Link>
            . By accessing or using our website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please refrain from using
            our services.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              You agree not to use the website for any unlawful or prohibited
              activities.
            </li>
            <li>
              You must provide accurate and up-to-date information when
              registering or submitting forms.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-6">
            All content, logos, and trademarks displayed on this website are the
            property of
            <Link href={"/"}> prefetch={true}
              <span className="font-bold"> Karnal Web Tech</span>.
            </Link>
            You may not reproduce, distribute, or create derivative works
            without prior written consent.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-6">
            Karnal Web Tech is not liable for any damages resulting from your
            use of the website or reliance on the information provided.
          </p>
        </section>

        {/* Modifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
          <p className="text-gray-700 leading-6">
            We reserve the right to modify or update these Terms and Conditions
            at any time. Changes will be effective immediately upon posting.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-6">
            These Terms and Conditions are governed by the laws of India. Any
            disputes will be resolved under the jurisdiction of Karnal courts.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-6">
            For any questions or concerns regarding these Terms and Conditions,
            please contact us:
          </p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${email}`}  className="text-blue-600">
                {email}
              </Link>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <Link href={`tel:${contact_number}`}>{contact_number}</Link>
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
