import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
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
            Welcome to <span className="font-bold">Karnal Web Tech</span>. By
            accessing or using our website, you agree to be bound by these Terms
            and Conditions. If you do not agree, please refrain from using our
            services.
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
          <h2 className="text-2xl font-semibold mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-6">
            All content, logos, and trademarks displayed on this website are
            the property of <span className="font-bold">Karnal Web Tech</span>.
            You may not reproduce, distribute, or create derivative works
            without prior written consent.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
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
              <a href="mailto:info@karnalwebtech.com" className="text-blue-600">
                info@karnalwebtech.com
              </a>
            </p>
            <p>
            <strong>Phone:</strong> <Link href={"tel:+918816041566"}>+918816041566</Link>
            </p>
            <p>
              <strong>Address:</strong> Karnal Web Tech, Karnal, Haryana, India
            </p>
          </div>
        </section>
      </div>

    </div>
  );
};

export default TermsAndConditions;
