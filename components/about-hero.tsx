import Image from "next/image"
import { Phone } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[932px] overflow-hidden -mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/About-bg.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>


      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Main Rectangle (Figma 656 x 278) */}
          <div
            className="
              shadow-[10px_-9px_0_rgba(255,255,255,0.4)]
              lg:shadow-[20px_-15px_0_rgba(255,255,255,0.4)]
              w-[330px] h-[210px]
              md:w-[570px] md:h-[230px]
              lg:w-[656px] lg:h-[278px]
              px-10 pt-10 pb-6
              mt-10
            "
            style={{
                backgroundImage: "url('/images/Light Pink Rectangle.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
          >
            <h1 className="text-[18px] md:text-[30px] lg:text-[40px] leading-tight">
              Reliable. Safe. Affordable.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-[230px] md:w-[370px] lg:w-[411px]">
                <p className="type-poppins text-[15px] md:text-[20px] lg:text-[20px] text-[var(--primary-2)] leading-relaxed mt-3">
                  Hero Women Taxi is where safety, trust, and comfort meet - 
                  designed especially for students and parents.
                </p>
              </div>
              <div className="flex items-center justify-end hidden md:flex">
                  {/* Logo */}
                    <Image
                      src="/images/logo.png"
                      alt="Hero Taxi"
                      width={140}
                      height={56}
                      className="object-contain w-[80px] h-[27px] sm:w-[80px] sm:h-[27px] md:w-[110px] md:h-[54px] lg:w-[140px] lg:h-[56px]"
                      priority
                    />
              </div>
            </div>
          </div>

          {/* Standalone Diagonal Contact Box */}
          <div className="w-[330px] md:w-[570px] lg:w-[656px] justify-end flex -mt-[27px] lg:-mt-[33px] relative">
            <span
              className="
                  absolute 
                  top-0 left-0 
                  w-[159px] h-[28px] 
                  lg:w-[269px] lg:h-[66px] 
                  bg-[rgba(255,255,255,0.4)]
                  translate-x-[181px] translate-y-[18px]
                  md:translate-x-[421px] translate-y-[18px]
                  lg:translate-x-[407px] translate-y-[18px]
                  z-0"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                // transform: "translate(407px, 18px)", // shadow offset
                // zIndex: 0,
              }}
            ></span>
            <button
              className="
                flex items-center gap-3
                justify-center
                type-poppins
                bg-[var(--neutral-white)]
                font-extrabold
                text-[14px]
                md:text-[17px]
                lg:text-[25px]
                text-[var(--primary)]
                relative  
                z-10
                w-[159px] h-[37px]
                lg:w-[269px] lg:h-[66px]
              "
              style={{
                // width: "269px",
                // height: "66px",
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                // filter: "drop-shadow(20px 18px 0 rgba(255,255,255,0.4))",
              }}
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 fill-current stroke-none" aria-hidden />
              Contact Us
            </button>
          </div>

        </div>
      </div>



      {/* Wavy Divider */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div> */}
    </section>
  )
}
