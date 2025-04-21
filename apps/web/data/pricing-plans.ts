import { type PricingPlan } from "@/types/landing"

export const getPricingPlans = (t?: (key: string) => string): PricingPlan[] => [
  {
    id: "basic",
    name: t ? t("pricing.basic.name") : "Basic",
    description: t 
      ? t("pricing.basic.description") 
      : "Perfect for when you are just getting started",
    features: t 
      ? [
          t("pricing.basic.features.0"), 
          t("pricing.basic.features.1")
        ]
      : ["Up to 5 projects", "Basic analytics and reporting"],
    limitations: t
      ? [
          t("pricing.basic.limitations.0"), 
          t("pricing.basic.limitations.1"),
          t("pricing.basic.limitations.2"),
          t("pricing.basic.limitations.3")
        ]
      : [
          "No custom branding",
          "No commercial license",
          "Limited customer support",
          "No access to new features",
        ],
    stripePriceId: "",
    prices: {
      monthly: 9,
      yearly: 84,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "standard",
    name: t ? t("pricing.standard.name") : "Standard",
    description: t 
      ? t("pricing.standard.description") 
      : "Perfect for when you are starting to grow",
    features: t
      ? [
          t("pricing.standard.features.0"),
          t("pricing.standard.features.1"),
          t("pricing.standard.features.2"),
          t("pricing.standard.features.3"),
          t("pricing.standard.features.4")
        ]
      : [
          "Up to 10 projects",
          "Commercial license",
          "Advanced analytics and reporting",
          "Priority customer support",
          "Exclusive training materials",
        ],
    limitations: t
      ? [
          t("pricing.standard.limitations.0"),
          t("pricing.standard.limitations.1")
        ]
      : ["No custom branding", "Limited customer support"],
    stripePriceId: "",
    prices: {
      monthly: 19,
      yearly: 180,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "premium",
    name: t ? t("pricing.premium.name") : "Premium",
    description: t 
      ? t("pricing.premium.description") 
      : "Perfect for seriously scaling your business",
    features: t
      ? [
          t("pricing.premium.features.0"),
          t("pricing.premium.features.1"),
          t("pricing.premium.features.2"),
          t("pricing.premium.features.3"),
          t("pricing.premium.features.4"),
          t("pricing.premium.features.5")
        ]
      : [
          "Unlimited projects",
          "Commercial licence",
          "Real-time analytics and reporting",
          "Exclusive training materials",
          "24/7 custommer support",
          "Personal branding",
        ],
    limitations: [],
    stripePriceId: "",
    prices: {
      monthly: 29,
      yearly: 240,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
]

// For backward compatibility
export const pricingPlans = getPricingPlans()
