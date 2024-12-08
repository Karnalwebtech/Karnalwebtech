"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TimeAgo } from '@/lib/service/time/timeAgo'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { OptimizedImage } from '../OptimizedImage'
interface Post {
    id: string
    title: string
    image: string
    alt: string
    time: string
    categorie:any;
}
interface RecentlyViewedProps {
    apidata: any;
    page_title: string;
    path:string;
}
export const RecentlyViewed = ({ apidata, page_title,path }: RecentlyViewedProps) => {
    const [recentlyViewed, setRecentlyViewed] = useState<Post[]>([])

    useEffect(() => {
        // Load recently viewed posts from localStorage
        const storedPosts = localStorage.getItem('recentlyViewedPosts')
        const parsedPosts: Post[] = storedPosts ? JSON.parse(storedPosts) : []
        setRecentlyViewed(parsedPosts)
     // Check if apidata is valid
     if (!apidata?.slug || !apidata?.title || !apidata?.feature_image?.path) return;

        // Add current post to recently viewed
        const currentPost = {
            id: apidata?.slug,
            title: apidata?.title,
            image: apidata?.feature_image?.path,
            categorie: apidata?.categorie[0]?.slug,
            alt: apidata?.feature_image?.altText || 'Karnalwebtech',
            time: apidata?.createdAt,
        }

        const updatedPosts = [currentPost, ...parsedPosts.filter(post => post.id !== currentPost.id)]
        const limitedPosts = updatedPosts.slice(0, 4) // Keep only the 3 most recent

        // Update state and localStorage
        setRecentlyViewed(limitedPosts)
        localStorage.setItem('recentlyViewedPosts', JSON.stringify(limitedPosts))
    }, [apidata])

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{page_title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentlyViewed?.map((item: Post,) => (
                        <div key={item.id} className="flex gap-2">
                            <OptimizedImage
                                src={item?.image}
                                alt={item?.alt || "karnalwebtech"}
                                width={60}
                                height={60}
                                className="rounded-lg object-cover bg-cover"
                            />
                            <div>
                                <Link href={`/${item?.categorie}/${item.id}`}>
                                    <h3 className="text-sm font-medium line-clamp-2">{item?.title}</h3>
                                </Link>
                                <p className="text-xs text-muted-foreground"><TimeAgo time={item?.time}/></p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
