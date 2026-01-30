'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, FileCheck, MapPin, Building2, TrendingUp, Calculator, 
  Target, Layers, PieChart, CheckCircle2, ArrowUpRight, Quote,
  Lightbulb, Shield, BarChart3
} from 'lucide-react'

export default function FeasibilityStudyPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((scrollTop / docHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [index]: true }))
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#4E9141] to-[#C2DDB4] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Chapter 1: Hero - The Challenge */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-[#1D342F]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4E9141]/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C2DDB4]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#C2DDB4] text-sm uppercase tracking-[0.2em] mb-8">
                <span className="w-8 h-[1px] bg-[#C2DDB4]" />
                Chapter 01
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                Every Big Decision
                <span className="block text-[#4E9141]">Starts With a Question</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Will this investment pay off? Is this market ready? Can we make it work?
                <span className="block mt-4 text-white font-medium">We help you find the answers.</span>
              </p>

              <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#4E9141]/20 to-[#C2DDB4]/10 p-12 border border-white/10">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="text-8xl font-bold text-[#4E9141] mb-4">?</div>
                  <p className="text-2xl text-white font-light">The question that shapes everything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Stakes */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="py-32 bg-white"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${visibleSections[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 text-[#4E9141] text-sm uppercase tracking-[0.2em] mb-8">
            <span className="w-8 h-[1px] bg-[#4E9141]" />
            Chapter 02
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-tight mb-12">
            The stakes are high.<br />
            <span className="text-[#47635D] font-normal">The margin for error is low.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '₹5000Cr+', label: 'Investment decisions supported', icon: TrendingUp },
              { value: '200+', label: 'Feasibility studies completed', icon: FileCheck },
              { value: '95%', label: 'Recommendation accuracy', icon: Target },
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`text-center p-8 rounded-2xl bg-[#F7FFF5] transition-all duration-700`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <stat.icon className="w-10 h-10 text-[#4E9141] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#1D342F] mb-2">{stat.value}</div>
                <div className="text-[#47635D]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: The Journey - Process Reveal */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-32 bg-[#F7FFF5]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-2 text-[#4E9141] text-sm uppercase tracking-[0.2em] mb-8">
              <span className="w-8 h-[1px] bg-[#4E9141]" />
              Chapter 03
              <span className="w-8 h-[1px] bg-[#4E9141]" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1D342F]">
              The Journey to Clarity
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { 
                num: '01', 
                title: 'We Listen', 
                desc: 'Understanding your vision, constraints, and what success looks like for you.',
                detail: 'Every great analysis starts with the right questions. We dive deep into your objectives, timeline, and risk appetite.',
                icon: Lightbulb
              },
              { 
                num: '02', 
                title: 'We Investigate', 
                desc: 'Market demand, competitive landscape, regulatory requirements, financial viability.',
                detail: 'Our team combines secondary research with primary data collection—interviews, surveys, site visits.',
                icon: Search
              },
              { 
                num: '03', 
                title: 'We Analyze', 
                desc: 'Financial models, sensitivity analysis, risk quantification, scenario planning.',
                detail: 'Rigorous financial modeling with multiple scenarios to understand the range of outcomes.',
                icon: Calculator
              },
              { 
                num: '04', 
                title: 'We Recommend', 
                desc: 'Clear go/no-go guidance backed by data and expert judgment.',
                detail: 'Not just numbers, but strategic recommendations you can act on with confidence.',
                icon: Target
              },
            ].map((step, i) => (
              <div 
                key={i}
                className={`grid lg:grid-cols-2 gap-12 py-16 border-b border-[#C2DDB4]/30 last:border-0 transition-all duration-1000 ${
                  visibleSections[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                <div className="flex gap-6">
                  <div className="text-8xl font-bold text-[#C2DDB4]/50 leading-none">{step.num}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1D342F] mb-4">{step.title}</h3>
                    <p className="text-xl text-[#47635D]">{step.desc}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-8 rounded-2xl bg-white border border-[#C2DDB4]/30">
                    <step.icon className="w-8 h-8 text-[#4E9141] mb-4" />
                    <p className="text-[#47635D] leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4: What We Assess */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-1000 ${visibleSections[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-2 text-[#4E9141] text-sm uppercase tracking-[0.2em] mb-8">
              <span className="w-8 h-[1px] bg-[#4E9141]" />
              Chapter 04
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1D342F] max-w-3xl">
              We leave no stone unturned
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Market Viability',
                desc: 'Is there genuine demand? How big is the opportunity? Who are you competing against?',
                icon: BarChart3,
                checks: ['Market sizing', 'Demand drivers', 'Competition analysis']
              },
              {
                title: 'Technical Feasibility',
                desc: 'Can it be built? What resources are needed? What are the technical risks?',
                icon: Building2,
                checks: ['Infrastructure needs', 'Technology requirements', 'Operational setup']
              },
              {
                title: 'Financial Viability',
                desc: 'Will it make money? When? How much investment is required?',
                icon: Calculator,
                checks: ['Revenue projections', 'Cost modeling', 'ROI/IRR analysis']
              },
              {
                title: 'Risk Assessment',
                desc: 'What could go wrong? How likely is it? How do we mitigate it?',
                icon: Shield,
                checks: ['Risk identification', 'Sensitivity analysis', 'Mitigation strategies']
              },
            ].map((item, i) => (
              <div 
                key={i}
                className={`p-10 rounded-3xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-500 ${
                  visibleSections[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D342F] mb-4">{item.title}</h3>
                <p className="text-[#47635D] mb-6 text-lg">{item.desc}</p>
                <div className="space-y-3">
                  {item.checks.map((check, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4E9141]" />
                      <span className="text-[#1D342F]">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 5: Success Story */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="py-32 bg-[#1D342F]"
      >
        <div className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${visibleSections[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 text-[#4E9141] text-sm uppercase tracking-[0.2em] mb-8">
            <span className="w-8 h-[1px] bg-[#4E9141]" />
            Chapter 05
          </div>
          
          <Quote className="w-16 h-16 text-[#4E9141]/30 mb-8" />
          
          <blockquote className="text-3xl lg:text-4xl font-light text-white leading-relaxed mb-12">
            "MARC's feasibility study saved us from a ₹200 Crore mistake. Their analysis revealed 
            market conditions we hadn't considered. When we finally invested—in a different location 
            they recommended—we achieved <span className="text-[#4E9141] font-semibold">40% higher returns</span> than projected."
          </blockquote>
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#4E9141]/20 flex items-center justify-center">
              <span className="text-[#4E9141] font-bold text-xl">RG</span>
            </div>
            <div>
              <div className="text-white font-semibold">Real Estate Developer</div>
              <div className="text-gray-400">Mixed-Use Development Project, Maharashtra</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: The Decision */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="py-32 bg-white"
      >
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${visibleSections[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 text-[#4E9141] text-sm uppercase tracking-[0.2em] mb-8">
            <span className="w-8 h-[1px] bg-[#4E9141]" />
            Chapter 06
            <span className="w-8 h-[1px] bg-[#4E9141]" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1D342F] mb-8">
            Your decision awaits.
          </h2>
          
          <p className="text-xl text-[#47635D] mb-12 max-w-2xl mx-auto">
            You have a vision. A project. An investment decision that could shape your future.
            <span className="block mt-4 text-[#1D342F] font-medium">Let's find out if it's meant to be.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all group">
              Start Your Feasibility Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#C2DDB4] text-[#47635D] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Search(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  )
}
