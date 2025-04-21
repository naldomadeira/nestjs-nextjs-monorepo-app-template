"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import type { NavItem } from "@/types/landing"

import { cn } from '@repo/shadcn/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@repo/shadcn/navigation-menu"

interface NavigationProps {
  navItems: NavItem[]
}

export function Navigation({ navItems }: NavigationProps) {
  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem asChild key={item.title}>
             <Link
              href={item.href}
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent"
              )}
            >
              {item.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
