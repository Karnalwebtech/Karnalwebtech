'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Review {
  id: number
  projectName: string
  clientName: string
  rating: number
  comment: string
}

const reviews: Review[] = [
  {
    id: 1,
    projectName: "E-commerce Platform",
    clientName: "John Doe",
    rating: 5,
    comment: "Excellent work on our e-commerce platform. The team delivered beyond our expectations!"
  },
  {
    id: 2,
    projectName: "Mobile App Development",
    clientName: "Jane Smith",
    rating: 4,
    comment: "Great job on our mobile app. The user interface is intuitive and the performance is smooth."
  },
  {
    id: 3,
    projectName: "Web Redesign",
    clientName: "Bob Johnson",
    rating: 5,
    comment: "The web redesign project was a huge success. Our site looks modern and professional now."
  }
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
        <div className="relative">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{reviews[currentIndex].projectName}</h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < reviews[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{reviews[currentIndex].comment}</p>
              <p className="font-medium">- {reviews[currentIndex].clientName}</p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

