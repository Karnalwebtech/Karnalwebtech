import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateSchema } from "@/lib/service/schemas/generateSchema";
import { base_url } from "@/paths";

export const metadata: Metadata = {
  title:
    "Frequently Asked Questions (FAQs) – Find Answers to Your Queries",
  description:
    "Find quick answers to common questions about our products, services, and policies in our FAQ section.",
  keywords: [
    "faq",
    
  ],
  openGraph: {
    title:
      "Frequently Asked Questions (FAQs) – Find Answers to Your Queries",
    description:
      "Find quick answers to common questions about our products, services, and policies in our FAQ section.",
    url: `${base_url}/faq`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: `${base_url}/assets/faq.webp`,
        width: 1200,
        height: 630,
        alt: "Karnal Web tech faq",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title:
      "Frequently Asked Questions (FAQs) – Find Answers to Your Queries",
    description:
      "Find quick answers to common questions about our products, services, and policies in our FAQ section.",
    images: ["/assets/faq.webp"],
  },
  alternates: {
    canonical: `${base_url}/faq`,
  },
};

export default function FAQPage() {
  const schema: any = generateSchema({
    title:
      "Frequently Asked Questions (FAQs) – Find Answers to Your Queries",
    description:
      "Find quick answers to common questions about our products, services, and policies in our FAQ section.",
    slug: "faq",
    path: `${base_url}/assets/faq.webp`,
  });
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
        {
          q: "What is on-page SEO?",
          a: "On-page SEO refers to the practice of optimizing individual web pages to rank higher in search engines. It includes optimizing content, images, internal links, title tags, meta descriptions, and URL structures.",
        },
        {
          q: "What is off-page SEO?",
          a: "Off-page SEO refers to activities done outside of your website that impact your ranking, such as backlinks, social media mentions, and influencer marketing.",
        },
        {
          q: "What is keyword research?",
          a: "Keyword research is the process of identifying words and phrases that people search for in search engines. It helps you target the right terms to increase visibility and drive traffic.",
        },
        {
          q: "What are backlinks and why are they important?",
          a: "Backlinks are links from other websites that point to your site. They are important for SEO because they help improve your site's authority and ranking in search engines.",
        },
        {
          q: "What is local SEO?",
          a: "Local SEO is the process of optimizing your website to rank higher in local search results, such as 'near me' searches. It includes optimizing your Google My Business profile, getting local backlinks, and ensuring your site has local relevance.",
        },
        {
          q: "What is technical SEO?",
          a: "Technical SEO involves optimizing your website's infrastructure to ensure it is crawled and indexed properly by search engines. This includes improving site speed, ensuring mobile-friendliness, and fixing any technical issues.",
        },
        {
          q: "What is SEO content optimization?",
          a: "SEO content optimization is the process of creating content that is both valuable to users and optimized for search engines. This includes using the right keywords, structuring content properly, and ensuring it meets search intent.",
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
        {
          q: "What is the purpose of HTML in web development?",
          a: "HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure for content such as headings, paragraphs, links, and images.",
        },
        {
          q: "What is CSS and why is it important?",
          a: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance of elements on the page, such as fonts, colors, margins, and positioning.",
        },
        {
          q: "What is JavaScript and how is it used in web development?",
          a: "JavaScript is a programming language used to create interactive effects within web browsers. It is commonly used for dynamic elements like forms, buttons, and content updates.",
        },
        {
          q: "What is a website wireframe?",
          a: "A wireframe is a visual guide that represents the skeletal structure of a website. It shows the layout and placement of elements on the page without including design details.",
        },
        {
          q: "What is a responsive layout?",
          a: "A responsive layout adjusts the design and layout of a webpage to fit different screen sizes and devices, providing an optimal viewing experience.",
        },
        {
          q: "What is the role of a web developer?",
          a: "A web developer is responsible for building and maintaining websites. They write code in programming languages like HTML, CSS, and JavaScript to ensure the website is functional and user-friendly.",
        },
        {
          q: "What is API integration in web development?",
          a: "API integration involves connecting different software systems through an API (Application Programming Interface), allowing them to exchange data and functionality.",
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
        {
          q: "What is content marketing?",
          a: "Content marketing involves creating and sharing valuable content to attract and engage a target audience. It aims to drive customer action, such as making a purchase or signing up for a newsletter.",
        },
        {
          q: "What is pay-per-click (PPC) advertising?",
          a: "PPC is a digital advertising model where advertisers pay each time their ad is clicked. Common platforms for PPC include Google Ads and Facebook Ads.",
        },
        {
          q: "What are the benefits of email marketing?",
          a: "Email marketing is effective for nurturing leads, building customer loyalty, and promoting offers. It provides a direct line to your audience and allows for personalized communication.",
        },
        {
          q: "What is influencer marketing?",
          a: "Influencer marketing involves partnering with influential individuals on social media to promote your products or services to their audience.",
        },
        {
          q: "What is affiliate marketing?",
          a: "Affiliate marketing is a performance-based marketing strategy where a business rewards affiliates for each customer brought by the affiliate's marketing efforts.",
        },
        {
          q: "How do I optimize my website for conversions?",
          a: "Conversion rate optimization (CRO) involves improving your website's user experience, design, content, and calls-to-action to encourage visitors to take desired actions, such as making a purchase or filling out a form.",
        },
        {
          q: "What are remarketing ads?",
          a: "Remarketing ads target users who have previously visited your website but did not complete a conversion. These ads remind them of your product or service and encourage them to return and complete the action.",
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
        {
          q: "What is the difference between copywriting and content writing?",
          a: "Copywriting is focused on writing content for marketing or advertising purposes, with the goal of persuading the reader to take action. Content writing is more focused on providing valuable information to the reader and engaging them.",
        },
        {
          q: "What is SEO content writing?",
          a: "SEO content writing is the practice of creating content that is optimized for search engines. This involves using relevant keywords, writing engaging content, and structuring it in a way that improves search rankings.",
        },
        {
          q: "How do you write content that converts?",
          a: "To write content that converts, focus on solving the reader's problem, using clear calls-to-action (CTAs), creating urgency, and providing social proof such as testimonials or case studies.",
        },
        {
          q: "What tone should my website's content have?",
          a: "The tone of your website's content should align with your brand and audience. It can be formal, conversational, humorous, or authoritative, depending on the type of business and the message you want to convey.",
        },
        {
          q: "How can I improve my content's readability?",
          a: "Improve readability by using short paragraphs, bullet points, clear headings, and a simple, conversational writing style. Avoid jargon and use active voice.",
        },
        {
          q: "What are some content writing tools?",
          a: "Some popular content writing tools include Grammarly for grammar checking, Hemingway Editor for readability analysis, and Yoast SEO for optimizing content for search engines.",
        },
        {
          q: "What is the role of a content writer?",
          a: "A content writer creates written material for websites, blogs, and other digital platforms. Their role is to engage the audience, provide value, and drive traffic or conversions.",
        },
      ],
    },
    {
      category: "Canva",
      questions: [
        {
          q: "What is Canva?",
          a: "Canva is an online graphic design tool that allows users to create professional-quality graphics for social media, presentations, marketing materials, and more. It provides templates, images, and tools to simplify the design process.",
        },
        {
          q: "Is Canva free?",
          a: "Yes, Canva offers a free version that provides access to a wide range of design templates, photos, and elements. They also have a paid version called Canva Pro, which offers more advanced features and a larger library.",
        },
        {
          q: "Can I create animations in Canva?",
          a: "Yes, Canva allows you to create animated designs, including animated text, elements, and entire presentations. You can also export your animations as GIFs or videos.",
        },
        {
          q: "Can I upload my own photos to Canva?",
          a: "Yes, Canva allows you to upload your own images and use them in your designs. You can upload photos, logos, and other media files to personalize your designs.",
        },
        {
          q: "How do I collaborate with others on Canva?",
          a: "Canva enables collaboration by allowing you to invite others to edit your design. You can share a link to your design with others or add them as collaborators by entering their email addresses.",
        },
        {
          q: "What file formats can I export from Canva?",
          a: "Canva supports multiple export formats, including PNG, JPG, PDF, MP4, GIF, and more. The format you choose depends on the type of project you're working on.",
        },
        {
          q: "Does Canva offer templates?",
          a: "Yes, Canva offers thousands of customizable templates for everything from social media posts to presentations, business cards, posters, and more.",
        },
        {
          q: "Can I use Canva for business?",
          a: "Yes, Canva is great for business use. It offers branding tools, team collaboration features, and a wide selection of marketing templates to help with creating business materials like flyers, social media posts, and email headers.",
        },
        {
          q: "Can I print designs created in Canva?",
          a: "Yes, Canva allows you to print your designs directly through their platform or download the files and print them yourself. They offer printing services for business cards, posters, flyers, and more.",
        },
        {
          q: "Is Canva available on mobile?",
          a: "Yes, Canva has a mobile app available for iOS and Android devices. This allows you to design and edit on the go.",
        },
      ],
    },
    {
      category: "Adobe Creative Suite",
      questions: [
        {
          q: "What is Adobe Creative Cloud?",
          a: "Adobe Creative Cloud is a collection of software tools for graphic design, video editing, web development, photography, and more. It includes programs like Photoshop, Illustrator, Premiere Pro, After Effects, and more.",
        },
        {
          q: "Is Adobe Photoshop part of Creative Cloud?",
          a: "Yes, Adobe Photoshop is one of the most popular tools included in Adobe Creative Cloud. It's widely used for photo editing, digital painting, and design work.",
        },
        {
          q: "What is the difference between Adobe Photoshop and Adobe Illustrator?",
          a: "Adobe Photoshop is used for editing raster images (photos or pixel-based designs), while Adobe Illustrator is used for creating vector graphics that can be scaled without losing quality.",
        },
        {
          q: "Can I use Adobe Creative Cloud on multiple devices?",
          a: "Yes, Adobe Creative Cloud allows you to install apps on multiple devices and synchronize your work across them using the cloud storage feature.",
        },
        {
          q: "Do I need to subscribe to Adobe Creative Cloud?",
          a: "Yes, Adobe Creative Cloud is subscription-based. Adobe offers various subscription plans, including individual, business, and student plans, depending on your needs.",
        },
        {
          q: "What are the main tools in Adobe Creative Cloud?",
          a: "Some of the key tools in Adobe Creative Cloud include Photoshop (photo editing), Illustrator (vector design), Premiere Pro (video editing), After Effects (motion graphics), and InDesign (layout design).",
        },
        {
          q: "Can I use Adobe Creative Cloud for web design?",
          a: "Yes, Adobe Creative Cloud includes several tools for web design, such as Adobe XD (for wireframing and UI/UX design), Dreamweaver (for coding websites), and Photoshop/Illustrator for creating website graphics.",
        },
        {
          q: "Can Adobe Creative Cloud be used for video editing?",
          a: "Yes, Adobe Creative Cloud includes powerful video editing tools, such as Premiere Pro for video editing, After Effects for motion graphics, and Audition for audio editing.",
        },
        {
          q: "What is Adobe Lightroom?",
          a: "Adobe Lightroom is a photo editing and management software, particularly used for organizing and processing large numbers of photos. It is preferred by photographers for editing RAW images and applying batch edits.",
        },
        {
          q: "Does Adobe Creative Cloud offer cloud storage?",
          a: "Yes, Adobe Creative Cloud provides cloud storage to back up your files, collaborate with others, and access your designs from multiple devices.",
        },
      ],
    },
    {
      category: "CorelDRAW",
      questions: [
        {
          q: "What is CorelDRAW?",
          a: "CorelDRAW is a graphic design software that is primarily used for vector illustration, logo design, and layout design. It offers advanced tools for creating and editing scalable graphics.",
        },
        {
          q: "What is the difference between CorelDRAW and Adobe Illustrator?",
          a: "Both CorelDRAW and Adobe Illustrator are vector graphics software, but CorelDRAW is known for its user-friendly interface and is often preferred for printing and graphic design work. Illustrator, on the other hand, is often seen as the industry standard for vector design.",
        },
        {
          q: "Can CorelDRAW be used for web design?",
          a: "Yes, CorelDRAW can be used for web design, particularly for creating vector graphics, logos, and other web assets. However, it lacks some of the web-specific tools that software like Adobe XD or Dreamweaver offers.",
        },
        {
          q: "Is CorelDRAW compatible with Adobe files?",
          a: "Yes, CorelDRAW can open and export Adobe Illustrator files (.ai) and other Adobe formats. However, there may be some compatibility issues with more complex files.",
        },
        {
          q: "Can I use CorelDRAW for photo editing?",
          a: "CorelDRAW is primarily for vector graphics, but Corel offers another product, Corel PHOTO-PAINT, that integrates with CorelDRAW and allows for raster photo editing.",
        },
        {
          q: "How do I create a logo in CorelDRAW?",
          a: "To create a logo in CorelDRAW, start by using basic shapes and tools to build the design. You can use the Pen Tool for custom paths, add color and text, and then adjust the elements for scalability.",
        },
        {
          q: "What file formats can I export from CorelDRAW?",
          a: "CorelDRAW supports a wide range of file formats including .cdr (CorelDRAW's native format), .ai (Adobe Illustrator), .eps, .svg, .pdf, and many others.",
        },
        {
          q: "Can I collaborate on designs using CorelDRAW?",
          a: "CorelDRAW allows you to share files with others, and users can make edits if they have the software. However, it does not have real-time collaboration features like Adobe Creative Cloud.",
        },
        {
          q: "What is the learning curve for CorelDRAW?",
          a: "CorelDRAW is user-friendly, but it can take time to learn all of its features, especially if you're new to graphic design software. Many users find the interface intuitive compared to other design tools.",
        },
        {
          q: "Is CorelDRAW available for Mac?",
          a: "CorelDRAW was historically available only for Windows, but in recent years, Corel has released a version of CorelDRAW for Mac users, which is available for subscription.",
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
