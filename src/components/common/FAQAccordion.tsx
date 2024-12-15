import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What technologies do you use for web development?",
    answer: "We utilize a comprehensive stack including HTML, CSS, and JavaScript as our foundation. For modern web applications, we employ React, Next.js, and TypeScript. Our styling is enhanced with Tailwind CSS and shadcn/ui components. This combination allows us to build fast, responsive, and maintainable websites."
  },
  {
    question: "Do you work with content management systems (CMS)?",
    answer: "Yes, we have extensive experience with WordPress and Squarespace. WordPress powers dynamic websites with its world-leading content management capabilities, while Squarespace offers seamless website creation and hosting with easy-to-use tools for creative professionals."
  },
  {
    question: "What about mobile app development?",
    answer: "We specialize in React Native for cross-platform mobile application development. This allows us to create high-performance, native-feel apps for both iOS and Android platforms using a single codebase, reducing development time and costs while maintaining excellent quality."
  },
  {
    question: "How do you handle backend development?",
    answer: "Our backend development utilizes Node.js for scalable and high-performance server-side applications. We use MongoDB as our database solution, offering flexibility and reliability for data storage. This stack enables us to build robust, scalable backend systems that power your applications effectively."
  },
  {
    question: "What design tools do you use?",
    answer: "We employ industry-leading design tools including Adobe Creative Suite for comprehensive design work, Canva for creating professional-grade graphics, and Coral for digital design and illustrations. Our UI development is enhanced with Material UI and shadcn/ui components, ensuring a polished and professional look."
  },
  {
    question: "How do you ensure website performance?",
    answer: "We optimize performance through various techniques: using Next.js for server-side rendering and static generation, implementing efficient React components, utilizing Tailwind CSS for optimized styling, and following best practices for code splitting and lazy loading. We also regularly monitor and test performance metrics."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance services. This includes regular updates, performance monitoring, security patches, and technical support. We ensure your website or application remains up-to-date, secure, and performing optimally."
  }
];

export default function FAQAccordion() {
  return (
    <section className="my-4 lg:my-8 container mx-6  mx-auto px-4">
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-0 lg:mb-6 text-center">Frequently <span className="text-gray-500">Asked</span> Questions</h2>
      </div>
      <div className="w-full max-w-[1000px] m-auto">
        <Accordion type="single" collapsible className="space-y-4 w-full ">
          {faqData.map((faq: FAQItem, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </section>
  );
}
