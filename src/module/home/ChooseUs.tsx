"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, HeadsetIcon, Award, FileCheck, Timer, Code } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'
const features = [
  {
    icon: Timer,
    title: "10% Penalty",
    description: "Accountability you can trust! We pledge timely delivery, or we compensate with a 10% penalty.",
    subtitle: "*If not Delivered on time"
  },
  {
    icon: HeadsetIcon,
    title: "1 to 1 Communication",
    description: "Experience personalized support with a dedicated business developer ensuring your project aligns perfectly with your vision.",
    subtitle: ""
  },
  {
    icon: Award,
    title: "Best Quality",
    description: "We utilize native technologies to provide top-tier solutions, ensuring optimal performance and reliability.",
    subtitle: ""
  },
  {
    icon: FileCheck,
    title: "Guaranteed",
    description: "Your project’s success is our priority, promising timely and efficient delivery.",
    subtitle: ""
  },
  {
    icon: Code,
    title: "Copyrights & IPR",
    description: "Complete ownership of source code, safeguarding your intellectual property rights.",
    subtitle: ""
  },
  {
    icon: Clock,
    title: "8+ Years of",
    description: "Expertise and innovation honed over 8 years to elevate your business solutions.",
    subtitle: ""
  }
]
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
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ChooseUs() {
  return (
    <section className="py-8 lg:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8 lg:mb-12">
          <div className="max-w-[400px] m-auto w-full relative">
          <h2 className="text-4xl lg:text-7xl text-start lg:text-center font-bold">
              <span className="text-gray-500">Why</span> Choose Us <span className="text-gray-500">?</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-700 text-base">
              KarnalWebTech combines the brilliance of human intellect with cutting-edge technology to deliver tailored mobility solutions across diverse business domains. Our commitment to excellence is demonstrated through:
            </p>
          </div>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      <p className="text-gray-600 font-medium">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                {feature.subtitle && (
                  <CardContent>
                    <p className="text-sm text-red-600">{feature.subtitle}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}