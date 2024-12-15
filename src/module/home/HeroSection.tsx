import InfintySliderTb from "@/components/common/InfintySliderTb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Moon, MoveRight, Plus, Star } from 'lucide-react'
import Image from "next/image"
import { ProjectStatusCard } from "./project-status-card"
import TestimonialSlider from "@/components/common/testimonial-slider"
// import { TrekCarousel } from "./trek-carousel"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex-1 p-4 lg:p-6 space-y-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0  lg:gap-6">
          <Card className="relative col-span-2 bg-[#E8EDF0] mb-4 lg:mb-0 overflow-hidden"

          >
            <div className="absolute z-0" style={{

              backgroundImage: "url(/assets/composition-with.webp)",
              perspective: "1000px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "blur(3px)",
              width: "100%",
              height: "100%",
            }}>

            </div>
            <div className="p-8 flex justify-between items-start h-full relative bg-black/70">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-semibold text-gray-100">
                  Your Business
                  <br />
                  Deserves to Shine
                </h1>
                <p className="mb-8 max-w-2xl text-white text-[16px]">
                  We empower startups and brands by creating innovative, engaging,
                  and tailored software solutions that drive success and make an
                  impact.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      // <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                      <Avatar key={i} className="w-10 h-10 border-1 border-white">
                        <AvatarImage src={`/assets/avatar.webp`} alt={`User ${i + 1}`} />
                        <AvatarFallback>U{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-base text-gray-100">
                    <span className="font-semibold">500+</span> Members
                  </span>
                </div>
                <Button variant="default" className="bg-black hover:bg-gray-200 hover:text-black text-white rounded-full">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

            </div>
          </Card>

          {/* Hydration Status */}
          <Card className="bg-black">
            {/* <div className="space-y-4">
              <div>
                <h3 className="font-medium">Hydration Status:</h3>
                <p className="text-[16px] text-gray-600">Drinking 500ml water daily boosts your energy and enhances your focus.</p>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded ${i < 15 ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">D</span>
                  <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">W</span>
                  <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">M</span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-semibold">2.15L</span>
                  <span className="text-[16px] block">/Day</span>
                </div>
              </div>
            </div> */}
            <InfintySliderTb />
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
          {/* Sleep Section */}
          <Card className="p-6  mb-4 lg:mb-0">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex -space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-[16px] font-medium">4.9</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                Experience the Excellence of Karnalweb Tech
              </h3>
              <Button variant="outline" className="rounded-full">
                <Star className="mr-2 h-4 w-4" />
                Top-rated service
              </Button>
              <p className="text-[16px] text-gray-600">
                Discover innovative solutions and cutting-edge technology. Partner with Karnalweb Tech for unparalleled digital experiences and robust web applications.
              </p>
            </div>
          </Card>
          <div className="mb-4 lg:mb-0">
            {/* Calories Section */}
            <ProjectStatusCard
              totalProjects={124}
              completedProjects={118}
              onTrackProjects={6}
              delayedProjects={1}
            />
          </div>
          <div className="mb-4 lg:mb-0">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}