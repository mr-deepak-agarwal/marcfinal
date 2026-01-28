'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, Briefcase, Users, Heart, Shield, Sparkles, ChevronRight, MapPin, Clock, ExternalLink, Target, Award, TrendingUp, Globe } from 'lucide-react'

const culturePillars = [
  {
    icon: Sparkles,
    title: 'Adaptability',
    description: 'Innovation thinking, self-learning, preparation, time management, thinking big and always having a positive attitude.',
  },
  {
    icon: Users,
    title: 'Sustainability',
    description: 'Continuous training, following SOPs, frequent client interaction, knowledge sharing and working towards social causes.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Everyone can achieve their potential with the right backing and support. We value every individual and equality.',
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Being proactive, honest, committed, and communicative ensures accountability and cohesion at all times.',
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
    department: 'Sales',
    link: '#'
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Goa, India',
    department: 'Operations',
    link: '#'
  },
  {
    title: 'Research Analyst',
    type: 'Full-time',
    location: 'Mumbai, India',
    department: 'Research',
    link: '#'
  },
  {
    title: 'Financial Analyst',
    type: 'Full-time',
    location: 'Pune, India',
    department: 'Finance',
    link: '#'
  }
]

const benefits = [
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career paths and continuous learning' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Work with experts across industries' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work on international projects' },
  { icon: Award, title: 'Recognition', desc: 'Your contributions are valued and rewarded' },
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
    <div className="min-h-screen bg-[#F7FFF5]" data-testid="careers-page">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-[#4E9141]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C2DDB4]/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4E9141] text-white text-sm font-semibold mb-8">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Build Your Career
              <span className="block mt-2 text-[#C2DDB4]">
                With MARC
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Are you a problem solver, a curator of ideas, or a creative thinker? 
              Join our team of passionate professionals shaping business decisions across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#openings" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#4E9141]/30"
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
              { num: '500+', label: 'Projects' },
              { num: '14+', label: 'Years' },
              { num: '8', label: 'Offices' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join MARC */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-[#4E9141] font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight">
              Your next best challenging step
            </h2>
            <p className="mt-4 text-lg text-[#47635D] max-w-2xl mx-auto">
              Whether you're an experienced professional or a fresher—a career at MARC could be 
              the next transformative step in your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/40 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">{benefit.title}</h3>
                <p className="text-[#47635D] text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section 
        id="culture"
        ref={el => observerRefs.current[1] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F0F8F6]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-[#4E9141] font-semibold text-sm uppercase tracking-wider">Our Culture</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1D342F]">
              Built on <span className="text-[#4E9141]">4 pillars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#47635D] text-sm leading-relaxed">
                  {pillar.description}
                </p>
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
              <span className="text-[#4E9141] font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight">
                The values that bring us together
              </h2>
              <p className="mt-6 text-lg text-[#47635D] leading-relaxed">
                Building a diverse and inclusive team isn't just the right thing to do for our people, 
                it's the right thing to do for our business. We're committed to continuous 
                learning and creating space for everyone to thrive.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-[#F7FFF5] hover:bg-[#C2DDB4]/20 border border-[#C2DDB4]/40 hover:border-[#4E9141]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#4E9141]" />
                    <h3 className="font-bold text-[#1D342F]">{value.title}</h3>
                  </div>
                  <p className="text-sm text-[#47635D] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at MARC */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#1D342F] text-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#C2DDB4] font-semibold text-sm uppercase tracking-wider">Life at MARC</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              We're always looking for diverse talents
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We are a family of passionate and experienced strategic advisors with a leadership team 
              who care deeply about your goals and growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '14+', label: 'Years of Excellence' },
              { value: '8', label: 'Offices Across India' },
              { value: '100+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl lg:text-5xl font-bold text-[#4E9141]">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
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
            <span className="text-[#4E9141] font-semibold text-sm uppercase tracking-wider">Opportunities</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1D342F]">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-[#47635D]">
              We are happy to know about your keen interest to pursue a career opportunity with MARC.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <a 
                key={index}
                href={job.link}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#F7FFF5] hover:bg-[#C2DDB4]/20 border border-[#C2DDB4]/40 hover:border-[#4E9141]/50 transition-all duration-300"
                data-testid={`job-opening-${index}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#4E9141]/10 text-[#4E9141] text-xs font-semibold">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#47635D]">
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
                <div className="flex items-center gap-2 text-[#4E9141] font-semibold">
                  <span className="hidden sm:inline">Apply Now</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* No Openings Fit? */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-[#C2DDB4]/20 border border-[#4E9141]/20">
            <h3 className="text-xl font-bold text-[#1D342F]">Don't see a role that fits?</h3>
            <p className="mt-2 text-[#47635D]">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#4E9141]/20"
              data-testid="send-resume-btn"
            >
              <ExternalLink className="w-4 h-4" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#4E9141]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to make an impact?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join MARC and be part of a team that's shaping the future of business consulting in India.
          </p>
          <a 
            href="#openings" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1"
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
