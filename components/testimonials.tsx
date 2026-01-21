"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      initials: "ST",
      name: "Serkalem T.",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: null,
    },
    {
      initials: "RF",
      name: "Rema F.",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: null, // optional image (replace with your export)
    },
    {
      initials: "HA",
      name: "Hanna A.",
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: null,
    },
  ]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      className="relative overflow-visible bg-[var(--neutral-pink)] mx-auto h-[1024px] md:h-[500px] lg:h-[1024px] flex items-center justify-center"
    >
      {/* === Decorative Background === */}
      <div className="absolute top-0 left-0 w-[640px] h-[83px] lg:w-[1200px] lg:h-[156px] md:w-[768px] md:h-[100px] sm:w-[640px] sm:h-[83px] z-0">
        <Image
          src="/images/TopWaveWhite.png"
          alt="Top Decorative Wave"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>
      {/* === Main Content === */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 mt-20">
          <h1>
            <span style={{ color: "var(--primary)" }}>WHAT DO CLIENTS THINK OF</span>{" "}
            <span style={{ color: "var(--accent)" }}>OUR SERVICE?</span>
          </h1>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "var(--accent)" }}
          ></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full hover:opacity-90 transition"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--neutral-white) ",
              marginRight: "2rem",
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards - full width grid, centered items for equal spacing */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center place-items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative w-[200px] h-[200px] lg:w-[373.14px] lg:h-[344px] rounded-[24px] overflow-hidden shadow-md transition-transform duration-300 ${
                  index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-70"
                }`}
                style={{
                  backgroundImage: "url('/images/Rectangle.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Profile Circle */}
                <div className="absolute top-6 lg:top-13 left-1/2 -translate-x-1/2 z-10">
                  {testimonial.image ? (
                    <div className="w-[50px] h-[50px] lg:w-20 lg:h-20 rounded-full overflow-hidden border-[5px] border-[var(--neutral-pink)] shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[50px] h-[50px] lg:w-20 lg:h-20 rounded-full bg-[#FFE7E7] flex items-center justify-center text-[var(--accent)] text-2xl font-bold shadow-md">
                      {testimonial.initials}
                    </div>
                  )}
                </div>

                {/* Chatbox Background */}
                <div className="relative w-full h-full flex flex-col items-center justify-center pt-12 px-6 text-center">
                  <Image
                    src="/images/Chatbox.png"
                    alt="Speech bubble"
                    width={336.72}
                    height={219.35}
                    className="absolute top-[50px] lg:top-[90px] left-1/2 -translate-x-1/2 z-0"
                  />

                  <div className="relative z-10 -mt-2 lg:mt-6">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-2 lg:mb-3 text-[var(--accent)]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 lg:w-6 lg:h-6 ${
                            i < testimonial.rating ? "text-[var(--accent)] fill-[var(--accent)]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="type-body w-[200px] mx-auto lg:w-full text-gray-700 leading-relaxed mb-2 lg:mb-3 px-3">
                      “{testimonial.text}”
                    </p>

                    {/* Name */}
                    <p
                      className="type-subheading"
                      style={{ color: "var(--accent)" }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full hover:opacity-90 transition"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--neutral-white) ",
              marginLeft: "2rem",
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-4 mt-10 md:hidden">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white"
            style={{
              backgroundColor: "var(--accent)",
            }}
          >
            <ChevronLeft className="w-5 h-5"/>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white"
            style={{
              backgroundColor: "var(--accent)",
            }}
          >
            <ChevronRight className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </section>
  )
}
