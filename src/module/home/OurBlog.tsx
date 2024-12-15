'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useGetAllPostQuery } from '@/state/postApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SkeletonPostCard from '@/components/skeleton/skeleton-post-card'
import { OptimizedImage } from '@/components/OptimizedImage'

export default function OurBlog() {
  const router = useRouter()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const { data, error, isLoading } = useGetAllPostQuery({
    rowsPerPage: 6,
    page: 1,
  });
  const { data: apiData } = data || {};

  return (
    <section className="px-6 py-8 lg:py-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 md:text-4xl lg:text-5xl">
            Our Blogs
          </h2>
          <p className="text-muted-foreground text-base max-w-[100%] lg:max-w-[90%] mx-auto">
            Dive into expertly crafted articles on diverse topics, from technology advancements and entertainment updates to industry trends. Our blogs are designed to inform, inspire, and keep you ahead in a rapidly evolving digital landscape. Stay updated with fresh perspectives and in-depth analysis—your gateway to staying informed and inspired!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading ? [...Array(6)].map((_: any, i: number) => <SkeletonPostCard key={i} />) :
            apiData?.result?.map((project: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm mx-auto"
              >

                <Card className="overflow-hidden bg-gray-100 transition-shadow hover:shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                   
                  >
                    <Link href={`/${project.categorie[0]?.title}/${project?.slug}`} prefetch={true}>
                      <OptimizedImage
                        src={project?.feature_image?.path}
                        alt={project?.feature_image?.altText || project?.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                      /></Link>
                  </motion.div>
                  <CardHeader className='p-4 pb-2'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Link href={`/${project.categorie[0]?.title}/${project?.slug}`} prefetch={true}>
                        <CardTitle className="text-xl font-bold line-clamp-2">{project.title}</CardTitle>
                      </Link>
                    </motion.div>
                  </CardHeader>
                  <CardContent className='px-4 pb-2'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </motion.div>
                  </CardContent>
                  <CardFooter className='px-4'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project?.tag?.map((tech: any) => (
                        <motion.div
                          key={tech?._id}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline">{tech?.title}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={() => router.push('/blog')} className="bg-black text-primary-foreground hover:text-black hover:bg-gray-100">
            View All Blog
          </Button>
        </motion.div>
      </div>
    </section >
  )
}