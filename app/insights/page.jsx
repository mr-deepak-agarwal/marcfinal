'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Download, Search, ArrowRight, Play, FileText, TrendingUp, ArrowUpRight,
  Building2, Heart, Plane, ShoppingBag, Factory, Zap, Sparkles, Eye,
  BookOpen, BarChart3, Globe, ChevronRight
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', icon: Sparkles, count: 65 },
  { id: 'healthcare', label: 'Healthcare', icon: Heart, count: 12 },
  { id: 'hospitality', label: 'Hospitality', icon: Building2, count: 15 },
  { id: 'manufacturing', label: 'Manufacturing', icon: Factory, count: 18 },
  { id: 'retail', label: 'Retail & FMCG', icon: ShoppingBag, count: 14 },
  { id: 'energy', label: 'Energy', icon: Zap, count: 6 },
]

const insights = [
  { title: 'Indian Nutraceuticals and OTC Pharmaceutical Market Entry', category: 'healthcare', featured: true, new: true, downloads: '2.4k', image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?w=800' },
  { title: 'Digital Healthcare Report 2025', category: 'healthcare', featured: true, downloads: '1.8k', image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?w=800' },
  { title: 'GST 2.0: Key Reforms and Sectoral Impact', category: 'retail', new: true, downloads: '3.1k', image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?w=800' },
  { title: 'Contract Manufacturing in India', category: 'manufacturing', downloads: '1.5k', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=800' },
  { title: 'Rise of Experiential Dining', category: 'hospitality', featured: true, downloads: '2.2k', image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?w=800' },
  { title: 'Rise of Luxury Hospitality in Tier-2 Cities', category: 'hospitality', downloads: '1.9k', image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=800' },
  { title: 'Growth of Co-working Spaces', category: 'retail', downloads: '1.2k', image: 'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?w=800' },
  { title: 'Manufacturing Industry Overview', category: 'manufacturing', downloads: '2.8k', image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?w=800' },
  { title: 'FMCG Industry Overview 2025', category: 'retail', new: true, downloads: '3.5k', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800' },
  { title: 'Impact of Q-commerce on FMCG', category: 'retail', downloads: '2.1k', image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?w=800' },
  { title: "India's Logistics Market Analysis", category: 'manufacturing', downloads: '1.7k', image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?w=800' },
  { title: 'Enhancing Power Infrastructure', category: 'energy', downloads: '890', image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?w=800' },
]

const videoInsights = [
  { title: 'Market Research Deep Dive', duration: '12:45', thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800' },
  { title: 'Industry Analysis 2025', duration: '18:30', thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?w=800' },
  { title: 'Economic Trends Forecast', duration: '15:20', thumbnail: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?w=800' },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === 'all' || insight.category === activeCategory
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredInsights = insights.filter(i => i.featured)

  return (
    <div className="bg-[#fafafa] min-h-screen">
     

      {/* Hero Section - Stunning Split Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                <BookOpen className="w-4 h-4" />
                <span>65+ Research Reports</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-7xl font-medium text-white leading-[1.05] mb-8">
                Insights That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Drive Decisions
                </span>
              </h1>

              <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-lg">
                Deep research, strategic analysis, and industry intelligence from our team of experts. Download reports that power confident business decisions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#reports" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
                  Browse Reports
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#videos" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Videos
                </Link>
              </div>
            </div>

            {/* Right - 3D Card Stack */}
            <div className="relative h-[500px] hidden lg:block">
              {featuredInsights.slice(0, 3).map((insight, i) => (
                <div
                  key={i}
                  className="absolute w-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group"
                  style={{
                    top: i * 40,
                    right: i * 30,
                    zIndex: 3 - i,
                    transform: `rotate(${-5 + i * 5}deg)`,
                  }}
                >
                  <div className="relative aspect-[4/5]">
                    <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {insight.new && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-emerald-400 text-sm font-medium mb-2 capitalize">{insight.category}</p>
                      <h3 className="text-white font-serif text-xl leading-tight">{insight.title}</h3>
                      <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
                        <Download className="w-4 h-4" />
                        {insight.downloads} downloads
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-emerald-500/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Download className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Floating stats */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">65+</div>
                <div className="text-gray-400 text-sm">Reports</div>
              </div>

              <div className="absolute -right-10 bottom-20 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400">50k+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* Category Pills */}
      <section id="reports" className="py-12 bg-[#fafafa] sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid - Creative Masonry-like */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, i) => (
              <div
                key={i}
                className={`group cursor-pointer ${i % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 ${i % 5 === 0 ? 'h-full' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${i % 5 === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {insight.new && (
                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">NEW</span>
                      )}
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full capitalize">
                        {insight.category}
                      </span>
                    </div>

                    {/* Download button on hover */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Download className="w-7 h-7 text-emerald-600" />
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Eye className="w-4 h-4" />
                        {insight.downloads} downloads
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`font-serif text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight ${i % 5 === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {insight.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-500 text-sm">PDF Report</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Load More Reports
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Insights */}
      <section id="videos" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Video Content</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4">
                Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Insights</span>
              </h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoInsights.map((video, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-5">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-8 h-8 text-emerald-600 ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-white group-hover:text-emerald-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white mb-6">
            Need Custom Research?
          </h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            Our team can prepare industry-specific insights tailored to your unique business needs and challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-700 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl group">
            Request Custom Report
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
