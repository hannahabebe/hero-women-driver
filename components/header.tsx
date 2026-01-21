"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CarTaxiFront } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"
  const isAboutPage = pathname === "/about"
  const isServicesPage = pathname === "/services"
  const isContactPage = pathname === "/contact"

  return (
    <header style={{ backgroundColor: "var(--neutral-pink)" }} className="sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hero Taxi"
              width={120}
              height={40}
              className="object-contain w-[80px] h-[27px] sm:w-[80px] sm:h-[27px] md:w-[100px] md:h-[33px] lg:w-[120px] lg:h-[40px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className={`type-heading ${
                  isHomePage
                    ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)] underline-offset-4"
                    : "text-gray-800 hover:text-gray-600"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`type-heading ${
                  isAboutPage
                    ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)] underline-offset-4"
                    : "text-gray-800 hover:text-gray-600"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className={`type-heading ${
                  isServicesPage
                    ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)] underline-offset-4"
                    : "text-gray-800 hover:text-gray-600"
                }`}
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className={`type-heading ${
                  isContactPage
                    ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)] underline-offset-4"
                    : "text-gray-800 hover:text-gray-600"
                }`}
              >
                CONTACT US
              </Link>
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            <button
              className="px-4 py-2 rounded-lg btn-montserrat flex items-center gap-2 hover:opacity-95 transition"
              style={{ background: "var(--accent-gradient)", color: "var(--primary)" }}
            >
              <CarTaxiFront className="w-5 h-5" aria-hidden />
              BOOK A RIDE
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              className={`type-heading ${
                isHomePage ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)]" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`type-heading ${
                isAboutPage ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)]" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className={`type-heading ${
                isServicesPage ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)]" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className={`type-heading ${
                isContactPage ? "text-[var(--primary)] underline decoration-2 decoration-[var(--primary)]" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>

            <button
              className="w-full px-4 py-2 rounded-lg btn-montserrat flex items-center justify-center gap-2 hover:opacity-95 transition"
              style={{ background: "var(--accent-gradient)", color: "var(--primary)" }}
            >
              <CarTaxiFront className="w-5 h-5" aria-hidden />
              BOOK A RIDE
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
