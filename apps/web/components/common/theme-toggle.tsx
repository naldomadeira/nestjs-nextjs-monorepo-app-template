"use client"

import { MoonIcon, SunIcon } from "@repo/shadcn/lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@repo/shadcn/button"
import { JSX } from "react"

export function ThemeToggle(): JSX.Element {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="navbarIcon"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon
        className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <MoonIcon
        className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
