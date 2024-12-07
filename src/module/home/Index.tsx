import Image from 'next/image'
import FAQAccordion from '@/components/common/FAQAccordion'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSecton'
import TechnologyStack from './TechnologyStack'
import ChooseUs from './ChooseUs'
import OurProjects from './OurProjects'
import OurBlog from './OurBlog'
import ContsctUs from './ContsctUs'

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
            <Image
              src="/upload/16607.jpg"
              alt="FAQ illustration"
              width={600}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
      <ContsctUs />
    </main>
  )
}

