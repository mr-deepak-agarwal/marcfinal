'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, Building2, Car, Shirt, Construction, ShoppingBag, ShoppingCart, GraduationCap, Utensils, Stethoscope, Hotel, Factory, Cpu } from 'lucide-react'

const industries = [
  {
    id: 'automobile',
    icon: Car,
    title: 'Automobile & Mobility',
    shortDesc: 'Supply chain, R&D, and consumer studies for automotive excellence.',
    fullDesc: 'Seamless mobility connects the dots and paves the way for swift and long-lasting development. As the automotive industry advances in EV and AV technology, navigating through rapid shifts is crucial. Our experts assist firms to pick the right supply chains and develop strategic frameworks.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    stat: '$82.6B',
    statLabel: 'US Auto Market'
  },
  {
    id: 'textile',
    icon: Shirt,
    title: 'Clothing & Textile',
    shortDesc: 'Latest trends, market size, and customer buying patterns.',
    fullDesc: 'The textile industry spans beyond fashion apparel. Medical textiles and protective apparel are examples of niche products finding origin in this industry. MARC offers services from market research to financial modelling and strategic advisory.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    stat: '$70B',
    statLabel: 'US Textile Industry'
  },
  {
    id: 'construction',
    icon: Construction,
    title: 'Construction & Infrastructure',
    shortDesc: 'Feasibility studies and strategic building blocks for projects.',
    fullDesc: 'The progress of a society rests on the shoulders of its infrastructure. Our proficiency at M&A, due diligence, formulation of SOPs, and deal advisory can give optimum results in viability studies.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    stat: '$1.36T',
    statLabel: 'US Construction Sector'
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer Products',
    shortDesc: 'Accurate market feasibility reports and research data.',
    fullDesc: 'From FMCG products to perishable fresh foods, the consumer-oriented sector encompasses a diverse variety. Succeeding requires deep consumer understanding, streamlined supply chains and robust finances.',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    stat: 'B2C',
    statLabel: 'Focus Area'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    shortDesc: 'Inventory management and successful sales channels.',
    fullDesc: 'The E-commerce industry revolutionized the business world. Its impact has transformed consumer behaviour patterns and supply chain functions on a large scale. MARC provides market research, deal advisory, and financial analysis.',
    color: 'from-#4E9141 to-teal-600',
    bgColor: 'bg-#F7FFF5',
    stat: '4.1%',
    statLabel: 'FMCG via E-Commerce'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    shortDesc: 'Market feasibility studies for educational institutions.',
    fullDesc: 'With less reliance on traditional schooling and rise of online platforms, education systems are undergoing transition. Our experience in assisting institutions with governance, systems, finance enables actionable roadmaps.',
    color: 'from-cyan-500 to-sky-600',
    bgColor: 'bg-cyan-50',
    stat: '4.68M',
    statLabel: 'US Doctorate Holders'
  },
  {
    id: 'food',
    icon: Utensils,
    title: 'Food & Beverage',
    shortDesc: 'Strategic growth through feasibility studies and market research.',
    fullDesc: 'The industry includes restaurants, fast-food joints, manufacturing operations, and catering businesses. Quality, packaging, pricing, hygiene, storage and delivery channels all make huge impact.',
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-50',
    stat: '7.8%',
    statLabel: 'US Grocery Growth 2020'
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    shortDesc: 'Research analysis for pharma companies and healthcare systems.',
    fullDesc: 'The advent of COVID-19, better understanding of mental health and rapid digitization are transforming healthcare. Our professionals assist with strategic advisory, expansion, and customer trend analysis.',
    color: 'from-#5D9F94 to-#4E9141',
    bgColor: 'bg-#F0F8F6',
    stat: '5%',
    statLabel: 'Annual Profit Growth'
  },
  {
    id: 'hospitality',
    icon: Hotel,
    title: 'Hospitality',
    shortDesc: 'Tourist profile analysis and regional market research.',
    fullDesc: 'MARC is headquartered in Goa, India\'s most sought-after tourist destination. Our services help clientele understand tourist profiles, tourism trends, and type of hotel clusters to grab opportunities.',
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-50',
    stat: '$5.5T',
    statLabel: 'Global Tourism by 2029'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Services',
    shortDesc: 'Quality control, procurement, inventory, and ERP systems.',
    fullDesc: 'In the rapidly changing industrial landscape, products that once were essential often get outdated. Our extensive feasibility studies, research data, and operational guidelines enable success.',
    color: 'from-#5D9F94 to-#5D9F94',
    bgColor: 'bg-slate-100',
    stat: '54.5',
    statLabel: 'US Manufacturing Index'
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology',
    shortDesc: 'Streamlined workflows through blockchain and automation.',
    fullDesc: 'Technology devices are becoming smarter and more connected thanks to 5G and AI in IoT. We develop resilient tech and review systems to streamline workflows and pivot businesses towards better performance.',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    stat: 'AI/5G',
    statLabel: 'Emerging Tech'
  }
]

