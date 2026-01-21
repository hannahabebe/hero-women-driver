"use client"

import Image from "next/image"
import Link from "next/link"
import { Car, ArrowRightCircle, Shield, User, GraduationCap, CarTaxiFront } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden h-[400px] lg:h-[774px] md:h-[600px] sm:h-[400px]"
      style={{ backgroundColor: "var(--neutral-pink)"}} // page bg -> neutral pink
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="z-20">
            <h1
              className="mb-6 leading-tight tracking-tight"
              style={{ color: "var(--primary)" }} // primary color via CSS variable
            >
              YOUR TRUSTED <span style={{ color: "var(--accent)" }}>TAXI</span>
              <br />
              FOR STUDENTS
            </h1>

            <p
              className="type-subheading mb-8 max-w-lg"
              style={{ color: "var(--accent-2)", lineHeight: 1.15 }} // subheading + accent-2 + 1.15 line-height
            >
              Hero Women Driver connects students with reliable taxi drivers,
              designed for students and parents who value safety and trust.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 lg:gap-23 mb-8">
              <Link
                href="/contact"
                aria-label="Book a ride"
                className="inline-flex items-center gap-3 rounded-lg btn-montserrat"
                style={{ background: "var(--accent)", color: "var(--neutral-white)" }} // accent bg, white text
              >
                <CarTaxiFront className=" w-5 h-5" aria-hidden />
                <span className="">BOOK A RIDE</span>
              </Link>

              <Link
                href="#why"
                aria-label="Learn more"
                className="inline-flex items-center gap-3 border-2 rounded-lg btn-montserrat"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }} // outline primary + primary text
              >
                <ArrowRightCircle className="w-5 h-5" aria-hidden />
                <span>LEARN MORE</span>
              </Link>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-pink-100 lg:px-4 lg:py-2 px-1 py-1 rounded-lg text-sm font-semibold shadow-sm"
                    style={{ color: "var(--accent)" }}>
                <Shield className="lg:w-4 lg:h-4 w-[9px] h-[9px]" />
                <span className="lg:text-[14px] text-[8px]">Safe Rides</span>
              </span>

              <span className="flex items-center gap-2 bg-pink-100 lg:px-4 lg:py-2 px-1 md:py-1 rounded-lg text-sm font-semibold shadow-sm"
                    style={{ color: "var(--accent)" }}>
                <User className="lg:w-4 lg:h-4 w-[10px] h-[10px]" />
                <span className="lg:text-[14px] text-[8px]">Women Drivers</span>
              </span>

              <span className="flex items-center gap-2 bg-pink-100 lg:px-4 lg:py-2 px-1 md:py-1 rounded-lg text-sm font-semibold shadow-sm"
                    style={{ color: "var(--accent)" }}>
                <GraduationCap className="lg:w-4 lg:h-4 w-[10px] h-[10px]" />
                <span className="lg:text-[14px] text-[8px]">Student-Friendly</span>
              </span>
            </div>
          </div>

          {/* Right - Single Combined Phone Mockup */}
          <div className="relative h-96 md:h-[30rem] lg:h-[36rem] flex items-center justify-center">
            {/* Soft pink blob background */}
            {/* <div className=" border-2 border-dashed border-black-400 absolute -right-8 top-6 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 opacity-90 filter blur-xl -z-10"></div> */}

            {/* Combined mockup image (one export from Figma) */}
            {/* hide on small (sm and below), show on md+; smaller on md, full on lg */}
            <div className="relative z-10 hidden md:block">
              <div>
                <Image
                  src="/images/hero-phone-mockup.png"
                  alt="Hero app mockups"
                  width={1200}
                  height={1200}
                  sizes="(min-width:1024px) 640px, (min-width:768px) 340px"
                  className="block object-contain md:w-[340px] md:h-[340px] lg:w-[640px] lg:h-[640px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider */}
      {/* <div className="w-full -mt-2">
        <svg viewBox="0 0 1440 120" className="w-full h-24 block" preserveAspectRatio="none" aria-hidden>
          <path d="M0,40 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div> */}
    </section>
  )
}
