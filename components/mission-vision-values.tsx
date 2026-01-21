// components/mission-vision-values.tsx
"use client"

import Image from "next/image"

export default function MissionVisionValues() {
  return (
    <section className="relative bg-white overflow-hidden  mx-auto flex items-center justify-center">
      {/* Top decorative wave (Vector4) */}
      <div className="absolute left-0 top-0 pointer-events-none z-0 w-full h-[52px]">
        {/* <div className="absolute top-0 left-0 w-[640px] h-[83px] lg:w-[1200px] lg:h-[156px] md:w-[768px] md:h-[100px] sm:w-[640px] sm:h-[83px] z-0"> */}
        {/* <div className="relative w-full h-28 md:h-36 lg:h-44"> */}
          <Image
            src="/images/Vector4.png"
            alt="Top wave decorative"
            fill
            className="object-cover object-center-top"
            // style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
      </div>

      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
              {/* Mission */}
              <div className="flex flex-col items-center text-center px-6 md:px-0">
                  {/* replace with your mission icon path */}
                  <div className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] mb-2 rounded-full flex items-center justify-center">
                    <Image src="/images/mission.png" alt="Mission" width={120} height={120} />
                  </div>
      

                <h3 className="type-raleway text-[18px] lg:text-2xl font-bold mb-4">
                  Our <span className="text-[var(--primary)]">Mission</span>
                </h3>

                <p className="type-poppins text-gray-600 text-[12px] lg:text-sm leading-relaxed max-w-[320px]">
                  To provide students and parents with safe, reliable, and affordable taxi services driven by trusted women
                  drivers, ensuring peace of mind and comfort every step of the journey.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center text-center px-6 md:px-0 lg:mt-30">
                  <div className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] mb-2 rounded-full flex items-center justify-center">
                    <Image src="/images/vision.png" alt="Vision" width={120} height={120} />
                  </div>

                <h3 className="type-raleway text-[18px] lg:text-2xl font-bold mb-4">
                  Our <span className="text-[var(--primary-2)]">Vision</span>
                </h3>

                <p className="text-gray-600 text-[12px] lg:text-sm leading-relaxed max-w-[360px]">
                  To become the most trusted student-focused taxi service, where safety and empowerment of women drivers
                  create a positive impact in every community we serve.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col items-center text-center px-6 md:px-0">
                  <div className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] mb-2 rounded-full flex items-center justify-center">
                    <Image src="/images/values.png" alt="Values" width={120} height={120} />
                  </div>

                <h3 className="type-raleway text-[18px] lg:text-2xl font-bold mb-4">
                  Our <span className="text-[var(--accent)]">Values</span>
                </h3>

                <p className="type-poppins text-gray-600 text-[12px] lg:text-sm leading-relaxed max-w-[320px]">
                  Our values are safety, trust, empowerment, and care ensuring secure rides, honest connections,
                  opportunities for women drivers, and stronger communities.
                </p>
              </div>
            </div>

            {/* Vertical dividers between columns (only on md+) */}
            <div className="hidden md:block">
              {/* divider 1 (between col 1 and 2) */}
              <div
                style={{
                  position: "absolute",
                  top: "92px",         // adjust this if you change padding/heading size
                  bottom: "92px",
                  left: "33.3333%",
                  width: "1px",
                  height: "170px",
                  background: "rgba(201,201,201,0.6)",
                  transform: "translateX(-0.5px)",
                }}
              />
              {/* divider 2 (between col 2 and 3) */}
              <div
                style={{
                  position: "absolute",
                  top: "92px",
                  bottom: "92px",
                  left: "66.6666%",
                  width: "1px",
                  height: "170px",
                  background: "rgba(201,201,201,0.6)",
                  transform: "translateX(-0.5px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave (Vector5) */}
      {/* <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"> */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0 w-full h-[70px]">
        {/* <div className="relative w-full h-36 md:h-44 lg:h-56"> */}
          <Image
            src="/images/Vector5.png"
            alt="Bottom wave decorative"
            fill
            className="object-cover object-center-bottom"
            // style={{ objectFit: "cover", objectPosition: "center bottom" }}
            priority
          />
        {/* </div> */}
      </div>
    </section>
  )
}
