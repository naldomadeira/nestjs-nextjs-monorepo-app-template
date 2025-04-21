import { type Feature } from "@/types/landing"

export const getFeatures = (t?: (key: string) => string): Feature[] => [
  {
    title: t ? t("features.authentication.title") : "Advanced authentication",
    description: t 
      ? t("features.authentication.description") 
      : "Secure user access with robust authentication features for your application, such as email verification, password reset, magic links and OAuth providers. Powered by Next-Auth.",
    image: "/images/features/authentication.png",
  },
  {
    title: t ? t("features.database.title") : "Powerful database connection",
    description: t
      ? t("features.database.description")
      : "Leverage the strength of a serverless database for efficient data management and lightning-fast content delivery.",
    image: "/images/features/database.png",
  },
  {
    title: t ? t("features.blog.title") : "Markdown and MDX-powered blog",
    description: t
      ? t("features.blog.description")
      : "Modern, lightweight, convenient, and SEO-friendly blogging support. Powered by Contentlayer.",
    image: "/images/features/blogging.png",
  },
  {
    title: t ? t("features.payments.title") : "Stripe payments integration",
    description: t
      ? t("features.payments.description")
      : "Simply add your products or services, define prices, and start selling online with this fully functional implementation.",
    image: "/images/features/payments.png",
  },
  {
    title: t ? t("features.emails.title") : "Transactional email support",
    description: t
      ? t("features.emails.description")
      : "Ensure relaibel email communication for essential updates and notifications. Powered by Resend and React Email.",
    image: "/images/features/emails.png",
  },
]

// For backward compatibility
export const features = getFeatures()
