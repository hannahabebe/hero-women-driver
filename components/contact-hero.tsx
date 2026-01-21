import { Mail, Phone } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="bg-[var(--accent)] justify-center flex items-center">
      {/* Wavy pattern background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg className="" viewBox="0 0 1200 522" preserveAspectRatio="none">
          <defs>
            <pattern
              id="waves"
              x="0"
              y="0"
              width="60"      // wider wave
              height="12"     // more lines vertically
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,6 Q15,0 30,6 T60,6"  // wider wave
                stroke="white"
                strokeWidth="0.4"            // subtle thin line
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="1200" height="522" fill="url(#waves)" />
        </svg>
      </div>

      {/* <div className=""> */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto">
          {/* Left Content */}
          <div className="text-white mx-7 lg:mx-15 my-10 lg:my-0">
            <h1 className="type-montserrat text-white text-[25px] lg:text-[40px] font-bold mb-4">GET IN TOUCH</h1>
            <p className="type-poppins text-[16px] lg:text-[20px] mb-6 md:mb-3 lg:mb-8 text-pink-100">
              Want to get in touch? We'd love to hear from you. Here's how you can reach us.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col md:flex-row gap-1 lg:gap-4">
              <a
                href="tel:+251949471111"
                className="type-poppins text-[11px] lg:text-[14px] bg-white text-[var(--primary)] py-2 md:px-3 lg:px-6 lg:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors"
              >
                <Phone className="w-3 h-3 lg:w-5 lg:h-5"/>
                +251 94 947 1111
              </a>
              <a
                href="mailto:info@herowomantaxi.com"
                className="type-poppins text-[11px] lg:text-[14px] bg-white text-[var(--primary)] py-2 md:px-3 lg:px-6 lg:py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors"
              >
                <Mail className="w-3 h-3 lg:w-5 lg:h-5"/>
                info@herowomantaxi.com
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="z-0">
            <img
              src="/images/Right Top.png"
              alt="Woman taxi driver"
              className="object-cover w-full"
            />
          </div>
        </div>
      {/* </div> */}

      {/* Wavy Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-amber-50 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z" fill="#faf5f0" />
        </svg>
      </div> */}
    </section>
  )
}
