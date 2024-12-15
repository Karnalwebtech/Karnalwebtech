'use client'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import StackCard from '@/components/cards/stack-card'

export default function TechnologyStack() {
    const technologies = [
        { title: 'HTML', icon: "html.png", description: 'The foundation of every web page, enabling the creation of well-structured and accessible content.' },
        { title: 'CSS', icon: "css.png", description: 'Crafting visually appealing and responsive designs to enhance user experience across devices.' },
        { title: 'WordPress', icon: "wordpress.png", description: 'Powering dynamic websites with the world\'s leading content management system.' },
        { title: 'Squarespace', icon: "squarespace.png", description: 'Offering seamless website creation and hosting with easy-to-use tools for creative professionals.' },
        { title: 'Wix', icon: "wix.png", description: 'Simplifying web development with a flexible platform for building stunning websites.' },
        { title: 'JavaScript', icon: "javascript.png", description: 'A powerful programming language driving interactivity and functionality in web applications.' },
        { title: 'React', icon: "react.png", description: 'Building dynamic and reusable user interface components for web and mobile applications.' },
        { title: 'React Native', icon: "react native.png", description: 'Crafting cross-platform mobile applications with high performance and a native feel.' },
        { title: 'Next.js', icon: "nextjs-icon.png", description: 'Empowering server-side rendering and optimized performance for React applications.' },
        { title: 'TypeScript', icon: "ts.png", description: 'Enhancing JavaScript with strong typing for large-scale, maintainable applications.' },
        { title: 'Node.js', icon: "node-js-black-icon.png", description: 'Enabling scalable and high-performance server-side applications with a runtime built on V8' },
        { title: 'Material UI', icon: "materalui.png", description: 'Simplifying the development of aesthetically pleasing and accessible user interfaces.' },
        { title: 'MongoDB', icon: "db.png", description: 'A document-oriented database ensuring flexibility and scalability for your data needs.' },
        { title: 'shadcn/ui', icon: "shadcen.png", description: 'Designing stunning components with Radix UI and Tailwind CSS integration.' },
        { title: 'Tailwind CSS', icon: "Tailwind CSS.webp", description: 'Rapidly building custom designs with a utility-first CSS framework.' },
        { title: 'Coral', icon: "coral.png", description: 'Digital design tool for creating graphics and illustrations' },
        { title: 'Canva', icon: "canva.png", description: 'Creating professional-grade graphics and visuals for your branding and marketing needs.' },
        { title: 'Adobe Creative Suite', icon: "adobe.png", description: 'Delivering comprehensive tools for design, video production, and web development.' },
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

    return (
        <section className="px-4 py-6 lg:py-8 bg-white">

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black mb-4 md:text-4xl lg:text-5xl">
                        Our Technology Stack
                    </h2>
                    <p className="text-muted-foreground text-base max-w-[100%] lg:max-w-[70%] mx-auto">
                        At KarnalWebTech, we leverage a versatile and modern technology stack to deliver innovative, robust, and scalable solutions tailored to your needs. Here's an overview of the tools and frameworks we use:
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {technologies.map((tech: any, index: number) => (
                        <motion.div key={index} variants={cardVariants}>
                            <StackCard item={tech} />
                        </motion.div>
                    ))}
                </motion.div>


                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-gray-600 mb-4">
                        And many more cutting-edge tools and frameworks!
                    </p>
                    <Badge variant="outline" className="text-black border-black hover:bg-gray-100">
                        Explore Our Full Stack
                    </Badge>
                </motion.div>
            </div>
        </section>
    )
}