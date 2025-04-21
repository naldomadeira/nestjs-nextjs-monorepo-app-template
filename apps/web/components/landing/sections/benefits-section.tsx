import Image from "next/image"
import Balancer from "react-wrap-balancer"
import { getTranslations } from "next-intl/server"

import { getSiteConfig } from "@/config/site"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/card"
import { JSX } from "react"

export async function BenefitsSection(): Promise<JSX.Element> {
  const t = await getTranslations('Landing')
  const localizedSiteConfig = getSiteConfig(t)

  return (
    <section id="about-section" aria-label="about section" className="w-full">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              {t('benefits.heading_1', { defaultValue: 'Why' })}{" "}
              <span className="relative bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text font-extrabold text-transparent">
                {t('benefits.heading_2', { defaultValue: 'Should You Care?' })}
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              {t('benefits.subheading', { 
                name: localizedSiteConfig.name,
                defaultValue: 'Your competitors are already using {name} and similar products, gaining time and competitive advantage. Don\'t get left behind!'
              })}
            </Balancer>
          </h3>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="space-y-4 md:mt-20 md:space-y-6">
            <Card
              id="1"
              className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  {t('benefits.card1.description', { defaultValue: 'Incredible Time Saver' })}
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>
                    {t('benefits.card1.title_1', { defaultValue: 'Get a Head Start' })} <br className="hidden md:inline-block" />{" "}
                    {t('benefits.card1.title_2', { defaultValue: 'on Your Competitors' })}
                  </Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    {t('benefits.card1.content', { 
                      defaultValue: 'Since everything is professionally configured and up to standards, you save a tremendous amount of time and effort, which you can now spend focusing on what really matters - core functionality, unique to your business.'
                    })}
                  </Balancer>
                </p>
                <div>
                  <div className="pr-8">
                    <div className="relative z-10 flex flex-col gap-3 rounded-xl bg-background p-4 text-center shadow-xl">
                      <p className="text-3xl font-bold text-pink-800 dark:text-pink-600">
                        162.9k
                      </p>
                      <p className="text-xs font-bold tracking-wide text-purple-600 dark:text-purple-300">
                        {t('benefits.card1.stats_title_1', { defaultValue: 'Last 7 Days Website Visits' })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t('benefits.card1.stats_subtitle_1', { defaultValue: '23% Increase from Last Week' })}
                      </p>
                    </div>
                  </div>
                  <div className="-mt-14 pl-8">
                    <div className="flex flex-col gap-3 rounded-xl bg-background p-4 text-center opacity-30 shadow-xl">
                      <p className="text-3xl font-bold">132.7k</p>
                      <p className="text-xs font-bold tracking-wide">
                        {t('benefits.card1.stats_title_2', { defaultValue: 'Last 14 Days Website Visits' })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t('benefits.card1.stats_subtitle_2', { defaultValue: '17% Increase from Last Week' })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              id="2"
              className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  {t('benefits.card2.description', { defaultValue: 'Latest and Greatest in Tech' })}
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>{t('benefits.card2.title', { defaultValue: 'Take Advantage of Modern Technologies' })}</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    {t('benefits.card2.content', { 
                      defaultValue: 'We are constantly updating our templates to take advantage of the latest and greatest technologies, so you can be sure that your website is always up to date and as fast as possible.'
                    })}
                  </Balancer>
                </p>
                <Image
                  width={600}
                  height={400}
                  alt={t('benefits.card2.image_alt', { defaultValue: 'illustration' })}
                  src="/images/benefits/3.jpeg"
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 md:space-y-6">
            <Card
              id="3"
              className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  {t('benefits.card3.description', { defaultValue: 'High Quality Implementation' })}
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>{t('benefits.card3.title', { defaultValue: 'Know Everything Works As Expected' })}</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    {t('benefits.card3.content', { 
                      defaultValue: 'We spent countless hours researching, exploring docs and testing the best way to implement the most important features. We have done the hard work so you don\'t have to.'
                    })}
                  </Balancer>
                </p>
                <Image
                  width={600}
                  height={400}
                  alt={t('benefits.card3.image_alt', { defaultValue: 'illustration' })}
                  src="/images/benefits/2.jpeg"
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>

            <Card
              id="4"
              className="h-fit w-full bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardHeader>
                <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                  {t('benefits.card4.description', { defaultValue: 'Flexibility and Support' })}
                </CardDescription>
                <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                  <Balancer>
                    {t('benefits.card4.title_1', { defaultValue: 'Easily Customize' })} <br />
                    {t('benefits.card4.title_2', { defaultValue: 'Every Single Detail' })}
                  </Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    {t('benefits.card4.content', { 
                      defaultValue: 'With the help of our detailed documentation, you can now easily customize every single detail of the template. Should you need any help, we are a message away.'
                    })}
                  </Balancer>
                </p>
                <Image
                  width={600}
                  height={400}
                  alt={t('benefits.card4.image_alt', { defaultValue: 'illustration' })}
                  src="/images/benefits/1.jpeg"
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
