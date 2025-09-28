"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Reservations", href: "/reservations" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Events", href: "/events" },
  // { name: "Press", href: "/press" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header always sticky */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 h-16">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="p-1.5">
              <span className="font-serif text-2xl font-bold text-foreground">
                Maria Havens
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/reservations">Reservation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm bg-background shadow-xl flex flex-col"
            >
              {/* ✅ Only close button (no logo here) */}
              <div className="flex items-center justify-end p-6 border-b border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Nav links */}
              <div className="flex-1 flex flex-col p-6 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/reservations" onClick={() => setMobileMenuOpen(false)}>
                    Reserve Table
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
