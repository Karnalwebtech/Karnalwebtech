import Loading from "@/components/common/Loading";
import { OptimizedImage } from "@/components/OptimizedImage";
import dynamic from "next/dynamic";

// Dynamically import components
const HeroSection = dynamic(() => import("./HeroSection"), {
  loading: () => <Loading />,
  ssr: true,
});
const ServiceSection = dynamic(() => import("./ServiceSecton"), {
  loading: () => <Loading />,
  ssr: true,
});
const TechnologyStack = dynamic(() => import("./TechnologyStack"), {
  loading: () => <Loading />,
  ssr: true,
});
const ChooseUs = dynamic(() => import("./ChooseUs"), {
  loading: () => <Loading />,
  ssr: true,
});
const OurProjects = dynamic(() => import("./OurProjects"), {
  loading: () => <Loading />,
  ssr: true,
});
const OurBlog = dynamic(() => import("./OurBlog"), {
  loading: () => <Loading />,
  ssr: true,
});
const FAQAccordion = dynamic(() => import("@/components/common/FAQAccordion"), {
  loading: () => <Loading />,
  ssr: true,
});
const ContsctUs = dynamic(() => import("./ContsctUs"), {
  loading: () => <Loading />,
  ssr: true,
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
      <section className="max-w-[1180px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <FAQAccordion />
          </div>
          <div className="w-full lg:w-1/2">
            <OptimizedImage
              src="/assets/16607.jpg"
              alt="FAQ illustration"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <ContsctUs />
    </main>
  );
}
