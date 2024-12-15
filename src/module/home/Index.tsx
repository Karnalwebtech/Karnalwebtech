import Loading from "@/components/common/Loading";
import { OptimizedImage } from "@/components/OptimizedImage";
import dynamic from "next/dynamic";

// Dynamically import components
const HeroSection = dynamic(() => import("./HeroSection"), {
  loading: () => <Loading />,
  ssr: false,
});
const ServiceSection = dynamic(() => import("./ServiceSecton"), {
  loading: () => <Loading />,
  ssr: false,
});
const TechnologyStack = dynamic(() => import("./TechnologyStack"), {
  loading: () => <Loading />,
  ssr: false,
});
const ChooseUs = dynamic(() => import("./ChooseUs"), {
  loading: () => <Loading />,
  ssr: false,
});
const OurProjects = dynamic(() => import("./OurProjects"), {
  loading: () => <Loading />,
  ssr: false,
});
const OurBlog = dynamic(() => import("./OurBlog"), {
  loading: () => <Loading />,
  ssr: false,
});
const FAQAccordion = dynamic(() => import("@/components/common/FAQAccordion"), {
  loading: () => <Loading />,
  ssr: false,
});
const ContsctUs = dynamic(() => import("./ContsctUs"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <TechnologyStack />
      <ChooseUs />
      <OurProjects />
      <OurBlog />
      <FAQAccordion />
      <ContsctUs />
    </main>
  );
}
