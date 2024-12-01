import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "FAQ - Website SEO, Web Development, Digital Marketing, and Content Writing",
  description:
    "Frequently asked questions about website SEO, web development, digital marketing, and content writing. Get expert answers to your top questions.",
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Website SEO",
      questions: [
        {
          q: "What is SEO and why is it important?",
          a: "SEO (Search Engine Optimization) is the practice of optimizing a website to increase its visibility in search engine results. It's important because it helps drive organic traffic to your website, increases brand awareness, and can lead to higher conversion rates.",
        },
        {
          q: "How long does it take to see results from SEO?",
          a: "SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3-6 months. However, this can vary depending on factors such as competition, website age, and the quality of your SEO efforts.",
        },
        {
          q: "What are the most important SEO ranking factors?",
          a: "Some of the most important SEO ranking factors include high-quality content, mobile-friendliness, page speed, secure websites (HTTPS), user experience, backlinks, and relevance to search intent.",
        },
      ],
    },
    {
      category: "Web Development",
      questions: [
        {
          q: "What's the difference between front-end and back-end development?",
          a: "Front-end development focuses on the user interface and user experience of a website, using languages like HTML, CSS, and JavaScript. Back-end development deals with server-side logic, databases, and application integration, typically using languages like Python, Ruby, or Node.js.",
        },
        {
          q: "What is responsive web design?",
          a: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It uses flexible layouts, images, and cascading style sheet media queries to create a seamless user experience across devices.",
        },
        {
          q: "What are the benefits of using a content management system (CMS)?",
          a: "A CMS offers several benefits including easy content updates without technical knowledge, collaborative content creation, consistent layouts, and built-in SEO tools. Popular CMS options include WordPress, Drupal, and Joomla.",
        },
      ],
    },
    {
      category: "Digital Marketing",
      questions: [
        {
          q: "What is digital marketing?",
          a: "Digital marketing encompasses all marketing efforts that use electronic devices or the internet. It includes channels such as search engines, social media, email, and websites to connect with current and prospective customers.",
        },
        {
          q: "What's the difference between organic and paid social media marketing?",
          a: "Organic social media marketing involves creating and sharing content on social media platforms to build a community and engage with your audience without paid promotion. Paid social media marketing uses sponsored content or advertisements to reach a larger or more targeted audience.",
        },
        {
          q: "How can I measure the success of my digital marketing campaigns?",
          a: "You can measure digital marketing success through various metrics such as website traffic, conversion rates, engagement rates, click-through rates (CTR), return on investment (ROI), and customer lifetime value (CLV). Tools like Google Analytics can help track these metrics.",
        },
      ],
    },
    {
      category: "Content Writing",
      questions: [
        {
          q: "What makes good web content?",
          a: "Good web content is clear, concise, and valuable to the reader. It should be well-structured, easy to scan, optimized for SEO, and tailored to your target audience. It should also be free of errors and updated regularly.",
        },
        {
          q: "How often should I update my website's content?",
          a: "The frequency of content updates depends on your industry and goals. However, as a general rule, you should aim to add new content or update existing content at least once a month. Blogs may require more frequent updates, potentially weekly or bi-weekly.",
        },
        {
          q: "What is the ideal length for a blog post?",
          a: "The ideal blog post length can vary depending on the topic and purpose. However, studies suggest that long-form content (1,500 to 2,500 words) tends to perform better in search rankings. The most important factor is that the content thoroughly covers the topic and provides value to the reader.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
              <Accordion type="single" collapsible className="px-4 py-5 sm:p-6">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.q}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mt-1 text-gray-600">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
