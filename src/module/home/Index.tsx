import { OptimizedImage } from '@/components/OptimizedImage';
import dynamic from 'next/dynamic';

// Dynamically import components
const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });
const ServiceSection = dynamic(() => import('./ServiceSecton'), { ssr: false });
const TechnologyStack = dynamic(() => import('./TechnologyStack'), { ssr: false });
const ChooseUs = dynamic(() => import('./ChooseUs'), { ssr: false });
const OurProjects = dynamic(() => import('./OurProjects'), { ssr: false });
const OurBlog = dynamic(() => import('./OurBlog'), { ssr: false });
const FAQAccordion = dynamic(() => import('@/components/common/FAQAccordion'), { ssr: false });
const ContsctUs = dynamic(() => import('./ContsctUs'), { ssr: false });


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
