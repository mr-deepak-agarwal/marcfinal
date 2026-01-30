'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, Eye, Compass, Award, Users,
  MapPin, Linkedin, Briefcase, Globe, Target
} from 'lucide-react'

const stats = [
  { value: '14+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Projects Delivered', icon: Briefcase },
  { value: '30+', label: 'Countries Served', icon: Globe },
  { value: '100+', label: 'Expert Consultants', icon: Users },
]

const directors = [
  {
    name: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/ashutoshkharangate/',
    bio: 'Part of PWC Financial Advisory Division for 4 years. Expert in Due Diligence and Valuations in M&A across sectors.',
    credentials: ['Chartered Accountant', 'PWC Alumni', 'M&A Expert'],
  },
  {
    name: 'Satish Shinde',
    role: 'Co-Founder & Director',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/satish-shinde-06962047/',
    bio: 'MD of Astra Metals Group with over 30 years of experience in the manufacturing arena.',
    credentials: ['30+ Years Experience', 'Manufacturing Expert', 'Finance Leader'],
  },
  {
    name: 'Anita Ganti',
    role: 'Director',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/anita-ganti/',
    bio: 'Former Senior Vice President at Wipro. Ex Texas Instruments and Flex Executive.',
    credentials: ['Wharton MBA', 'Wipro SVP', 'Global Operations'],
  },
]

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Started as Mangal Advisory Services' },
  { year: '2014', title: 'Global Expansion', desc: 'Partnership with Mundi Consulting' },
  { year: '2015', title: 'Rebranded to MARC', desc: 'Expanded service offerings' },
  { year: '2020', title: 'Pan-India Presence', desc: '8+ cities across India' },
  { year: '2024', title: 'USA Operations', desc: 'MARC Glocal Inc, Delaware' },
]

const clients = [
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Marriott', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Marriott.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'The Park', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
]

const locations = [
  { city: 'Panaji', country: 'India', type: 'Headquarters' },
  { city: 'Delaware', country: 'USA', type: 'USA Office' },
  { city: 'Lisbon', country: 'Portugal', type: 'Partner Office' },
  { city: 'Mumbai', country: 'India', type: 'Branch' },
  { city: 'Pune', country: 'India', type: 'Branch' },
  { city: 'Kolkata', country: 'India', type: 'Branch' },
]

export default function AboutPageClient() {
  return (
    <div className="bg-white min-h-screen" data-testid="about-page">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-32 pb-20 bg-[#1D342F] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5D9F94]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#B45309]" />
                <span className="text-[#B45309] font-bold text-lg uppercase tracking-[0.1em]">
                  About Us
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                We Shape Decisions
                <span className="text-[#4E9141]"> For the Better</span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                MARC is a global strategy consultancy helping business leaders 
                seize competitive advantage through data-driven insights and 
                expert advisory services.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all group"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/insights-v2"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  View Our Insights
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?w=800"
                  alt="MARC Team Collaboration"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#4E9141] rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#1D342F]">Our Mission</div>
                    <div className="text-sm text-[#47635D]">Enabling better decisions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-[#F7FFF5] rounded-2xl p-6 text-center border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#4E9141] mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-bold text-[#4E9141] mb-2">{stat.value}</div>
                <div className="text-[#47635D] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="py-16 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Purpose
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-4">Our Vision</h3>
              <p className="text-lg text-[#47635D] leading-relaxed">
                Creating an ecosystem of financial awareness for an improved economy, 
                empowering businesses to make informed decisions that drive sustainable growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-4">Our Mission</h3>
              <p className="text-lg text-[#47635D] leading-relaxed">
                To partner with clients at all stages of their journey, delivering excellence 
                through actionable insights and strategic advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JOURNEY TIMELINE ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Journey
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
            From Local Roots to Global Reach
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[20px] lg:left-1/2 w-[2px] bg-[#C2DDB4]" />
            
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-[12px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 bg-[#4E9141] rounded-full border-4 border-white shadow-md z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-[45%] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-[#F7FFF5] rounded-xl p-6 border border-[#C2DDB4]/30 hover:shadow-lg transition-all">
                      <span className="text-[#4E9141] font-bold text-2xl">{item.year}</span>
                      <h4 className="text-xl font-bold text-[#1D342F] mt-2">{item.title}</h4>
                      <p className="text-[#47635D] mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LEADERSHIP TEAM ==================== */}
      <section className="py-16 bg-[#1D342F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-white font-bold text-lg uppercase tracking-[0.1em]">
              Leadership
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Meet Our Directors
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director, i) => (
              <div key={i} className="bg-[#2a4a43] rounded-2xl overflow-hidden border border-[#4E9141]/20 hover:border-[#4E9141]/50 transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{director.name}</h3>
                  <p className="text-[#4E9141] font-medium mb-3">{director.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{director.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {director.credentials.map((cred, j) => (
                      <span key={j} className="px-3 py-1 bg-[#4E9141]/20 text-[#C2DDB4] text-xs rounded-full">
                        {cred}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#4E9141] hover:text-[#C2DDB4] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CLIENTS ==================== */}
      <section id="clients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {clients.map((client, i) => (
              <div 
                key={i}
                className="flex items-center justify-center p-4 bg-[#F7FFF5] rounded-xl border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOCATIONS ==================== */}
      <section className="py-16 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Global Presence
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
            Our Locations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((loc, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl p-5 text-center border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all"
              >
                <MapPin className="w-6 h-6 text-[#4E9141] mx-auto mb-2" />
                <h4 className="font-bold text-[#1D342F]">{loc.city}</h4>
                <p className="text-sm text-[#47635D]">{loc.country}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[#4E9141]/10 text-[#4E9141] text-xs font-medium rounded-full">
                  {loc.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how MARC can help you make better decisions and achieve your strategic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/insights-v2"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Explore Our Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
