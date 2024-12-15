'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

interface Testimonial {
    id: number
    name: string
    company: string
    projectType: 'Web Development' | 'SEO' | 'Product Listing'
    content: string
    avatar: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aarav Patel",
        company: "TechInnovate India",
        projectType: "Web Development",
        content: "The web development team delivered an outstanding e-commerce platform. Our sales have increased by 150% since launch!",
        avatar: "/assets/avatar.webp?height=96&width=96",
        rating: 5
    },
    {
        id: 2,
        name: "Priya Sharma",
        company: "GlobalReach Solutions",
        projectType: "SEO",
        content: "Their SEO strategies significantly improved our search rankings. We're now on the first page for all our key terms!",
        avatar: "/assets/avatar.webp?height=96&width=96",
        rating: 4
    },
    {
        id: 3,
        name: "Vikram Malhotra",
        company: "DesignMasters",
        projectType: "Web Development",
        content: "The responsive design they created works flawlessly across all devices. Our bounce rate has decreased by 40%!",
        avatar: "/assets/avatar.webp?height=96&width=96",
        rating: 5
    },
    {
        id: 4,
        name: "Neha Gupta",
        company: "FutureTech Systems",
        projectType: "Product Listing",
        content: "The product listing optimization increased our click-through rates by 75%. A game-changer for our online store!",
        avatar: "/assets/avatar.webp?height=96&width=96",
        rating: 4
    },
    {
        id: 5,
        name: "Rajesh Kumar",
        company: "StartUp Accelerator",
        projectType: "SEO",
        content: "Their local SEO tactics put us on the map - literally! We've seen a 200% increase in local customer inquiries.",
        avatar: "/assets/avatar.webp?height=96&width=96",
        rating: 5
    }
]

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(timer)
    }, [])

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ))
    }

    return (
        <Card className="bg-background p-6 shadow-lg">
            <CardContent>
                <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                        <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex mb-sm" aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}>
                        {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <span className="text-[16px] font-medium text-primary mb-2">{testimonials[currentIndex].projectType}</span>
                    <blockquote className="text-[16px] mb-4">
                        "{testimonials[currentIndex].content}"
                    </blockquote>
                    <cite className="not-italic">
                        <span className="font-semibold">{testimonials[currentIndex].name}</span>
                        {/* <span className="block text-[16px] text-muted-foreground">{testimonials[currentIndex].company}</span> */}
                    </cite>
                </div>
            </CardContent>
            <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </Card>
    )
}

