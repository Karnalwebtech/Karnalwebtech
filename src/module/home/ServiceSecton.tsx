'use client'

import { useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import StackCard from '@/components/cards/stack-card'

const services = [
  {
    icon: "user-experience_.png",
    title: 'UI / UX Design',
    description: 'Craft user-friendly, visually stunning designs that resonate with your brand identity and captivate your audience.'
  },
  {
    icon: "mobile.png",
    title: 'Web & Mobile App Development',
    description: 'From concept to deployment, we create robust and scalable applications that meet your unique requirements.'
  },
  {
    icon: "api_.png",
    title: 'API Development',
    description: 'Seamlessly integrate powerful APIs to enhance your application\'s functionality and performance.'
  },
  {
    icon: "maintenance.png",
    title: 'Maintenance & Upgrades',
    description: 'Stay ahead of the curve with regular updates and reliable post-project support for continuous improvement.'
  },
  {
    icon: "quality-management.png",
    title: 'Quality Assurance',
    description: 'Delivering excellence is our motto. We rigorously test to ensure your projects surpass expectations.'
  },
  {
    icon: "analysis.png",
    title: 'Business Analysis',
    description: 'We dive deep into your challenges, offering insights and strategies to empower your decision-making.'
  },
  {
    icon: "rafic.jpeg",
    title: 'Graphic Design',
    description: 'Bring your brand to life with compelling visuals and creative designs that leave a lasting impression.'
  },
  {
    icon: "socialmedia.jpeg",
    title: 'Social Media Handling',
    description: 'Elevate your online presence with expert social media management, engagement strategies, and growth tactics.'
  },
  {
    icon: "marketing.jpeg",
    title: 'Digital Marketing',
    description: 'Achieve your business goals with our comprehensive digital marketing services, including targeted campaigns and analytics-driven strategies.'
  },
  {
    icon: "conetnt.jpeg",
    title: 'Content Writing',
    description: 'Enhance your digital footprint with engaging, SEO-optimized content that drives traffic and connects with your audience.'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export default function ServiceSection() {
  const router = useRouter()

  const handleContactClick = useCallback(() => {
    router.push('/contact-us')
  }, [router])

  const renderedServices = useMemo(() => (
    services.map((service, index) => (
      <motion.div key={index} variants={cardVariants}>
        <StackCard item={service} />
      </motion.div>
    ))
  ), [])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl lg:text-5xl">
            What we do best
          </h2>
          <p className="text-muted-foreground text-sm max-w-full lg:max-w-[70%] mx-auto">
            At KarnalWebTech, we excel in delivering top-notch services tailored to meet your business needs. Our diverse expertise ensures that we provide end-to-end solutions for your digital and creative challenges. Here's what we do best:
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {renderedServices}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={handleContactClick}
            size="lg"
            className="bg-black text-primary-foreground hover:text-black hover:bg-gray-100"
          >
            LET&apos;S TALK
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