const caseHighlights = [
  { industry: 'Hospitality', client: 'Planet Hollywood', work: 'Market Research for new resort in Mumbai' },
  { industry: 'Healthcare', client: 'Madaus Pharma', work: 'Introduced Derma and Gynaec products to India' },
  { industry: 'E-commerce', client: 'Magsons', work: 'Profitability analysis and MIS report' },
  { industry: 'Technology', client: 'Optel Vision Inc', work: 'End to end advisory for India operations' },
  { industry: 'Food & Beverage', client: 'Monginis', work: 'Identified new outlet locations through research' },
  { industry: 'Healthcare', client: "Dr. Batra's", work: 'Profitability Analysis to improve efficiency' }
]

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const detailRefs = useRef({})

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

  const handleIndustryClick = (industryId) => {
    setActiveIndustry(activeIndustry === industryId ? null : industryId)
    // Scroll to the detail section
    setTimeout(() => {
      const element = document.getElementById(`industry-detail-${industryId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white" data-testid="industries-page">


      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-#F7FFF5">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-#C2DDB4/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-#C2DDB4 text-#3d7334 text-sm font-medium mb-8 animate-fadeInUp">
                <Building2 className="w-4 h-4" />
                <span>Industry Expertise</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-#1D342F leading-[1.1] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                Deep expertise
                <span className="block mt-2 bg-gradient-to-r from-#4E9141 to-teal-600 bg-clip-text text-transparent">
                  across industries
                </span>
              </h1>
              
              <p className="mt-8 text-lg sm:text-xl text-#5D9F94 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Working alongside clients on their most critical challenges often results 
                in new industry perspectives and insights.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <a 
                  href="#industries" 
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-#1D342F hover:bg-#2a4a43 text-white font-semibold rounded-full transition-all duration-300"
                  data-testid="explore-industries-btn"
                >
                  Explore Industries
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Industry Icons Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {industries.slice(0, 9).map((ind, i) => (
                <div 
                  key={ind.id}
                  className={`aspect-square rounded-2xl ${ind.bgColor} p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer animate-scaleIn`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => setActiveIndustry(ind.id)}
                >
                  <ind.icon className="w-8 h-8 text-#47635D" />
                  <span className="text-xs font-medium text-#5D9F94 text-center leading-tight">{ind.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Introduction */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-#4E9141 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-#1D342F">
            Delivering Impact in Every Industry
          </h2>
          <p className="mt-6 text-lg text-#5D9F94 leading-relaxed max-w-3xl mx-auto">
            MARC brings expertise spanning every possible industry. We know the challenges faced 
            in business environments, hence we turn that challenge into a study—then into a solution 
            for every client.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section 
        id="industries"
        ref={el => observerRefs.current[1] = el}
        className="py-16 px-6 lg:px-8 bg-[#F5F3EE]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${activeIndustry === industry.id ? 'ring-2 ring-#4E9141' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => handleIndustryClick(industry.id)}
                data-testid={`industry-card-${industry.id}`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${industry.bgColor} group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-500`}>
                    <industry.icon className="w-7 h-7 text-#47635D group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-#1D342F group-hover:text-white transition-colors duration-500 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-#5D9F94 group-hover:text-white/90 transition-colors duration-500 text-sm leading-relaxed mb-4">
                    {industry.shortDesc}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 group-hover:border-white/20 transition-colors duration-500">
                    <div>
                      <div className="text-2xl font-bold text-#4E9141 group-hover:text-white transition-colors duration-500">
                        {industry.stat}
                      </div>
                      <div className="text-xs text-#5D9F94 group-hover:text-white/70 transition-colors duration-500">
                        {industry.statLabel}
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-#47635D group-hover:text-white transition-all duration-500 ${activeIndustry === industry.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Detail Section */}
      {activeIndustry && (
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {industries.filter(ind => ind.id === activeIndustry).map((industry) => (
              <div 
                key={industry.id}
                id={`industry-detail-${industry.id}`}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${industry.bgColor} flex items-center justify-center`}>
                      <industry.icon className="w-8 h-8 text-#47635D" />
                    </div>
                    <div>
                      <span className="text-#4E9141 text-sm font-semibold uppercase tracking-wider">Industry</span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-#1D342F">{industry.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-#5D9F94 leading-relaxed mb-8">
                    {industry.fullDesc}
                  </p>

                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-4xl font-bold text-#4E9141">{industry.stat}</div>
                      <div className="text-sm text-#5D9F94">{industry.statLabel}</div>
                    </div>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-#4E9141 hover:bg-#4E9141 text-white font-semibold rounded-full transition-colors"
                    >
                      Get Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`aspect-video rounded-3xl bg-gradient-to-br ${industry.color} p-8 flex items-center justify-center`}>
                  <industry.icon className="w-32 h-32 text-white/30" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Highlights */}
      <section 
        ref={el => observerRefs.current[2] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-#4E9141 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-#1D342F">
              Client Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseHighlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-[#F5F3EE] hover:bg-#F7FFF5 border border-slate-100 hover:border-#C2DDB4 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-xs font-semibold text-#4E9141 uppercase tracking-wider mb-2">
                  {item.industry}
                </div>
                <h3 className="text-lg font-bold text-#1D342F mb-2">{item.client}</h3>
                <p className="text-sm text-#5D9F94">{item.work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MARC */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-#1D342F via-#2a4a43 to-#1D342F text-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-#5FBB46 font-semibold text-sm uppercase tracking-wider">Why Choose MARC</span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Trusted for creating research frameworks
              </h2>
              <p className="mt-6 text-lg text-#B4DAD3 leading-relaxed">
                MARC is trusted for how well we dwell in creating research frameworks in various 
                sectors, geographies, and ecologies. Our professionals are ready to dwell into 
                any sector, albeit new and novel.
              </p>
              <p className="mt-4 text-#5FBB46 font-medium text-lg">
                We love learning and experimenting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '11+', label: 'Industries Served' },
                { num: '300+', label: 'Projects Delivered' },
                { num: '10+', label: 'Years Experience' },
                { num: '98%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <div className="text-4xl font-bold text-#5FBB46">{stat.num}</div>
                  <div className="mt-2 text-sm text-#47635D">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-#1D342F">
            Ready to transform your industry challenge into success?
          </h2>
          <p className="mt-4 text-lg text-#5D9F94">
            Let us help you navigate your industry's complexities with data-driven insights.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-#4E9141 hover:bg-#4E9141 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-#4E9141/25"
            data-testid="contact-cta-btn"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
