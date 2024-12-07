'use client'

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import InfintySliderTb from "@/components/common/InfintySliderTb"

const ANIMATION_DURATION = 30
const MAX_WIDTH = 1380

export default function HeroSection() {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const handleDiscoverClick = useCallback(() => {
    router.push("/projects")
  }, [router])

  return (
    <div
      className={`relative overflow-hidden bg-cover bg-no-repeat ${isAnimating ? 'animate-background' : ''
        }`}
      style={{
        backgroundImage: "url(/assets/background.jpg)",
        perspective: "1000px",
      }}
    >
      <div className="bg-black/60">
        <div className="m-auto flex max-w-[1380px] flex-col items-center py-8 lg:min-h-[650px] lg:flex-row">
          <div className="relative z-10 w-full p-2 text-center lg:w-2/5 lg:text-end">
            <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Your Business
              <br />
              Deserves to Shine
            </h1>
            <p className="mb-8 max-w-2xl text-base text-white md:text-lg">
              We empower startups and brands by creating innovative, engaging,
              and tailored software solutions that drive success and make an
              impact.
            </p>
            <Button
              onClick={handleDiscoverClick}
              size="lg"
              className="bg-white text-black hover:bg-indigo-100"
            >
              Discover Our Work
            </Button>
          </div>
          <div className="w-full p-4 lg:w-3/5">
            <InfintySliderTb />
          </div>
        </div>
      </div>
    </div>
  )
}

