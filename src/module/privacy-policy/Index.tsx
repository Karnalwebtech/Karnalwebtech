import { address, contact_number, email } from "@/paths";
import Link from "next/link";

export default function Index() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm mt-1">Effective Date: [Insert Date]</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        {/* <!-- Introduction Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-6">
            Welcome to <span className="font-bold">Karnal Web Tech</span>. We
            are committed to protecting your privacy and ensuring the security
            of your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you visit our website or
            use our services.
          </p>
        </section>

        {/* <!-- Information We Collect --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, billing information.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, IP
              address, device information.
            </li>
            <li>
              <strong>Cookies:</strong> Used to enhance your browsing experience
              and analyze user behavior.
            </li>
          </ul>
        </section>

        {/* <!-- How We Use Your Information --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>To Provide and Improve Services:</strong> Process
              transactions, improve website performance.
            </li>
            <li>
              <strong>Marketing and Communication:</strong> Send updates or
              promotional emails.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Fulfill legal obligations and
              prevent fraud.
            </li>
          </ul>
        </section>

        {/* <!-- Data Security --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 leading-6">
            We implement robust security measures to protect your data from
            unauthorized access. However, no method of transmission over the
            Internet or electronic storage is 100% secure.
          </p>
        </section>

        {/* <!-- Your Rights --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Access:</strong> Request access to the personal data we
              have collected.
            </li>
            <li>
              <strong>Correction:</strong> Request corrections to inaccurate or
              incomplete data.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data,
              subject to legal obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from promotional
              communications.
            </li>
          </ul>
        </section>

        {/* <!-- Changes to This Policy --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-6">
            We may update this Privacy Policy periodically. Any changes will be
            posted here. Please review this page regularly to stay informed.
          </p>
        </section>

        {/* <!-- Contact Us --> */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-6">
            If you have any questions about this Privacy Policy, contact us:
          </p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${email}`} prefetch={true}className="text-blue-600">
                {email}
              </Link>
            </p>
            <p>
              <strong>Phone:</strong>
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
}
