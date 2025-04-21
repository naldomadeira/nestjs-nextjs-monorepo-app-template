import * as React from "react"

import { Footer } from "@/components/landing/nav/footer"
import { Header } from "@/components/landing/nav/header"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({
  children,
}: LandingLayoutProps): React.JSX.Element {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
