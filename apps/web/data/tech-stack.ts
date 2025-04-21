// Function to get tech stack with translations
export const getTechStack = (t?: (key: string) => string) => [
  {
    title: t ? t("techStack.next") : "Next",
    href: "https://nextjs.org/",
    icon: "next",
  },
  {
    title: t ? t("techStack.authJs") : "AuthJs",
    href: "https://authjs.dev/",
    icon: "authJs",
  },
  {
    title: t ? t("techStack.drizzle") : "Drizzle",
    href: "https://orm.drizzle.team/",
    icon: "drizzle",
  },
  {
    title: t ? t("techStack.prisma") : "Prisma",
    href: "https://www.prisma.io/",
    icon: "prisma",
  },
  {
    title: t ? t("techStack.planetScale") : "PlanetScale",
    href: "https://planetscale.com/",
    icon: "planetScale",
  },
  {
    title: t ? t("techStack.neon") : "Neon",
    href: "https://neon.tech/",
    icon: "neon",
  },
  {
    title: t ? t("techStack.resend") : "Resend",
    href: "https://resend.com/",
    icon: "resend",
  },
  {
    title: t ? t("techStack.stripe") : "Stripe",
    href: "https://stripe.com/",
    icon: "stripe",
  },
]

// For backward compatibility
export const techStack = getTechStack()
