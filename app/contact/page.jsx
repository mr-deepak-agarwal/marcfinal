'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  MapPin, Phone, Mail, Clock, Send, ArrowRight, Globe, ArrowUpRight,
  Building2, Users, Sparkles, MessageCircle, Calendar, CheckCircle,
  TrendingUp, Award, Target
} from 'lucide-react'

const offices = [
  { type: 'Headquarters', city: 'Panaji', country: 'India', address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Goa 403001', phone: '+91-93596 28675', email: 'contact@marcglocal.com', flag: '🇮🇳' },
  { type: 'USA Office', city: 'Delaware', country: 'USA', address: '16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex', phone: '+91-93596 28675', email: 'contact@marcglocal.com', flag: '🇺🇸' },
  { type: 'Branch', city: 'Mumbai', country: 'India', address: 'B/509, Satyam Apartments, Link Road, Borivali West, Mumbai 400091', phone: '+91-90295 03690', email: 'mumbai@marcglocal.com', flag: '🇮🇳' },
  { type: 'Branch', city: 'Pune', country: 'India', address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road, Pune 411004', phone: '+91-91194 59098', email: 'pune@marcglocal.com', flag: '🇮🇳' },
  { type: 'Branch', city: 'Kolkata', country: 'India', address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor, Kolkata 700052', phone: '+91-83368 25469', email: 'kolkata@marcglocal.com', flag: '🇮🇳' },
  { type: 'Branch', city: 'Ahmedabad', country: 'India', address: 'B-403, Samudra Complex, C G Road, Navrangpura, Ahmedabad 380009', phone: '+91-90295 03690', email: 'ahmedabad@marcglocal.com', flag: '🇮🇳' },
]

const services = ['Market Research', 'Due Diligence', 'Valuation Advisory', 'Strategy Consulting', 'Financial Modelling', 'Internationalization', 'Other']

const reasons = [
  { icon: CheckCircle, text: '24-hour response time' },
  { icon: CheckCircle, text: 'Free initial consultation' },
  { icon: CheckCircle, text: '100+ expert consultants' },
  { icon: CheckCircle, text: '14+ years experience' },
]

const floatingStats = [
  { value: '500+', label: 'Projects', icon: TrendingUp, delay: '0s' },
  { value: '98%', label: 'Satisfaction', icon: Award, delay: '0.5s' },
  { value: '14+', label: 'Years', icon: Target, delay: '1s' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [activeOffice, setActiveOffice] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      

      {/* Hero Section - With Animated Right Side */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-teal-50/60 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-emerald-600" />
                <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase">Contact Us</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-7xl font-medium text-gray-900 leading-[1.05] mb-6">
                Let's Start a
                <span className="block text-emerald-700">Conversation</span>
              </h1>

              <p className="text-gray-600 text-xl leading-relaxed max-w-xl mb-10">
                Whether you're exploring new markets, evaluating investments, or seeking strategic clarity — 
                our team is ready to help you make confident decisions.
              </p>

              {/* Quick contact pills */}
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919359628675" className="group inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Call us</p>
                    <p className="text-gray-900 font-semibold">+91 93596 28675</p>
                  </div>
                </a>
                <a href="mailto:contact@marcglocal.com" className="group inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Email us</p>
                    <p className="text-gray-900 font-semibold">contact@marcglocal.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Animated Visual */}
            <div className="relative hidden lg:block">
              {/* Main decorative card */}
              <div className="relative">
                {/* Background shapes */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-emerald-100 rounded-full opacity-60 animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-teal-100 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-emerald-900/10 border border-gray-100">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-600 rounded-bl-3xl rounded-tr-3xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>

                  <div className="pr-16">
                    <h3 className="font-serif text-2xl text-gray-900 mb-2">Get in Touch</h3>
                    <p className="text-gray-500 mb-6">We typically respond within 24 hours</p>
                  </div>

                  {/* Mini contact info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-[#F5F3EE] rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">10+ Offices</p>
                        <p className="text-gray-500 text-xs">India & USA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F5F3EE] rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">100+ Experts</p>
                        <p className="text-gray-500 text-xs">Ready to help</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F5F3EE] rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">Mon - Sat</p>
                        <p className="text-gray-500 text-xs">9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-4 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 group">
                    Schedule a Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Floating stat cards */}
                {floatingStats.map((stat, i) => (
                  <div 
                    key={i}
                    className="absolute bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100 animate-bounce"
                    style={{
                      animationDuration: '3s',
                      animationDelay: stat.delay,
                      ...(i === 0 ? { top: '-20px', left: '-40px' } : 
                         i === 1 ? { bottom: '60px', right: '-50px' } : 
                         { bottom: '-20px', left: '40px' })
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        i === 0 ? 'bg-blue-100' : i === 1 ? 'bg-amber-100' : 'bg-purple-100'
                      }`}>
                        <stat.icon className={`w-5 h-5 ${
                          i === 0 ? 'text-blue-600' : i === 1 ? 'text-amber-600' : 'text-purple-600'
                        }`} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-lg">{stat.value}</p>
                        <p className="text-gray-500 text-xs">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="mb-10">
                  <h2 className="font-serif text-3xl text-gray-900 mb-3">Send us a Message</h2>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all cursor-pointer appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-[#F5F3EE] border border-[#E8E4DC] rounded-xl text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-emerald-700 text-white text-lg font-semibold rounded-xl hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Contact Us Card */}
              <div className="bg-emerald-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl mb-6">Why Work With Us?</h3>
                  <div className="space-y-4">
                    {reasons.map((reason, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <reason.icon className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                        <span className="text-emerald-50">{reason.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule a Call Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                  <Calendar className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">Schedule a Call</h3>
                <p className="text-gray-500 mb-6">Book a 30-minute free consultation with our experts.</p>
                <button className="w-full px-6 py-4 bg-[#F5F3EE] border border-[#E8E4DC] text-gray-900 rounded-xl font-semibold hover:border-emerald-300 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                  Book Appointment
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
                <h4 className="font-serif text-xl text-gray-900 mb-6">Quick Information</h4>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Business Hours</p>
                      <p className="text-gray-900 font-medium">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Response Time</p>
                      <p className="text-gray-900 font-medium">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Global Presence</p>
                      <p className="text-gray-900 font-medium">10+ offices worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase">Our Locations</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mt-4">
              Find Us Across <span className="text-emerald-700">India & USA</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              At MARC, we work seamlessly together as one firm to serve our clients wherever they need us.
            </p>
          </div>

          {/* Office Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <div 
                key={i}
                className="group bg-[#F5F3EE] rounded-2xl p-6 border border-[#E8E4DC] hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 cursor-pointer hover:bg-white"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{office.flag}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    office.type === 'Headquarters' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : office.type === 'USA Office'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {office.type}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {office.city}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{office.country}</p>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">{office.address}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DC] group-hover:border-emerald-200 transition-colors">
                  <a href={`mailto:${office.email}`} className="text-emerald-700 text-sm font-medium hover:text-emerald-800 transition-colors">
                    {office.email}
                  </a>
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-emerald-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="grid lg:grid-cols-3">
              {/* Map placeholder */}
              <div className="lg:col-span-2 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center relative overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #059669 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                
                {/* Animated location pins */}
                <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDuration: '2s' }}>
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-emerald-600" />
                  </div>
                  <p className="text-gray-600 mb-3">View our headquarters on map</p>
                  <a 
                    href="https://www.google.com/maps/place/MARC+(Mangal+Analytics+and+Research+Consulting)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact summary */}
              <div className="p-8 lg:p-10 bg-emerald-700 text-white">
                <h3 className="font-serif text-2xl mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-emerald-200 text-sm mb-1">Address</p>
                    <p className="text-white">2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Panaji, Goa 403001</p>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm mb-1">Phone</p>
                    <a href="tel:+919359628675" className="text-white hover:text-emerald-200 transition-colors">+91 93596 28675</a>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm mb-1">Email</p>
                    <a href="mailto:contact@marcglocal.com" className="text-white hover:text-emerald-200 transition-colors">contact@marcglocal.com</a>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm mb-1">Business Hours</p>
                    <p className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}