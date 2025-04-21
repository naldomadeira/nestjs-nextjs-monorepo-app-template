import { type FrequentlyAskedQuestion } from "@/types/landing"

import { siteConfig } from "@/config/site"

export const getFrequentlyAskedQuestions = (t?: (key: string, options?: any) => string): FrequentlyAskedQuestion[] => [
  {
    question: t 
      ? t("faq.what_is.question", { name: siteConfig.name }) 
      : `What is ${siteConfig.name}?`,
    answer: t 
      ? t("faq.what_is.answer", { name: siteConfig.name })
      : `${siteConfig.name} is a modern, open sourced collection starter
              templates for Next.js 14 full-stack projects. Built with Tailwind
              CSS, ShadCn, Next-Auth and several databases. Branches contain
              stand-alone set ups, including for serverless databases like
              PostgreSQL with Neon and MySQL with PlanetScale, Drizzle ORM,
              Prisma ORM v.5, but also MongoDB and Supabase.`,
  },
  {
    question: t 
      ? t("faq.what_is_included.question") 
      : `What is inlcuded ?`,
    answer: t 
      ? t("faq.what_is_included.answer")
      : `Several configuration options are available. Depending on which repo 
              branch you clone and decide to use, you will have a full-stack project 
              with advanced authentication (e.g., email verification, password reset, 
              magic link sign in, OAuth social sign in with Google and Github), synchronized 
              with a database of your choosing. On top of that, you will have a fully 
              functional landing page, which is extremally easy to customize, Markdown 
              and MDX-powered blog, documentation pages, Stripe payments integration, and more.`,
  },
  {
    question: t 
      ? t("faq.why_use.question", { name: siteConfig.name }) 
      : `Why would I want to use ${siteConfig.name}?`,
    answer: t 
      ? t("faq.why_use.answer")
      : `Since everything is professionally pre-configured and up to the latest standards, 
              you save a tremendous amount of time and effort, which you can now spend focusing 
              on what really matters - building your own, unique product. And it's completely free!`,
  },
  {
    question: t 
      ? t("faq.pricing_confusion.question") 
      : `I am confused with pricing`,
    answer: t 
      ? t("faq.pricing_confusion.answer")
      : `Our product is completely free and open source. The pricing section is there to 
              serve as an example of how you could set it up for your own SaaS product.
              We have no plans and no intentions to make this a paid product.`,
  },
  {
    question: t 
      ? t("faq.easy_to_use.question") 
      : `Is it easy to use? How do I get started?`,
    answer: t 
      ? t("faq.easy_to_use.answer", { name: siteConfig.name })
      : `${siteConfig.name} is extremely easy to use. You can get started by cloning a GitHub repo and following the documentation.`,
  },
  {
    question: t 
      ? t("faq.support.question") 
      : `Can I get help and support?`,
    answer: t 
      ? t("faq.support.answer")
      : `Feel free to email us with any questions, or start a discussion on GitHub. While we are always happy to help, please keep in mind 
        that this is a free product, which we develop out of passion in our free time and hence, we cannot guarantee any response times.`,
  },
  {
    question: t 
      ? t("faq.maintenance.question") 
      : `Is the product actively maintained?`,
    answer: t 
      ? t("faq.maintenance.answer", { name: siteConfig.name })
      : `${siteConfig.name} is currently under active development. We are working on adding new features and improving the existing ones.
        We are also working on improving the documentation and adding more examples. Stay tuned! You may also consider signing up for our newsletter 
        to get notified about new major releases. We will not spam you, we promise!`,
  },
]

// For backward compatibility
export const frequentlyAskedQuestions = getFrequentlyAskedQuestions()
