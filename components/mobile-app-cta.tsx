"use client"

import Image from "next/image"

export default function MobileAppCTA() {
  return (
    // zero-height wrapper so this component does NOT add layout height
    <div className="relative w-full h-0 pointer-events-none">
      {/* Absolutely positioned CTA — centered horizontally, overlapping vertically */}
      <div
        className="absolute left-[100px] md:left-[300px] lg:left-1/2 top-0 md:-top-[40px] lg:-top-[140px] -translate-x-1/2 z-20 pointer-events-auto"
        
      >
        <section
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* === Left Side: Phone Mockup === */}
            <div className="relative flex justify-center items-center z-20 lg:-mr-28">
              <Image
                src="/images/iPhone 15.png"
                alt="Hero Women Mobile App Mockup"
                width={500}
                height={588}
                className="w-[150px] sm:w-[150px] md:w-[220px] lg:w-[500px] h-auto object-contain"
                // className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* === Right Side: Rounded Rectangle Background === */}
            <div
              // className="relative flex flex-col items-center justify-center text-center text-white z-10"
              className="relative ml-[220px] md:ml-[330px] lg:-ml-[100px] -mt-[170px] md:-mt-[230px] lg:mt-0 
                         w-[200px] h-[50px] md:w-[300px] md:h-[70px] lg:w-[770px] lg:h-[160px]
                         rounded-[15px] lg:rounded-[30px] 
                         flex flex-col items-center justify-center text-center text-white z-10"
              style={{
                // width: "770px",
                // height: "160px",
                // borderRadius: "30px",
                backgroundImage: "url('/images/Pink Gradient.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
                // marginLeft: "-100px", // pull it slightly under the phone
              }}
            >
              <h2 className="type-heading text-[12px] md:text-[15px] lg:text-2xl font-bold">
                HERO WOMEN DRIVERS
              </h2>
              <p className="type-heading lg:mt-1 text-[10px] md:text-[13px] lg:text-xl">
                MOBILE APP COMING SOON!
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ===== Responsive positioning adjustments via style tags =====
          We will inject responsive top offsets with a small script-like style block
          using CSS media queries so the absolute CTA will float only on larger screens.
      */}
    </div>
  )
}
