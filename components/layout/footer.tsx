import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Reservations", href: "/reservations" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-10">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-foreground mb-4">Maria Havens</p>
            <p className="text-sm text-muted-foreground mb-2">Nyanchwa, Culinary District</p>
            <p className="text-sm text-muted-foreground mb-2">
              Phone: +254790473611/ +254115717029 | Email: info@mariahavens.com
            </p>
            <p className="text-xs leading-5 text-muted-foreground mt-8">
              &copy; 2025 Maria Havens Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
