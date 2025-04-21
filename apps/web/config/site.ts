import { type NavItem, type NavItemFooter } from "@/types/landing"

const links = {
  github:
    "https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

// This function helps translate based on the t function from your i18n library
export const getSiteConfig = (t?: (key: string, options?: any) => string) => ({
  name: t ? t("siteConfig.name") : "SaaSy Land",
  description: t ? t("siteConfig.description") : "An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",
  links,
  url: "https://saasyland.com",
  ogImage: links.openGraphImage,
  author: "pjborowiecki",
  hostingRegion: "fra1",
  keywords: ["SaaS", "Next.js", "Template"],
  profile: [
    {
      account: t ? t("profile.account") : "Account",
      href: "/account",
    },
    {
      settings: t ? t("profile.settings") : "Settings",
      href: "/settings",
    },
    {
      settings: t ? t("profile.signout") : "Sign out",
      href: "/signout",
    },
  ],
  navItems: [
    {
      title: t ? t("navItems.about") : "About",
      href: "/about",
    },
    {
      title: t ? t("navItems.features") : "Features",
      href: "/features",
    },
    {
      title: t ? t("navItems.pricing") : "Pricing",
      href: "/pricing",
    },
    {
      title: t ? t("navItems.faq") : "FAQ",
      href: "/faq",
    },
    {
      title: t ? t("navItems.docs") : "Docs",
      href: "/docs",
    },
    {
      title: t ? t("navItems.blog") : "Blog",
      href: "/blog",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: t ? t("navItemsFooter.company.title") : "Company",
      items: [
        {
          title: t ? t("navItemsFooter.company.about") : "About",
          href: "/about",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.company.privacy") : "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.company.terms") : "Terms",
          href: "/tos",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.company.careers") : "Careers",
          href: "/careers",
          external: false,
        },
      ],
    },
    {
      title: t ? t("navItemsFooter.support.title") : "Support",
      items: [
        {
          title: t ? t("navItemsFooter.support.docs") : "Docs",
          href: "/docs",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.support.faq") : "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.support.blog") : "Blog",
          href: "/blog",
          external: false,
        },
        {
          title: t ? t("navItemsFooter.support.contact") : "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: t ? t("navItemsFooter.inspiration.title") : "Inspiration",
      items: [
        {
          title: t ? t("navItemsFooter.inspiration.shadcn") : "Shadcn",
          href: "https://ui.shadcn.com/",
          external: true,
        },
        {
          title: t ? t("navItemsFooter.inspiration.taxonomy") : "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: t ? t("navItemsFooter.inspiration.skateshop") : "Skateshop",
          href: "https://skateshop.sadmn.com/",
          external: true,
        },
        {
          title: t ? t("navItemsFooter.inspiration.acme") : "Acme Corp",
          href: "https://acme-corp.jumr.dev/",
          external: true,
        },
      ],
    },
  ] satisfies NavItemFooter[],
})

// For backward compatibility
export const siteConfig = getSiteConfig()
