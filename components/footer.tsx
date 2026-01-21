"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative text-white h-[631px] flex flex-col justify-end overflow-visible">

      {/* === Decorative Background === */}
      <div className="absolute top-0 left-0 w-full h-[83px] lg:w-[1000px] lg:h-[156px] md:w-[768px] md:h-[100px] sm:w-[640px] sm:h-[83px] z-0">
        <Image
          src="/images/TopWavePink.png"
          alt="Top Decorative Wave"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 pointer-events-auto">
        
        {/* === MAIN TWO COLUMNS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="pe-10">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Hero Taxi Logo"
                width={82}
                height={33}
                className="object-contain"
                priority
              />
              <p className="type-heading text-black opacity-65">HERO WOMEN DRIVERS</p>
            </div>

            <p className="type-poppins text-gray-400 text-sm leading-relaxed mb-6 pe-0 lg:pe-55">
              Hero Women provides safe, reliable rides for students, driven by trusted women drivers. We're
              committed to making every journey safe and affordable.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4">
              {/* WhatsApp */}
              <a href="#" style={{ color: "var(--primary)" }} className="hover:opacity-80 pointer-events-auto">
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
              </a>

              {/* Instagram */}
              <a href="#" style={{ color: "var(--primary)" }} className="hover:opacity-80 pointer-events-auto">
                <Image src="/icons/instagram.svg" alt="Instagram" width={22} height={22} />
              </a>

              {/* TikTok */}
              <a href="#" style={{ color: "var(--primary)" }} className="hover:opacity-80 pointer-events-auto">
                <Image src="/icons/tiktok.svg" alt="TikTok" width={22} height={22} />
              </a>

              {/* Website / Globe */}
              <a href="#" style={{ color: "var(--primary)" }} className="hover:opacity-80 pointer-events-auto">
                <Image src="/icons/globe.svg" alt="Website" width={22} height={22} />
              </a>

              {/* Facebook */}
              <a href="#" style={{ color: "var(--primary)" }} className="hover:opacity-80 pointer-events-auto">
                <Image src="/icons/facebook.svg" alt="Facebook" width={22} height={22} />
              </a>
            </div>
          </div>
          
          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex md:justify-end lg:justify-end gap-20 mt-5 md:mt-0 lg:mt-0">

            {/* Company column */}
            <div className="">
              <h3 className="type-heading text-black opacity-65 mb-2 md:mb-6 lg:mb-6">Company</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li>
                  <Link href="/about" className="type-poppins transition-colors hover:text-[var(--primary)]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="type-poppins transition-colors hover:text-[var(--primary)]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="type-poppins transition-colors hover:text-[var(--primary)]">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="type-heading text-black opacity-65 mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                  <a href="tel:+251949471111" className="type-poppins hover:text-[var(--primary)] transition-colors pointer-events-auto">
                    +251 94 947 1111
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <a href="mailto:info@herowomen.com" className="type-poppins hover:text-[var(--primary)] transition-colors pointer-events-auto">
                    info@herowomen.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER + COPYRIGHT */}
        <div className="border-t border-gray-300">
          <div className="flex items-center justify-center py-6">
            <p className="type-poppins text-center text-gray-500 text-sm">© 2025 Hero Women Drivers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
