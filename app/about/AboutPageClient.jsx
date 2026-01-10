'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, Eye, Compass, Award, Users,
  MapPin, Linkedin, ExternalLink, Briefcase
} from 'lucide-react'

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
  { year: '2010', title: 'Founded', desc: 'Started as Mangal Advisory Services' },
  { year: '2014', title: 'Global', desc: 'Partnership with Mundi Consulting' },
  { year: '2015', title: 'MARC', desc: 'Rebranded with expanded services' },
  { year: '2020', title: 'Pan-India', desc: '8+ cities across India' },
  { year: '2024', title: 'USA', desc: 'MARC Glocal Inc, Delaware' },
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
  { city: 'Panaji', country: 'India', type: 'Headquarters', flag: '🇮🇳', badgeClass: 'badge-hq' },
  { city: 'Delaware', country: 'USA', type: 'USA Office', flag: '🇺🇸', badgeClass: 'badge-usa' },
  { city: 'Lisbon', country: 'Portugal', type: 'Partner', flag: '🇵🇹', badgeClass: 'badge-partner' },
  { city: 'Mumbai', country: 'India', type: 'Branch', flag: '🇮🇳', badgeClass: 'badge-branch' },
  { city: 'Pune', country: 'India', type: 'Branch', flag: '🇮🇳', badgeClass: 'badge-branch' },
  { city: 'Kolkata', country: 'India', type: 'Branch', flag: '🇮🇳', badgeClass: 'badge-branch' },
]

const sectionThemes = {
  hero: 'dark',
  journey: 'dark',
  team: 'dark',
  clients: 'light',
  locations: 'dark',
  cta: 'dark',
}

const sections = ['hero', 'journey', 'team', 'clients', 'locations', 'cta']

const NavigationDots = ({ activeSection, onNavigate }) => {
  const currentSectionName = sections[activeSection] || 'hero'
  const isLightBg = sectionThemes[currentSectionName] === 'light'
  
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, i) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section}`}
        >
          <span className={`absolute right-10 px-4 py-2 text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap capitalize shadow-lg ${isLightBg ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
            {section === 'cta' ? 'Contact' : section}
          </span>
          <div className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
            activeSection === i 
              ? 'scale-150 bg-emerald-500 ring-4 ring-emerald-500/30' 
              : isLightBg 
                ? 'bg-gray-500 hover:bg-gray-700 hover:scale-125' 
                : 'bg-white/50 hover:bg-white hover:scale-125'
          }`} />
        </button>
      ))}
    </div>
  )
}

const HeroBentoSection = () => {
  return (
    <section id="hero" className="snap-section bg-mesh relative overflow-hidden px-6 lg:px-8">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[140px] lg:auto-rows-[160px]">
          
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <Image
                src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg"
                alt="Business consulting"
                fill
                className="object-cover"
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-sm font-medium mb-5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                About MARC
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
                We Shape<br />
                <span className="text-emerald-300">Decisions</span><br />
                For the Better
              </h1>
            </div>
            
            <p className="text-emerald-100/80 text-lg relative z-10 hidden lg:block">
              Global strategy consultancy working with business leaders to seize competitive advantage.
            </p>
          </div>

          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="col-span-1 row-span-1 bg-gray-900 rounded-2xl p-5 flex flex-col justify-center items-center border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 group hover:scale-105 cursor-pointer"
            >
              <stat.icon className="w-7 h-7 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-4xl lg:text-5xl font-serif font-medium text-white">{stat.value}</span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}

          <div className="col-span-1 lg:col-span-2 row-span-1 bg-gray-900 rounded-2xl p-5 lg:p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-1">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed hidden lg:block">Creating an ecosystem of financial awareness for an improved economy.</p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 row-span-1 bg-gray-900 rounded-2xl p-5 lg:p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Compass className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-1">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed hidden lg:block">Partner with clients at all stages to deliver excellence.</p>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-3">Scroll to explore</p>
          <div className="w-8 h-14 border-2 border-gray-600 rounded-full mx-auto flex justify-center pt-3">
            <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

const JourneySection = () => {
  return (
    <section id="journey" className="snap-section bg-gray-950 relative overflow-hidden px-6 lg:px-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-14">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">Our Journey</span>
          <h2 className="font-serif text-5xl lg:text-7xl font-medium text-white mt-4">
            14 Years of <span className="text-emerald-400">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {timeline.map((item, i) => (
            <div 
              key={i} 
              className="rounded-2xl p-6 lg:p-7 transform hover:scale-105 transition-all duration-500 cursor-pointer bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="text-5xl lg:text-6xl font-serif font-bold text-white/30">{item.year}</span>
              <h3 className="text-2xl font-serif text-white mt-2">{item.title}</h3>
              <p className="text-white/80 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative h-1.5 bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-300 rounded-full mt-10 mx-8" />
      </div>
    </section>
  )
}

const TeamSection = ({ selectedMember, setSelectedMember }) => {
  return (
    <section id="team" className="snap-section bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-10">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">Our People</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-medium text-white mt-4">
            Leadership <span className="text-emerald-400">Team</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            {selectedMember !== null ? (
              <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={directors[selectedMember].image}
                      alt={directors[selectedMember].name}
                      fill
                      className="object-cover"
                      sizes="112px"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-white">{directors[selectedMember].name}</h3>
                    <p className="text-emerald-400 font-medium text-lg mb-3">{directors[selectedMember].role}</p>
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
                
                <p className="text-gray-300 text-base leading-relaxed mt-6">{directors[selectedMember].bio}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {directors[selectedMember].credentials.map((cred, i) => (
                    <span key={i} className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-800/30 rounded-3xl p-10 border border-gray-700/50 text-center backdrop-blur-sm">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Meet Our Leaders</h3>
                <p className="text-gray-400 text-lg">Click on a team member to view their profile.</p>
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-3 gap-4">
              {directors.map((director, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedMember(selectedMember === i ? null : i)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${selectedMember === i ? 'ring-4 ring-emerald-500 scale-105' : 'hover:scale-105 hover:ring-2 hover:ring-emerald-500/50'}`}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 20vw"
                      quality={85}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-serif text-lg text-white leading-tight">{director.name}</h4>
                      <p className="text-emerald-400 text-sm">{director.role}</p>
                    </div>

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

