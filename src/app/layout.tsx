import { ReactNode } from "react";
import { Montserrat_Alternates } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css"; // Global CSS file
import { Toaster } from "react-hot-toast";
import Header from "@/module/layout/header/Header";
import Footer from "@/module/layout/footer/Footer";
import type { Metadata, Viewport } from "next";
import StoreProvider from "@/store";
import { base_url } from "@/paths";
import { WebVitals } from "@/components/web-vitals";

// Font configuration (optional)
const montserrat_Alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600"],
});
interface RootLayoutProps {
  children: ReactNode;
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata: Metadata = {
  metadataBase: new URL(base_url),
  title: {
    default:
      "Karnal Web Tech | Expert Web Development & Digital Solutions for Your Business",
    template: "%s | Karnal Web Tech",
  },
  description:
    "professional web development, innovative digital marketing, and cutting-edge IT solutions with Karnal Web Tech. Empowering businesses in Haryana to achieve online success with tailored strategies and expert support.",
  keywords: [
    "web development",
    "Karnal web tech",
    "web",
    "SEO",
    "Next.js",
    "KarnalWebTech",
    "web development in Haryana",
    "Haryana digital solutions",
    "SEO services in Haryana",
    "IT solutions Haryana",
    "Haryana web design",
    "digital marketing Haryana",
    "Next.js development Haryana",
    "Haryana web tech services",
    "graphic design services Haryana",
    "content writing Haryana",
    "e-commerce listing services",
    "product listing services",
    "e-commerce solutions Haryana",
    "Haryana graphic design",
    "content creation Haryana",
    "product listing experts Haryana",
  ],
  openGraph: {
    title:
      "Karnal Web Tech | Expert Web Development & Digital Solutions for Your Business",
    description:
      "professional web development, innovative digital marketing, and cutting-edge IT solutions with Karnal Web Tech. Empowering businesses in Haryana to achieve online success with tailored strategies and expert support.",
    url: base_url,
    siteName: "KarnalWebTech",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Karnal web tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    title: "KarnalWebTech",
    description:
      "Your trusted tech partner in web development and digital solutions.",
    images: ["/assets/logo.png"],
  },
  robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: base_url,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat_Alternates.className}>
        <WebVitals />
        <StoreProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </StoreProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
