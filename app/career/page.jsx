'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, Briefcase, Users, Heart, Shield, Sparkles, ChevronRight, MapPin, Clock, ExternalLink } from 'lucide-react'

const culturePillars = [
  {
    icon: Sparkles,
    title: 'Adaptability',
    description: 'Innovation thinking, self-learning, preparation, time management, thinking big and always having a positive attitude.',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Sustainability',
    description: 'Continuous training, following SOPs, frequent client interaction, knowledge sharing and working towards social causes.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Everyone can achieve their potential with the right backing and support. We value every individual and equality.',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Being proactive, honest, committed, and communicative ensures accountability and cohesion at all times.',
    gradient: 'from-amber-500 to-orange-600'
  }
]

const values = [
  { title: 'Passion', desc: 'Fuels innovation, great work, and leadership. When faced with obstacles, it keeps us going.' },
  { title: 'Collaboration', desc: 'Our collaborative approach creates an environment where individuals learn and leverage capabilities.' },
  { title: 'Integrity', desc: 'Seeking the truth is more important than being right. We learn from mistakes and hold ourselves accountable.' },
  { title: 'Leadership', desc: 'Provides employees with opportunities, guidance, and a positive example to follow.' }
]

const openings = [
  {
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'Goa, India',
    link: '#'
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Goa, India',
    link: '#'
  }
]

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }))
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      )
      observer.observe(ref)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6]" data-testid="careers-page">
     

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[150px]" />
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-medium mb-8 animate-fadeInUp">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Developing your
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                career at MARC
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Are you a problem solver, a curator of ideas, or a creative thinker? 
              Do you like to build structures and engineer purposes?
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#openings" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
                data-testid="view-openings-btn"
              >
                View Openings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#culture" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                data-testid="our-culture-btn"
              >
                Our Culture
              </a>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-10 right-10 hidden lg:flex gap-6">
            {[
              { num: '300+', label: 'Clients Served' },
              { num: '10+', label: 'Years Experience' },
              { num: '8', label: 'Office Locations' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Career At MARC</span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Your next best challenging and vibrant step
              </h2>
              <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  You might be an experienced professional or a fresher—a career at MARC could be 
                  the next transformative step in your journey.
                </p>
                <p>
                  We love to push the limits and boundaries of analytics, research, business, finance, 
                  management, and technology. We keep stretching our ideologies and visions.
                </p>
                <p className="text-emerald-600 font-medium">
                  If you feel the same, YOU might already be the person we've been looking for.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-50 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {['Analytics', 'Research', 'Finance', 'Strategy'].map((item, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                    >
                      <span className="text-sm font-semibold text-slate-700 text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section 
        id="culture"
        ref={el => observerRefs.current[1] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F5F3EE]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Culture</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
              Our culture is based on <span className="text-emerald-600">4 pillars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/90 transition-colors duration-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={el => observerRefs.current[2] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Value Diversity</span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                The values that bring us together
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Building a diverse and inclusive team isn't just the right thing to do for our people, 
                it's the right thing to do for our business. We're committed to being real and continuously 
                learning when it comes to pay equality, recruiting, and creating space for underrepresented 
                groups to thrive.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-[#F5F3EE] hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h3 className="font-bold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at MARC */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Life at MARC</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              We're always looking for diverse talents and ideas
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              We are a family of passionate and experienced strategic advisors with a leadership team 
              who care deeply about your goals and growth. With our rich industry knowledge and a decade's 
              worth of experience, we come together to deliver excellence, always.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '300+', label: 'Clients Served' },
              { value: '10+', label: 'Years of Excellence' },
              { value: '8', label: 'Offices Across India' },
              { value: '50+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-400">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section 
        id="openings"
        ref={el => observerRefs.current[4] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Opportunities</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We are happy to know about your keen interest to pursue a career opportunity with MARC Glocal.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <a 
                key={index}
                href={job.link}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#F5F3EE] hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300"
                data-testid={`job-opening-${index}`}
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <span className="hidden sm:inline">View Details</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* No Openings Fit? */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <h3 className="text-xl font-bold text-slate-900">Don't see a role that fits?</h3>
            <p className="mt-2 text-slate-600">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
              data-testid="send-resume-btn"
            >
              <ExternalLink className="w-4 h-4" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to make an impact?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join MARC and be part of a team that's shaping the future of business consulting.
          </p>
          <a 
            href="#openings" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            data-testid="explore-opportunities-btn"
          >
            Explore Opportunities
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
