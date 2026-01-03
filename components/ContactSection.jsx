'use client'

import React, { useState } from 'react'
import {
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success(
      "Message sent successfully! We'll get back to you soon."
    )
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 rounded-l-[100px] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              Get In Touch
            </div>

            {/* Serif heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
              Let's Start Your Journey of Being Data-Driven
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Get guidance from a leading business strategy consulting
              firm combining analytics with market research insights.
              We'll reach out to you within a few hours.
            </p>

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-6">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Call us
                  </div>
                  <div className="font-serif text-lg font-medium text-gray-900 tracking-tight">
                    {companyInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Email us
                  </div>
                  <div className="font-serif text-lg font-medium text-gray-900 tracking-tight">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Visit us
                  </div>
                  <div className="font-serif text-lg font-medium text-gray-900 leading-relaxed tracking-tight">
                    {companyInfo.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-gray-200/50">
            <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6 tracking-tight">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={5}
                  className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:-translate-y-0.5 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
