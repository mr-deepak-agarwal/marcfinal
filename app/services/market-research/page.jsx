'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, Search, Target, TrendingUp, Shield, PieChart, Users, 
  BarChart3, Globe, ChevronLeft, ChevronRight, Play, CheckCircle2,
  ChevronDown, ArrowUpRight
} from 'lucide-react'

// Service cards data
const services = [
  {
    title: 'Market Sizing',
    desc: 'Determine total addressable market, serviceable market, and growth potential.',
    icon: PieChart,
    color: 'from-emerald-500 to-teal-600',
    features: ['TAM/SAM/SOM', 'Growth Projections', 'Opportunity Maps']
  },
  {
    title: 'Consumer Research',
    desc: 'Understand your audience through surveys, interviews, and behavioral analysis.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    features: ['Survey Design', 'Focus Groups', 'Behavioral Analysis']
  },
  {
    title: 'Competitive Intelligence',
    desc: 'Map the competitive landscape including market shares and positioning.',
    icon: Target,
    color: 'from-purple-500 to-pink-600',
    features: ['Competitor Profiling', 'SWOT Analysis', 'Market Share']
  },
  {
    title: 'Industry Analysis',
    desc: 'Deep-dive into trends, dynamics, value chains, and future outlook.',
    icon: BarChart3,
    color: 'from-orange-500 to-red-600',
    features: ['Trend Analysis', 'Value Chain', 'Regulatory Review']
  },
  {
    title: 'Customer Segmentation',
    desc: 'Identify and prioritize attractive customer segments for targeting.',
    icon: Users,
    color: 'from-cyan-500 to-blue-600',
    features: ['Segment Identification', 'Persona Development', 'Targeting Strategy']
  },
  {
    title: 'Global Market Research',
    desc: 'Research capabilities spanning India and 30+ international markets.',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
    features: ['Cross-border Studies', 'Market Entry', 'Local Intelligence']
  },
]

// Process steps
const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your business objectives and research questions' },
  { num: '02', title: 'Design', desc: 'Crafting the research methodology and data collection approach' },
  { num: '03', title: 'Collection', desc: 'Gathering primary and secondary data from multiple sources' },
  { num: '04', title: 'Analysis', desc: 'Applying analytical frameworks to extract meaningful insights' },
  { num: '05', title: 'Synthesis', desc: 'Translating findings into actionable recommendations' },
  { num: '06', title: 'Delivery', desc: 'Presenting insights with clear strategic implications' },
]

// Case studies
const caseStudies = [
  {
    title: 'Aviation Route Viability',
    client: 'Regional Airline',
    result: '3 new profitable routes launched',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=800',
    tags: ['Aviation', 'Demand Analysis']
  },
  {
    title: 'FMCG Market Entry',
    client: 'Consumer Goods Co.',
    result: '₹200Cr revenue in Year 1',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    tags: ['FMCG', 'Market Entry']
  },
  {
    title: 'Healthcare Expansion',
    client: 'Hospital Chain',
    result: '5 new locations identified',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?w=800',
    tags: ['Healthcare', 'Expansion']
  },
  {
    title: 'Real Estate Feasibility',
    client: 'Property Developer',
    result: '40% higher ROI achieved',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800',
    tags: ['Real Estate', 'Feasibility']
  },
]

export default function MarketResearchPage() {
  const [activeService, setActiveService] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const servicesScrollRef = useRef(null)
  const casesScrollRef = useRef(null)

  // Auto-advance process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollServices = (direction) => {
    if (servicesScrollRef.current) {
      const scrollAmount = 350
      servicesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollCases = (direction) => {
    if (casesScrollRef.current) {
      const scrollAmount = 400
      casesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      
      {/* Hero Section - Full Width with Animated Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4E9141]/20 via-[#0a0a0a] to-[#1D342F]/30" />
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#4E9141]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#C2DDB4]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(rgba(78,145,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(78,145,65,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4E9141]/30 bg-[#4E9141]/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4E9141] animate-pulse" />
              <span className="text-[#4E9141] text-sm font-medium tracking-wide">Market Research Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Data-Driven Insights for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]">
                Confident Decisions
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
              Comprehensive market research and analysis to help you understand your market, 
              identify opportunities, and make strategic decisions with clarity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#4E9141] rounded-full font-semibold hover:bg-[#3d7334] transition-all">
                Start Your Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-white/10">
              {[
                { value: '500+', label: 'Research Projects' },
                { value: '30+', label: 'Countries' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '14+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-[#4E9141]">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Services - Horizontal Scroll Section */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#4E9141] text-sm font-medium uppercase tracking-widest">Our Services</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4">What We Deliver</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollServices('left')}
                className="p-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollServices('right')}
                className="p-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal scrolling cards */}
          <div 
            ref={servicesScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[320px] snap-start group"
              >
                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4E9141]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Animated Timeline */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4E9141] text-sm font-medium uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">How We Work</h2>
          </div>

          {/* Process timeline */}
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#4E9141] to-[#C2DDB4] transition-all duration-500"
                style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-16">
              {processSteps.map((step, i) => (
                <div 
                  key={i}
                  className={`text-center cursor-pointer transition-all duration-500 ${
                    i <= activeStep ? 'opacity-100' : 'opacity-40'
                  }`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                    i === activeStep 
                      ? 'bg-[#4E9141] text-white scale-110' 
                      : i < activeStep 
                      ? 'bg-[#4E9141]/20 text-[#4E9141]' 
                      : 'bg-white/5 text-gray-500'
                  }`}>
                    {step.num}
                  </div>
                  <h4 className="font-bold mt-4 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Horizontal Scroll */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#4E9141] text-sm font-medium uppercase tracking-widest">Case Studies</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4">Success Stories</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollCases('left')}
                className="p-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollCases('right')}
                className="p-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={casesScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies.map((study, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[380px] snap-start group cursor-pointer"
              >
                <div className="relative h-[280px] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      {study.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-[#4E9141]/80 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[#4E9141] text-sm font-medium">{study.client}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#4E9141] transition-colors">{study.title}</h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E9141]" />
                  {study.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E9141] to-[#3d7334]" />
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with MARC for market research that delivers clarity, confidence, and actionable strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#4E9141] rounded-full font-bold hover:bg-gray-100 transition-all group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