const ClientsSection = () => {
  const duplicatedClients = [...clients, ...clients, ...clients]
  
  return (
    <section id="clients" className="snap-section bg-white relative overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-emerald-600 text-sm tracking-[0.3em] uppercase font-medium">Our Clients</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-medium text-gray-900 mt-4">
            Trusted by <span className="text-emerald-600">500+</span> Companies
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {[
            { value: '500+', label: 'Clients Worldwide' },
            { value: '30+', label: 'Countries Served' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-5xl lg:text-6xl font-medium text-emerald-600">{stat.value}</div>
              <div className="text-gray-600 text-base mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden py-4">
          <div className="flex gap-8 animate-marquee">
            {duplicatedClients.map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden py-4">
          <div className="flex gap-8 animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {[...duplicatedClients].reverse().map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const LocationsSection = () => {
  return (
    <section id="locations" className="snap-section bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-900 relative overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">Global Presence</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-medium text-white mt-4">
            Across <span className="text-emerald-400">3 Continents</span>
          </h2>
          <p className="text-emerald-100/60 mt-4 max-w-2xl mx-auto text-lg">
            Our local presence gives us an edge with regional expertise and professional knowledge.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((loc, i) => (
            <div 
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl mb-3 block">{loc.flag}</span>
              <h4 className="font-serif text-xl text-white mb-1">{loc.city}</h4>
              <p className="text-emerald-400 text-sm mb-3">{loc.country}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${loc.type === 'Headquarters' ? 'bg-emerald-500' : loc.type === 'USA Office' ? 'bg-blue-500' : loc.type === 'Partner' ? 'bg-purple-500' : 'bg-gray-600'}`}>
                {loc.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section id="cta" className="snap-section bg-mesh relative overflow-hidden px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[180px] animate-pulse-glow" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-5xl lg:text-7xl font-medium text-white mb-6 leading-tight">
          Ready to make<br />
          <span className="text-emerald-400">better decisions?</span>
        </h2>
        <p className="text-gray-400 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto">
          Let us help you solve your toughest challenges and realize your greatest ambitions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-12 py-5 bg-emerald-500 text-white rounded-2xl font-semibold text-lg hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            Schedule Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://marcglocal.com/wp-content/uploads/2025/06/MARC-Credentials-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Download Credentials
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function AboutPageClient() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const sections = document.querySelectorAll('.snap-section')
      const scrollPosition = container.scrollTop + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index)
        }
      })
    }

    // Initial check
    handleScroll()

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToSection = (sectionId) => {
    const sectionIndex = sections.indexOf(sectionId)
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="h-screen bg-gray-950 overflow-hidden">

      
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