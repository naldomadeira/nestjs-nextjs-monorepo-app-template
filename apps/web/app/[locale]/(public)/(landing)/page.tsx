import { BenefitsSection } from "@/components/landing/sections/benefits-section"
import { ContactSection } from "@/components/landing/sections/contact-section"
import { FAQSection } from "@/components/landing/sections/faq-section"
import { FeaturesSection } from "@/components/landing/sections/features-section"
import { HeroSection } from "@/components/landing/sections/hero-section"
import { NewsletterSection } from "@/components/landing/sections/newsletter-section"
import { PricingSection } from "@/components/landing/sections/pricing-section"
import { TechSection } from "@/components/landing/sections/tech-section"
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section"
import { JSX } from "react"

export default function LandingPage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />
      <TechSection />
      <BenefitsSection />
      <FeaturesSection />
      <NewsletterSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
