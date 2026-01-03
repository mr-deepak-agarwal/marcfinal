'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowRight, ArrowDown, Target, Eye, Compass, Award, Users, Globe, Shield,
  MapPin, Phone, Mail, Linkedin, ChevronDown, ExternalLink, X,
  Building2, Briefcase, TrendingUp, Zap
} from 'lucide-react'

// ===========================================
// DATA
// ===========================================
const stats = [
  { value: '14+', label: 'Years', icon: Award },
  { value: '500+', label: 'Clients', icon: Users },
  { value: '10+', label: 'Locations', icon: MapPin },
  { value: '100+', label: 'Experts', icon: Briefcase },
]

const directors = [
  {
    name: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/ashutoshkharangate/',
    bio: 'Part of PWC Financial Advisory Division for 4 years. Expert in Due Diligence and Valuations in M&A across sectors including Hospitality, Healthcare, Manufacturing, and more.',
    credentials: ['Chartered Accountant (ICAI)', 'PWC Alumni', 'M&A Expert'],
  },
  {
    name: 'Satish Shinde',
    role: 'Co-Founder & Director',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/satish-shinde-06962047/',
    bio: 'MD of Astra Metals Group with over 30 years of experience in the manufacturing arena. Leading the Marketing and Finance Division.',
    credentials: ['30+ Years Experience', 'Manufacturing Expert', 'Finance Leader'],
  },
  {
    name: 'Anita Ganti',
    role: 'Director',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/anita-ganti/',
    bio: 'Former Senior Vice President at Wipro. Ex Texas Instruments and Flex Executive with deep expertise in global operations.',
    credentials: ['Wharton MBA', 'Wipro SVP', 'Global Operations'],
  },
]

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Started as Mangal Advisory Services', gradient: 'linear-gradient(135deg, #065f46 0%, #047857 100%)' },
  { year: '2014', title: 'Global', desc: 'Partnership with Mundi Consulting', gradient: 'linear-gradient(135deg, #047857 0%, #059669 100%)' },
  { year: '2015', title: 'MARC', desc: 'Rebranded with expanded services', gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' },
  { year: '2020', title: 'Pan-India', desc: '8+ cities across India', gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' },
  { year: '2024', title: 'USA', desc: 'MARC Glocal Inc, Delaware', gradient: 'linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)' },
]

const clients = [
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Marriott', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Marriott.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'The Park', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'E P Kamat', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Kamat.png' },
  { name: 'Danlow', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-32.png' },
]

const locations = [
  { city: 'Panaji', country: 'India', type: 'Headquarters', flag: '🇮🇳', desc: 'Our main office in Goa' },
  { city: 'Delaware', country: 'USA', type: 'USA Office', flag: '🇺🇸', desc: 'MARC Glocal Inc.' },
  { city: 'Lisbon', country: 'Portugal', type: 'Partner Office', flag: '🇵🇹', desc: 'Mundi Consulting' },
  { city: 'Mumbai', country: 'India', type: 'Branch', flag: '🇮🇳', desc: 'Financial hub operations' },
  { city: 'Pune', country: 'India', type: 'Branch', flag: '🇮🇳', desc: 'Tech corridor presence' },
  { city: 'Kolkata', country: 'India', type: 'Branch', flag: '🇮🇳', desc: 'Eastern India operations' },
]

const sections = ['hero', 'journey', 'team', 'clients', 'locations', 'cta']

// ===========================================
// NAVIGATION DOTS COMPONENT
// ===========================================
const NavigationDots = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, i) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="group relative flex items-center justify-end"
        >
          {/* Label on hover */}
          <span className="absolute right-8 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize">
            {section === 'cta' ? 'Contact' : section}
          </span>
          {/* Dot */}
          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === i 
              ? 'bg-emerald-500 scale-125 ring-4 ring-emerald-500/30' 
              : 'bg-white/40 hover:bg-white/60'
          }`} />
        </button>
      ))}
    </div>
  )
}

// ===========================================
// SECTION 1: HERO BENTO GRID
// ===========================================
const HeroBentoSection = () => {
  return (
    <section id="hero" className="snap-section min-h-screen bg-mesh flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          
          {/* Main Hero Card - Spans 2 cols and 2 rows */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                About MARC
              </div>
              <h1 className="font-serif text-3xl lg:text-5xl font-medium text-white leading-tight tracking-tight">
                We Shape
                <br />
                <span className="text-emerald-300">Decisions</span>
                <br />
                For the Better
              </h1>
            </div>
            
            <p className="text-emerald-100/80 text-base relative z-10 hidden lg:block">
              Global strategy consultancy working with business leaders to seize competitive advantage.
            </p>
          </div>

          {/* Stats Cards - Consistent dark style */}
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="col-span-1 row-span-1 bg-gray-900 rounded-2xl p-4 flex flex-col justify-center items-center border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 group hover:scale-105 cursor-pointer"
            >
              <stat.icon className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-3xl lg:text-4xl font-serif font-medium text-white">{stat.value}</span>
              <span className="text-gray-400 text-xs mt-1">{stat.label}</span>
            </div>
          ))}

          {/* Vision Card - Same dark style */}
          <div className="col-span-1 lg:col-span-2 row-span-1 bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-white mb-1">Our Vision</h3>
              <p className="text-gray-400 text-xs leading-relaxed hidden lg:block">Creating an ecosystem of financial awareness for an improved economy.</p>
            </div>
          </div>

          {/* Mission Card - Same dark style */}
          <div className="col-span-1 lg:col-span-2 row-span-1 bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Compass className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-white mb-1">Our Mission</h3>
              <p className="text-gray-400 text-xs leading-relaxed hidden lg:block">Partner with clients at all stages to deliver excellence.</p>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">Scroll to explore our story</p>
          <div className="w-8 h-12 border-2 border-gray-600 rounded-full mx-auto flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 2: JOURNEY TIMELINE
// ===========================================
const JourneySection = () => {
  return (
    <section id="journey" className="snap-section min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Our Journey</span>
          <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white mt-4">
            14 Years of <span className="text-emerald-400">Excellence</span>
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {timeline.map((item, i) => (
            <div 
              key={i} 
              className="rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
              style={{ background: item.gradient }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="text-4xl lg:text-5xl font-serif font-bold text-white/40">{item.year}</span>
              <h3 className="text-xl font-serif text-white mt-2 relative z-10">{item.title}</h3>
              <p className="text-white/80 text-sm mt-1 relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Connection line */}
        <div className="hidden lg:block relative h-1 bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-300 rounded-full mt-8 mx-8" />
      </div>
    </section>
  )
}

// ===========================================
// SECTION 3: TEAM - Clean Grid Layout
// ===========================================
const TeamSection = ({ selectedMember, setSelectedMember }) => {
  return (
    <section id="team" className="snap-section min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Our People</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mt-4">
            Leadership <span className="text-emerald-400">Team</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Selected Member Detail */}
          <div className="order-2 lg:order-1">
            {selectedMember !== null ? (
              <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={directors[selectedMember].image}
                      alt={directors[selectedMember].name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-white">{directors[selectedMember].name}</h3>
                    <p className="text-emerald-400 font-medium mb-4">{directors[selectedMember].role}</p>
                    <a 
                      href={directors[selectedMember].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mt-6">{directors[selectedMember].bio}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {directors[selectedMember].credentials.map((cred, i) => (
                    <span key={i} className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-800/30 rounded-3xl p-12 border border-gray-700/50 text-center">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Meet Our Leaders</h3>
                <p className="text-gray-400">Click on a team member to view their profile and credentials.</p>
              </div>
            )}
          </div>

          {/* Right: Team Member Cards Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-3 gap-4">
              {directors.map((director, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedMember(selectedMember === i ? null : i)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                    selectedMember === i 
                      ? 'ring-4 ring-emerald-500 scale-105' 
                      : 'hover:scale-105 hover:ring-2 hover:ring-emerald-500/50'
                  }`}
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                    
                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-serif text-lg text-white leading-tight">{director.name}</h4>
                      <p className="text-emerald-400 text-sm">{director.role}</p>
                    </div>

                    {/* Selected indicator */}
                    {selectedMember === i && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 4: CLIENTS MARQUEE
// ===========================================
const ClientsSection = () => {
  const duplicatedClients = [...clients, ...clients, ...clients]
  
  return (
    <section id="clients" className="snap-section min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-sm tracking-[0.3em] uppercase">Our Clients</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-4">
            Trusted by <span className="text-emerald-600">500+</span> Companies
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {[
            { value: '500+', label: 'Clients Worldwide' },
            { value: '30+', label: 'Countries Served' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-medium text-emerald-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee-container py-6">
          <div className="marquee-track">
            {duplicatedClients.map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-44 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-4 border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reverse Marquee */}
        <div className="marquee-container py-6">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {[...duplicatedClients].reverse().map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-44 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-4 border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 5: GLOBAL PRESENCE - Better Cards
// ===========================================
const LocationsSection = () => {
  return (
    <section id="locations" className="snap-section min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-900 flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Global Presence</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mt-4">
            Across <span className="text-emerald-400">3 Continents</span>
          </h2>
          <p className="text-emerald-100/60 mt-4 max-w-2xl mx-auto">
            Our local presence gives us an edge with regional expertise and professional knowledge.
          </p>
        </div>

        {/* Location Cards - Better Design */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div 
              key={i}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{loc.flag}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  loc.type === 'Headquarters' 
                    ? 'bg-emerald-500 text-white' 
                    : loc.type === 'USA Office'
                    ? 'bg-blue-500 text-white'
                    : loc.type === 'Partner Office'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-600 text-white'
                }`}>
                  {loc.type}
                </span>
              </div>
              <h4 className="font-serif text-2xl text-white mb-1">{loc.city}</h4>
              <p className="text-emerald-400 text-sm mb-2">{loc.country}</p>
              <p className="text-gray-400 text-sm">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 6: CTA - Bigger Buttons
// ===========================================
const CTASection = () => {
  return (
    <section id="cta" className="snap-section min-h-screen bg-mesh flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse-glow" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white mb-6 leading-tight">
          Ready to make
          <br />
          <span className="text-emerald-400">better decisions?</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Let us help you solve your toughest challenges and realize your greatest ambitions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-12 py-5 bg-emerald-500 text-white rounded-xl font-semibold text-lg hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            Schedule Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://marcglocal.com/wp-content/uploads/2025/06/MARC-Credentials-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Download Credentials
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// MAIN PAGE COMPONENT
// ===========================================
export default function AboutPageClient() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const sectionHeight = window.innerHeight
      const currentSection = Math.round(scrollTop / sectionHeight)
      setActiveSection(Math.min(currentSection, sections.length - 1))
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <div ref={containerRef} className="snap-container scrollbar-hide">
        <NavigationDots activeSection={activeSection} onNavigate={navigateToSection} />
        
        <HeroBentoSection />
        <JourneySection />
        <TeamSection selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
        <ClientsSection />
        <LocationsSection />
        <CTASection />
      </div>

      <Footer />
    </div>
  )
}
