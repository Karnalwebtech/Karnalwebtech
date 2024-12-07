import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { TimeAgo } from '@/lib/service/time/timeAgo'

export const RelatiedPost = ({ data,  page_title }: { data: any,  page_title: string }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{page_title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {data?.map((item: any,) => (
                    <div key={item._id} className="flex gap-2">
                        <Image
                            src={item?.feature_image?.path}
                            alt={item?.feature_image?.altText || "karnalwebtech"}
                            width={60}
                            height={60}
                            priority
                            className="rounded-lg object-cover bg-cover"
                            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                        <div>
                            <Link href={`/${item?.categorie[0]?.slug}/${item?.slug}`}>
                                <h3 className="text-sm font-medium line-clamp-2">{item?.title}</h3>
                            </Link>
                            <p className="text-xs text-muted-foreground"><TimeAgo time={item.updatedAt}/></p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
