"use client"

import Image from "next/image"

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <Image
          src="/images/Shield Check.png"
          alt="Safe & Secure"
          width={70}
          height={70}
          className="text-[var(--accent)] w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
      title: "Safe & Secure",
      description: "Trusted transport with all safety measures",
    },
    {
      icon: (
        <Image
          src="/images/Graduation Cap.png"
          alt="For Students"
          width={80}
          height={80}
          className="text-[var(--accent)] w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
        />
      ),
      title: "For Students",
      description: "Designed specifically for students and campus travel",
    },
    {
      icon: (
        <Image
          src="/images/Clock.png"
          alt="Reliable & On-Time"
          width={70}
          height={70}
          className="text-[var(--accent)] w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
      title: "Reliable & On-Time",
      description: "Consistent daily pickups and drop-offs",
    },
    {
      icon: (
        <Image
          src="/images/Wallet.png"
          alt="Affordable Plans"
          width={70}
          height={70}
          className="text-[var(--accent)] w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
      title: "Affordable Plans",
      description: "Budget-friendly pricing for students and parents",
    },
  ]

  return (
    <section
      className="relative overflow-hidden bg-white mx-auto flex items-center justify-center h-[600px] sm:h-[600px] md:h-[900px] lg:h-[774px]"
    >
      {/* Decorative Background Vectors */}
      <div className="absolute top-0 left-0 w-[640px] h-[83px] lg:w-[1200px] lg:h-[156px] md:w-[768px] md:h-[100px] sm:w-[640px] sm:h-[83px] z-0">
        <Image
          src="/images/TopWavePink.png"
          alt="Top Decorative Wave"
          fill
          className="object-cover object-left-top"
          priority
        />

        {/* Vector 1 — behind card 1 and 2 */}
        <Image
          src="/images/Vector1.png"
          alt="Decorative Vector 1"
          width={265}
          height={303}
          className="absolute z-0 
            w-[150px] h-[172px]
            sm:w-[150px] sm:h-[172px]
            md:w-[200px] md:h-[226px]
            lg:w-[265px] lg:h-[303px]
            
            left-[150px] top-[200px]
            md:left-[100px] md:top-[330px]
            lg:left-[205px] lg:top-[320px]"
        />

        {/* Vector 2 — behind card 2 and 3 */}
        <Image
          src="/images/Vector2.png"
          alt="Decorative Vector 2"
          width={199}
          height={183}
          className="absolute z-0 
            w-[150px] h-[172px]
            sm:w-[150px] sm:h-[172px]
            md:w-[200px] md:h-[226px]
            lg:w-[265px] lg:h-[303px]
            
            left-[200px] top-[400px]
            md:left-[500px] md:top-[400px]
            lg:left-[626px] lg:top-[330px]"
        />

        {/* Vector 3 — behind card 3 and 4 */}
        <Image
          src="/images/Vector3.png"
          alt="Decorative Vector 3"
          width={225.58}
          height={305.89}
          className="absolute z-0 
            w-[150px] h-[172px]
            sm:w-[150px] sm:h-[172px]
            md:w-[200px] md:h-[226px]
            lg:w-[265px] lg:h-[303px]
            
            left-[20px] top-[370px]
            md:left-[170px] md:top-[650px]
            lg:left-[1030px] lg:top-[410px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-16 pt-20">
          <h1>
            <span>WHY CHOOSE</span>
            <span style={{ color: "var(--accent)" }}> US?</span>
          </h1>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "var(--accent)" }}
          ></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-10 place-items-center justify-center relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] rounded-[30px] flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "var(--neutral-pink)" }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="type-raleway text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="type-poppins text-gray-700 leading-relaxed px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      {/* <div
        className="absolute bottom-0 left-0 w-full bg-amber-50"
        style={{
          height: "120px",
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)",
        }}
      ></div> */}
    </section>
  )
}
