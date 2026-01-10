'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, ArrowUpRight, Download, Filter, Building2, TrendingUp, Award,
  ChevronRight, ExternalLink, Sparkles, Target, BarChart3, CheckCircle2,
  Users, Globe, Zap, Eye
} from 'lucide-react'

const industries = ['All', 'Hospitality', 'Retail', 'Real Estate', 'Manufacturing', 'Healthcare', 'Aviation']

const caseStudies = [
  {
    title: 'Profitability Analysis for Premium Jewellery Brand',
    client: 'Abharan Jewellers',
    industry: 'Retail',
    service: 'Profitability Analysis',
    challenge: 'Identify key factors impacting store profitability and develop actionable improvement strategies across multiple retail locations',
    solution: 'Comprehensive cost analysis, SKU-level profitability mapping, and operational efficiency audit',
    outcomes: ['15% margin improvement', '20% reduction in operational costs', 'Data-driven inventory strategy'],
    image: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?w=800',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/20 to-orange-500/20',
    featured: true,
  },
  {
    title: 'Revenue Optimization for Fine Dining Restaurant',
    client: 'Copper Leaf',
    industry: 'Hospitality',
    service: 'Strategy Consulting',
    challenge: 'Optimize operations and enhance revenue streams for a premium dining establishment in a competitive market',
    solution: 'Menu engineering, pricing strategy optimization, and customer experience enhancement program',
    outcomes: ['20% revenue growth', '25% improvement in table turnover', 'Enhanced customer retention'],
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?w=800',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    featured: true,
  },
  {
    title: 'Turnaround Strategy for Beach Resort',
    client: 'Premium Hospitality',
    industry: 'Hospitality',
    service: 'Profitability Analysis',
    challenge: 'Reverse declining profitability and optimize revenue streams across seasonal fluctuations',
    solution: 'Seasonal pricing model, ancillary revenue development, and cost structure optimization',
    outcomes: ['30% EBITDA improvement', 'New revenue streams identified', 'Seasonal optimization framework'],
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?w=800',
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Co-working Space Market Positioning',
    client: 'Vertex',
    industry: 'Real Estate',
    service: 'Market Research',
    challenge: 'Define market positioning and growth strategy in an increasingly competitive co-working space market',
    solution: 'Competitive benchmarking, customer segmentation, and pricing strategy development',
    outcomes: ['Clear market positioning', '40% occupancy increase', 'Premium pricing justified'],
    image: 'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?w=800',
    gradient: 'from-purple-400 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Regional Aviation Route Feasibility',
    client: 'Fly91',
    industry: 'Aviation',
    service: 'Feasibility Study',
    challenge: 'Assess commercial viability of launching flights on four regional routes under UDAN scheme',
    solution: 'Demand-supply analysis, traveller profiling, competitor assessment, and route optimization',
    outcomes: ['Data-backed go/no-go decision', 'Optimal frequency identified', 'Risk mitigation plan'],
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=800',
    gradient: 'from-sky-400 via-blue-500 to-indigo-500',
    bgGradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'Building Materials Market Entry',
    client: 'ACC Alcon',
    industry: 'Manufacturing',
    service: 'Market Entry Strategy',
    challenge: 'Strategic market entry and location selection for gypsum plaster segment expansion in India',
    solution: 'Location scoring model, competitive intelligence, and go-to-market strategy development',
    outcomes: ['Optimal location identified', 'Clear entry roadmap', '40% faster market entry'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=800',
    gradient: 'from-gray-400 via-slate-500 to-gray-600',
    bgGradient: 'from-gray-500/20 to-slate-500/20',
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Award },
  { value: '30+', label: 'Industries', icon: Building2 },
  { value: '98%', label: 'Success Rate', icon: Target },
  { value: '3x', label: 'Avg. ROI', icon: TrendingUp },
]

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredStudies = caseStudies.filter(study => 
    activeIndustry === 'All' || study.industry === activeIndustry
  )

  const featuredStudies = caseStudies.filter(s => s.featured)

  return (
    <div className="bg-[#0a0a0a] min-h-screen">


      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-[200px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Real Results, Real Impact</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-medium text-white leading-[0.95] tracking-tight mb-8">
                Success
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Stories
                </span>
              </h1>

              <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-lg">
                From challenge to triumph — discover how we deliver measurable business impact through data-driven insights and strategic expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#cases" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
                  Explore Cases
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all">
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Case Studies - Large Cards */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Featured</span>
              <h2 className="font-serif text-4xl text-white mt-4">Highlighted Success Stories</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, i) => (
              <div 
                key={i}
                className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredCard(`featured-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="relative aspect-[4/3]">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
                  
                  {/* Colored gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${study.gradient} text-white text-sm font-medium rounded-full`}>
                        {study.industry}
                      </span>
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {study.service}
                      </span>
                    </div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-emerald-400 font-medium mb-2">{study.client}</p>
                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4 group-hover:text-emerald-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    {/* Outcomes */}
                    <div className="flex flex-wrap gap-3">
                      {study.outcomes.map((outcome, j) => (
                        <div key={j} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-white text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="cases" className="py-6 bg-gray-900/50 sticky top-0 z-40 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm">Filter by industry:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeIndustry === industry
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, i) => (
              <div 
                key={i}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-gradient-to-br ${study.bgGradient} rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500`}>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                    
                    {/* Gradient line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.gradient}`} />

                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 bg-gradient-to-r ${study.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                        {study.industry}
                      </span>
                    </div>

                    {/* View icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-emerald-400 text-sm font-medium mb-2">{study.client}</p>
                    <h3 className="font-serif text-xl text-white mb-3 group-hover:text-emerald-300 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.challenge}</p>
                    
                    {/* Key outcome */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white text-sm">{study.outcomes[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Our Approach</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4">
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep dive into your business challenges and objectives' },
              { num: '02', title: 'Research', desc: 'Comprehensive data collection and market analysis' },
              { num: '03', title: 'Strategy', desc: 'Develop actionable recommendations and roadmap' },
              { num: '04', title: 'Implementation', desc: 'Support execution and measure outcomes' },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-[#0a0a0a] rounded-2xl flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            Partner with MARC to transform your business challenges into measurable achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-700 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl group">
              Start Your Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://marcglocal.com/wp-content/uploads/2025/06/MARC-Credentials-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Download Credentials
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
