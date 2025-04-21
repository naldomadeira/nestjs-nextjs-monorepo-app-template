"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { useTranslations } from "next-intl"
import type { NavItem } from "@/types/landing"

import { cn } from '@repo/shadcn/lib/utils';

import { Button } from "@repo/shadcn/button"
import { Sheet, SheetContent, SheetTrigger } from "@repo/shadcn/sheet"
import { Icons } from "@/components/icons"

interface NavigationMobileProps {
  navItems: NavItem[]
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

export function NavigationMobile({ navItems }: NavigationMobileProps) {
  const segment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const t = useTranslations('Landing')
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="transition-all duration-300 ease-in-out">
        <Button variant="navbarIcon" size="icon" className="md:hidden">
          <Icons.menuToggle className="size-5" aria-hidden="true" />
          <span className="sr-only">{t('navigation.toggle_menu', { defaultValue: 'Toggle Menu' })}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-10 transition-all duration-300 ease-in-out"
      >
        <div className="pl-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Icons.rocket className="mr-2 size-8" aria-hidden="true" />
            <span className="text-2xl font-bold leading-none tracking-wide">
              {t('siteConfig.name')}
            </span>
            <span className="sr-only">{t('navigation.home', { defaultValue: 'Home' })}</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 pl-16 text-xl font-medium leading-none tracking-wide">
          {navItems.map((item) => (
            <MobileLink
              key={item.title}
              href={item.href}
              segment={String(segment)}
              setIsOpen={setIsOpen}
            >
              {item.title}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
