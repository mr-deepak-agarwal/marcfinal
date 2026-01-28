'use client'

import React, { useState } from 'react'
import {
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  Clock,
} from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'

const offices = [
  { city: 'Goa (HQ)', country: 'India', phone: '+91 93596 28675', email: 'contact@marcglocal.com' },
  { city: 'Delaware', country: 'USA', phone: '+91 93596 28675', email: 'contact@marcglocal.com' },
  { city: 'Mumbai', country: 'India', phone: '+91 90295 03690', email: 'mumbai@marcglocal.com' },
  { city: 'Pune', country: 'India', phone: '+91 91194 59098', email: 'pune@marcglocal.com' },
  { city: 'Kolkata', country: 'India', phone: '+91 83368 25469', email: 'kolkata@marcglocal.com' },
  { city: 'Kochi', country: 'India', phone: '+91 93596 28675', email: 'kochi@marcglocal.com' },
  { city: 'Indore', country: 'India', phone: '+91 93596 28675', email: 'indore@marcglocal.com' },
  { city: 'Ahmedabad', country: 'India', phone: '+91 90295 03690', email: 'ahmedabad@marcglocal.com' },
]

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
      data-testid="contact-section"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0F8F6] rounded-l-[100px] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div 
              data-testid="contact-badge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2DDB4] text-[#4E9141] text-sm font-semibold mb-6"
            >
              Get In Touch
            </div>

            {/* Heading */}
            <h2 
              data-testid="contact-heading"
              className="text-4xl lg:text-5xl font-bold text-[#212427] mb-6 leading-tight tracking-tight"
            >
              Let's Start Your Journey of Being Data-Driven
            </h2>

            <p className="text-lg text-[#47635D] mb-10 leading-relaxed">
              Get guidance from a leading business strategy consulting
              firm combining analytics with market research insights.
              We'll reach out to you within 24 hours.
            </p>

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-4 mb-10">
              <a
                href={`tel:${companyInfo.phone}`}
                data-testid="contact-phone"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#5FBB46]/40 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-[#C2DDB4] rounded-xl flex items-center justify-center group-hover:bg-[#5FBB46] transition-colors">
                  <Phone className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-[#5D9F94] font-medium">
                    Call us
                  </div>
                  <div className="text-lg font-semibold text-[#212427] tracking-tight">
                    {companyInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                data-testid="contact-email"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#5FBB46]/40 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-[#C2DDB4] rounded-xl flex items-center justify-center group-hover:bg-[#5FBB46] transition-colors">
                  <Mail className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-[#5D9F94] font-medium">
                    Email us
                  </div>
                  <div className="text-lg font-semibold text-[#212427] tracking-tight">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div 
                data-testid="contact-address"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30"
              >
                <div className="w-14 h-14 bg-[#C2DDB4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#4E9141]" />
                </div>
                <div>
                  <div className="text-sm text-[#5D9F94] font-medium">
                    Headquarters
                  </div>
                  <div className="text-lg font-semibold text-[#212427] leading-relaxed tracking-tight">
                    {companyInfo.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30">
                <div className="w-14 h-14 bg-[#C2DDB4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#4E9141]" />
                </div>
                <div>
                  <div className="text-sm text-[#5D9F94] font-medium">
                    Business Hours
                  </div>
                  <div className="text-lg font-semibold text-[#212427] tracking-tight">
                    Mon - Sat: 9:00 AM - 6:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            {/* ================= OFFICE LOCATIONS ================= */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-[#5FBB46]" />
                <h3 className="text-lg font-semibold text-[#212427]">Our Offices</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    data-testid={`office-${index}`}
                    className="p-3 rounded-xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#5FBB46]/40 transition-colors text-center"
                  >
                    <div className="text-sm font-semibold text-[#212427]">{office.city}</div>
                    <div className="text-xs text-[#5D9F94]">{office.country}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-gray-200/50 border border-[#C2DDB4]/20">
            <h3 
              data-testid="contact-form-title"
              className="text-2xl font-bold text-[#212427] mb-6 tracking-tight"
            >
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#212427] mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    data-testid="contact-form-name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 rounded-xl border-[#C2DDB4]/50 focus:border-[#5FBB46] focus:ring-[#5FBB46]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#212427] mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    data-testid="contact-form-email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-12 rounded-xl border-[#C2DDB4]/50 focus:border-[#5FBB46] focus:ring-[#5FBB46]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#212427] mb-2">
                  Company Name
                </label>
                <Input
                  name="company"
                  data-testid="contact-form-company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="h-12 rounded-xl border-[#C2DDB4]/50 focus:border-[#5FBB46] focus:ring-[#5FBB46]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#212427] mb-2">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  data-testid="contact-form-message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={5}
                  className="rounded-xl border-[#C2DDB4]/50 focus:border-[#5FBB46] focus:ring-[#5FBB46] resize-none"
                />
              </div>

              <Button
                type="submit"
                data-testid="contact-form-submit"
                disabled={isSubmitting}
                className="w-full bg-[#5FBB46] hover:bg-[#4E9141] text-white h-14 text-lg font-semibold rounded-xl shadow-lg shadow-[#5FBB46]/25 transition-all duration-300 hover:shadow-[#5FBB46]/40 hover:-translate-y-0.5 group"
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
