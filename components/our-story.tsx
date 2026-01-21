import Image from "next/image"

export default function OurStory() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--neutral-pink)] overflow-hidden h-[920px] md:h-[650px] lg:h-[1117px]">
      {/* Decorative shapes */}
      {/* <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-400 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div> */}
      {/* Top decorative wave (Vector4) */}
      <div className="relative left-0 top-0 -mt-[96px] pointer-events-none z-0 w-full h-[411px] hidden lg:flex">
        {/* <div className="absolute top-0 left-0 w-[640px] h-[83px] lg:w-[1200px] lg:h-[156px] md:w-[768px] md:h-[100px] sm:w-[640px] sm:h-[83px] z-0"> */}
        {/* <div className="relative w-full h-28 md:h-36 lg:h-44"> */}
          <Image
            src="/images/SideWave.png"
            alt="Side wave decorative"
            fill
            // className="object-cover object-center-top"
            // style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:-mt-[150px] sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="bg-white px-8 py-4 rounded-[15px] lg:rounded-[20px]">
            <h2 className="type-raleway text-[20px] md:text-2xl lg:text-3xl font-bold">
              Our <span className="text-[var(--secondary)]">Story</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 mt-[106px] gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="p-1 overflow-hidden">
              <img
                src="/images/LeftColumn.png"
                alt="Hero Women Taxi Story"
                className="w-full h-auto  object-cover"
              />
            </div>
            {/* Decorative overlay pattern */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)",
              }}
            ></div>
          </div>

          {/* Text */}
          <div className="type-poppins text-[12px] lg:text-[17px] space-y-2 lg:space-y-6 lg:w-[588px] md:mr-2 md:-ml-7 text-justify">
            <p className="leading-relaxed">
              Hero Women Taxi was born out of a simple but powerful idea: students deserve to feel safe on every ride
              home, and women drivers deserve opportunities to lead in transportation.
            </p>
            <p className="leading-relaxed">
              As students, parents, and communities grew more concerned about safety and trust, we realized there was a
              gap in reliable services designed specifically for young people. That's where Hero Women Taxi stepped in -
              built to give peace of mind to parents and confidence to students.
            </p>
            <p className="leading-relaxed">
              But it's more than a taxi service. It's a movement. By empowering women drivers, we're creating jobs,
              building trust, and redefining what safe and caring transport looks like.
            </p>
            <p className="leading-relaxed">
              With every ride, we're not just driving students to their destinations - we're driving toward a safer,
              stronger future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
