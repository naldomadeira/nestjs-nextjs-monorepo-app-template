import Balancer from "react-wrap-balancer"
import { getTranslations } from "next-intl/server"

import { ContactForm } from "@/components/landing/forms/contact-form"
import { JSX } from "react"

export async function ContactSection(): Promise<JSX.Element> {
  const t = await getTranslations('Landing')

  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="w-full pb-8 sm:pb-16 md:pb-32"
    >
      <div className="container grid max-w-4xl grid-cols-1 justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              {t('contact_section.heading_1', { defaultValue: 'Let\'s' })}{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
                {t('contact_section.heading_2', { defaultValue: 'Get in Touch' })}
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              {t('contact_section.subheading', { 
                defaultValue: 'Feel free to email us with any questions you might have. While we are always happy to help, please keep in mind that this is a free product and we cannot guarantee any response times. We would also love to know your feedback!'
              })}
            </Balancer>
          </h3>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
