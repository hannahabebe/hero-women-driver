"use client"

import Image from "next/image"
import type React from "react"
import { Bus, Route, Book, Users, BusFront } from "lucide-react"

interface ServiceCard {
  id: number
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

const ServiceCard: React.FC<{ service: ServiceCard }> = ({ service }) => (
  <div className="flex flex-col items-center text-center p-8">
    <div className="mb-6 text-6xl text-pink-500">{service.icon}</div>
    <h3 className="type-raleway text-[20px] font-bold text-gray-900">{service.title}</h3>
    <p className="type-raleway text-[18px] italic text-gray-800 mb-4">{service.subtitle}</p>
    <p className="type-poppins text-sm text-gray-700 leading-relaxed w-[300px]">{service.description}</p>
  </div>
)

export default function ServicesGrid() {
  const services: ServiceCard[] = [
    {
      id: 1,
      title: "PICKUP & DROP-OFF",
      subtitle: "On-Time, Every Time.",
      description: "Safe daily rides to and from school, with drivers you can trust.",
      icon: (
        <Image
          src="/images/Bus Icon.png"
          alt="For Students"
          width={70}
          height={70}
          className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      )
    },
    {
      id: 2,
      title: "AFTER-SCHOOL RIDES",
      subtitle: "Beyond the Classroom.",
      description: "Secure transport for tutoring, sports, and extracurriculars.",
      icon: (
        <Image
          src="/images/Book Icon.png"
          alt="For Students"
          width={70}
          height={70}
          className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
    },
    {
      id: 3,
      title: "SPECIAL TRIPS ON REQUEST",
      subtitle: "Flexible When You Need It.",
      description: "Safe, parent-approved rides for special occasions or events.",
      icon: (
        <Image
          src="/images/Road Icon.png"
          alt="For Students"
          width={70}
          height={70}
          className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
    },
    {
      id: 4,
      title: "PARENTAL PEACE OF MIND",
      subtitle: "Confidence in Every Ride.",
      description: "Live updates and trusted drivers keep parents reassured.",
      icon: (
        <Image
          src="/images/Family Icon.png"
          alt="For Students"
          width={70}
          height={70}
          className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        />
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
