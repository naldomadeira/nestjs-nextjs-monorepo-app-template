import { type Testimonial } from "@/types/landing"

export const getTestimonials = (t?: (key: string) => string): Testimonial[] => [
  {
    title: t ? t("testimonials.time_saving.title") : "Saved me a lot of time",
    body: t 
      ? t("testimonials.time_saving.body") 
      : "SaaSy Land saved us a significant amount of time and resources. We were able to focus on our core business, thanks to its powerful features.",
    name: t ? t("testimonials.time_saving.name") : "Derrick Bowman",
    role: t ? t("testimonials.time_saving.role") : "CEO at PixelCraft Studios",
    avatar: "/images/avatars/derrickbowman.jpeg",
  },
  {
    title: t ? t("testimonials.perfect_mvp.title") : "Perfect for MVPs",
    body: t 
      ? t("testimonials.perfect_mvp.body") 
      : "For startups, SaaSy Land is the perfect choice for building Minimum Viable Products (MVPs). It offers a wide range of pre-designed components and layouts that are essential for a quick go-to-market strategy. It helped us save months of development time and resources. SaaSy Land gave us a competitive edge and allowed us to test our ideas in the real world faster.",
    name: t ? t("testimonials.perfect_mvp.name") : "Troy Castillo",
    role: t ? t("testimonials.perfect_mvp.role") : "Software Architect at NexaCorp",
    avatar: "/images/avatars/troycastillo.jpeg",
  },
  {
    title: t ? t("testimonials.implementation.title") : "Incredible implementation quality!",
    body: t 
      ? t("testimonials.implementation.body") 
      : "From the initial concept to the final product, the implementation quality was truly incredible. Kudos to the entire team for their dedication and expertise.",
    name: t ? t("testimonials.implementation.name") : "Darren Miller",
    role: t ? t("testimonials.implementation.role") : "Senior Developer at Unicorn Labs",
    avatar: "/images/avatars/darrenmiller.jpeg",
  },
  {
    title: t ? t("testimonials.support.title") : "Outstanding customer support",
    body: t 
      ? t("testimonials.support.body") 
      : "The customer support from SaaSy Land is exceptional. They've been incredibly responsive and helpful throughout our journey. I just love their product and the way they handle it.",
    name: t ? t("testimonials.support.name") : "Beth Craig",
    role: t ? t("testimonials.support.role") : "CTO at Web Wizardry Inc.",
    avatar: "/images/avatars/bethcraig.jpeg",
  },
  {
    title: t ? t("testimonials.game_changer.title") : "A game-changer for startups",
    body: t 
      ? t("testimonials.game_changer.body") 
      : "Love love LOVE this product! It's changed my life to the point, where I can't imagine starting a new project without it anymore. Wholeheartedly recommended.",
    name: t ? t("testimonials.game_changer.name") : "Jenny Black",
    role: t ? t("testimonials.game_changer.role") : "Product Manager at StellarSoft",
    avatar: "/images/avatars/jennyblack.jpeg",
  },
  {
    title: t ? t("testimonials.speechless.title") : "Speechless!",
    body: t 
      ? t("testimonials.speechless.body") 
      : "It's a treasure trove of well-designed, responsive elements that significantly accelerated our development process. This enabled us to create complex features and interactive elements with ease. SaaSy Land not only saves us time but also ensures a consistent and professional look for our project. We couldn't be happier with the results.",
    name: t ? t("testimonials.speechless.name") : "Kevin Hamilton",
    role: t ? t("testimonials.speechless.role") : "Junior Developer at Purple Dash",
    avatar: "/images/avatars/kevinhamilton.jpeg",
  },
  {
    title: t ? t("testimonials.recommendation.title") : "Cannot recommend it enough",
    body: t 
      ? t("testimonials.recommendation.body") 
      : "If you're a startup, SaaSy Land is a perfect choice. It offers the tools you need to create a top-notch product without the hassle.",
    name: t ? t("testimonials.recommendation.name") : "Alfredo Bradley",
    role: t ? t("testimonials.recommendation.role") : "Software Developer at PixelMiners",
    avatar: "/images/avatars/alfredobradley.jpeg",
  },
  {
    title: t ? t("testimonials.code_quality.title") : "Exceptional code quality",
    body: t 
      ? t("testimonials.code_quality.body") 
      : "Implementation quality at SaaSy Land is exceptional. It made creating complex features a breeze and saved us from spending a lot of time and money on development.",
    name: t ? t("testimonials.code_quality.name") : "Michelle Jensen",
    role: t ? t("testimonials.code_quality.role") : "CEO at DevXpert Digital",
    avatar: "/images/avatars/michellejensen.jpeg",
  },
  {
    title: t ? t("testimonials.revolutionized.title") : "Revolutionized Our Web Development Process",
    body: t 
      ? t("testimonials.revolutionized.body") 
      : "Our experience with SaaSy Land has been nothing short of transformational. This platform has revolutionized our web development process, making it faster and more efficient than ever before. The features, tools, and support provided have exceeded our expectations, and we couldn't be happier with the results.",
    name: t ? t("testimonials.revolutionized.name") : "Rafał Kowalski",
    role: t ? t("testimonials.revolutionized.role") : "Product Owner at WebTech Co.",
    avatar: "/images/avatars/rafalkowalski.jpeg",
  },
]

// For backward compatibility
export const testimonials = getTestimonials()
