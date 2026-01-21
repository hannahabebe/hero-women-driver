"use client"

import type React from "react"

import { useState } from "react"
import { Send, Phone, Mail, User} from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        message: "",
      })
      setIsSubmitting(false)
      alert("Thank you for your message! We'll get back to you soon.")
    }, 1000)
  }

  return (
    <section className="relative bg-[var(--neutral-pink)] h-[500px] lg:h-[650px]">
      {/* Decorative blobs */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl"></div> */}

      <div className="max-w-xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative -top-[52px] lg:-top-[63px]">
        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-lg">
          {/* Form Header */}
          <div className="text-center bg-[var(--accent)] rounded-t-3xl border-t-3 border-r-3 border-l-3 border-white">
            <p className="type-montserrat p-4 md:p-4 text-white lg:text-lg">
              Have a question or want to book a ride?{" "}
              <span className="text-[var(--primary)] font-semibold">Send us a message below.</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 lg:p-12">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="
                    type-poppins w-full px-4 py-3 bg-[var(--neutral-pink)] 
                    text-gray-800 placeholder-[var(--primary)] rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="type-poppins w-full px-4 py-3 bg-[var(--neutral-pink)] text-gray-800 placeholder-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="mobileNo"
                  placeholder="Mobile No. *"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  required
                  className="type-poppins w-full px-4 py-3 bg-[var(--neutral-pink)] text-gray-800 placeholder-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="type-poppins w-full px-4 py-3 bg-[var(--neutral-pink)] text-gray-800 placeholder-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="type-poppins w-full px-4 py-3 bg-[var(--neutral-pink)] text-gray-800 placeholder-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  type-montserrat text-[14px] lg:text-[16px] 
                  bg-[var(--accent)] hover:bg-[var(--primary)] 
                  text-white hover:text-[var(--accent)]
                  px-4 py-2 lg:px-6 lg:py-3 rounded-lg 
                  font-semibold flex items-center gap-2 
                  transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
