'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Search, Calendar, Clock, ArrowRight, ArrowUpRight, User, Tag, ChevronRight,
  TrendingUp, BookOpen, Bookmark, Sparkles, Quote, Filter, X, ChevronDown
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Articles', count: 20 },
  { id: 'finance', label: 'Finance', count: 5 },
  { id: 'market-research', label: 'Market Research', count: 4 },
  { id: 'strategy', label: 'Strategy', count: 4 },
  { id: 'due-diligence', label: 'Due Diligence', count: 3 },
  { id: 'industry', label: 'Industry Trends', count: 4 },
]

// Blog posts from original MARC website
const blogs = [
  {
    id: 1,
    title: 'Why Financial Model Validation Is Non-Negotiable in 2025',
    excerpt: 'The Theranos breakdown remains a defining example of what happens when unchecked assumptions prevail. Learn why financial model validation is critical for business success.',
    category: 'finance',
    author: 'MARC Research Team',
    date: 'December 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'SME IPO Readiness: A Complete 3-Year Preparation Roadmap for Successful Listing',
    excerpt: 'Planning an SME IPO? Our expert 3-year roadmap guides you from foundational readiness to a successful listing with actionable milestones.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'December 2025',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?w=800',
    featured: true,
  },
  {
    id: 3,
    title: 'Unlocking Sustainable Growth: Why a Robust MIS Is Essential for Profitability',
    excerpt: 'In 2025, Management Information Systems will no longer be limited to back-office reporting. Discover how MIS drives profitability and monthly oversight.',
    category: 'strategy',
    author: 'MARC Team',
    date: 'December 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=800',
  },
  {
    id: 4,
    title: 'Competitive Benchmarking: Unleashing Growth Strategy For Your Business',
    excerpt: "What if your competitors aren't ahead, but they've spotted something you haven't? Learn how competitive benchmarking can transform your growth strategy.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'December 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?w=800',
  },
  {
    id: 5,
    title: 'The Year-End Crunch: Why a Strong Internal Audit Function Is Your Best Defence',
    excerpt: 'As the financial year draws to a close, now is the time to ensure your internal audit function is robust and effective.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?w=800',
  },
  {
    id: 6,
    title: 'The Future of Due Diligence: Trends to Watch in 2025',
    excerpt: 'Due Diligence in 2025: Faster, Smarter, and More Strategic. Discover the emerging trends reshaping how businesses evaluate opportunities.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'November 2025',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=800',
  },
  {
    id: 7,
    title: 'Mastering Peak Season: A Hospitality Strategy to Manage High Guest Footfall',
    excerpt: 'Every hospitality leader knows that peak season can test even the most efficient operation. Here\'s how to master the challenge.',
    category: 'industry',
    author: 'MARC Hospitality',
    date: 'November 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=800',
  },
  {
    id: 8,
    title: '5 Reasons Why Your Business Needs A Process Audit',
    excerpt: 'Studies show that businesses lose an average of 9% of annual revenue due to process inefficiencies. Is your business at risk?',
    category: 'strategy',
    author: 'MARC Team',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=800',
  },
  {
    id: 9,
    title: 'Why Market Research & Consulting Are the Beating Heart of Every Successful Project',
    excerpt: "In today's fast-changing world, market research and consulting have become the foundation of every successful business venture.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'October 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=800',
  },
  {
    id: 10,
    title: 'How a Strong CIM Drives Faster Deals and Higher Valuations in M&A',
    excerpt: "In today's competitive capital-raising landscape, a well-crafted Confidential Information Memorandum can make all the difference.",
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'October 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?w=800',
  },
  {
    id: 11,
    title: 'Navigating the Storm: The Impact of 2025 U.S. Tariffs on India\'s Textile Industry',
    excerpt: 'The global textile industry, a powerhouse valued at over $2 trillion, faces new challenges with the 2025 U.S. tariff changes.',
    category: 'industry',
    author: 'MARC Industry',
    date: 'October 2025',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?w=800',
  },
  {
    id: 12,
    title: 'How AI Is Quietly Transforming the Business of Consulting in India',
    excerpt: 'Artificial Intelligence is not replacing consultants; it\'s reshaping how they work. Discover the AI revolution in consulting.',
    category: 'industry',
    author: 'MARC Team',
    date: 'September 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800',
  },
  {
    id: 13,
    title: 'Global Expansion Strategies: The Critical Role of Market Research',
    excerpt: 'Every business has a primary aim to expand globally. Learn how market research and predictive analytics drive successful expansion.',
    category: 'market-research',
    author: 'MARC Global',
    date: 'September 2025',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=800',
  },
  {
    id: 14,
    title: 'The Role of Financial Modelling in Risk Assessment and Decision-Making',
    excerpt: 'In businesses, every decision comes with certain risks. What if you could predict and mitigate them effectively?',
    category: 'finance',
    author: 'MARC Finance',
    date: 'August 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
  },
  {
    id: 15,
    title: 'Decoding Market Entry in India: 2024 Feasibility Study Insights',
    excerpt: "India's economy is growing and buzzing with new opportunities. Our feasibility study insights help you decode market entry.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'August 2025',
    readTime: '11 min',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=800',
  },
]

const popularTags = [
  'Financial Modelling', 'Due Diligence', 'Market Entry', 'IPO', 'MIS', 
  'Consulting', 'Strategy', 'M&A', 'Growth'
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleSections, setVisibleSections] = useState({})
  const [showAllPosts, setShowAllPosts] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogs.filter(b => b.featured)
  const regularPosts = filteredBlogs.filter(b => !b.featured)
  const displayedPosts = showAllPosts ? regularPosts : regularPosts.slice(0, 6)

  return (
    <div className="bg-[#FAFAF8] min-h-screen" data-testid="blog-page">
      
      {/* Hero Section - Editorial Style with Split Layout */}
      <section id="hero" className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[180px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left - Title & Description */}
            <div className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-700 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F7FFF5] rounded-full border border-[#C2DDB4]/50 mb-8">
                <BookOpen className="w-4 h-4 text-[#4E9141]" />
                <span className="text-[#4E9141] font-medium text-sm">MARC Blogs</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Insights & Trends for
                <span className="text-[#4E9141]"> Modern Businesses</span>
              </h1>
              
              <p className="text-[#47635D] text-lg leading-relaxed mb-8">
                Stay up-to-date with knowledgeable insights and the latest trends that are transforming industries and businesses across the world.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-8 py-6 border-t border-b border-[#C2DDB4]/30">
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">80+</div>
                  <div className="text-[#47635D] text-sm">Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">15+</div>
                  <div className="text-[#47635D] text-sm">Expert Authors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">50k+</div>
                  <div className="text-[#47635D] text-sm">Monthly Readers</div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mt-8">
                <p className="text-sm font-medium text-[#47635D] mb-4">Popular Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 6).map((tag, i) => (
                    <button 
                      key={i}
                      className="px-4 py-2 bg-[#F7FFF5] text-[#47635D] text-sm rounded-full border border-[#C2DDB4]/50 hover:border-[#4E9141] hover:text-[#4E9141] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Featured Posts Stack */}
            <div className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-200 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {featuredPosts.map((post, i) => (
                <Link 
                  key={post.id} 
                  href="#"
                  className="group block bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-500"
                  data-testid={`featured-post-${i}`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-[#4E9141] text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm text-[#47635D] mb-4">
                        <span className="text-[#4E9141] font-medium capitalize">{post.category.replace('-', ' ')}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{post.readTime} read</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-[#1D342F] leading-tight mb-4 group-hover:text-[#4E9141] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#47635D] mb-6 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-[#4E9141]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1D342F]">{post.author}</p>
                            <p className="text-xs text-[#47635D]">{post.date}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[#4E9141] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-white border-y border-[#C2DDB4]/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#47635D]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-14 pr-6 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all text-[#1D342F]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-[#C2DDB4]/30 rounded-full"
                >
                  <X className="w-4 h-4 text-[#47635D]" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#4E9141] text-white'
                      : 'bg-[#F7FFF5] text-[#47635D] hover:bg-[#C2DDB4]/30 border border-[#C2DDB4]/50'
                  }`}
                  data-testid={`category-${cat.id}`}
                >
                  {cat.label}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === cat.id ? 'bg-white/20' : 'bg-white'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - Bento Style */}
      <section id="posts" className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between mb-12 transition-all duration-700 ${visibleSections.posts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-3xl font-bold text-[#1D342F]">Latest Articles</h2>
              <p className="text-[#47635D] mt-2">Expert insights on business strategy, finance, and market research</p>
            </div>
            <p className="text-[#47635D]">
              Showing <span className="font-semibold text-[#1D342F]">{filteredBlogs.length}</span> articles
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post, i) => {
              // Create visual variety with different card sizes
              const isLarge = i === 0 || i === 5
              const isWide = i === 3
              
              return (
                <Link 
                  key={post.id}
                  href="#"
                  className={`group block ${isLarge ? 'lg:row-span-2' : ''} ${isWide ? 'lg:col-span-2' : ''}`}
                  data-testid={`blog-post-${post.id}`}
                >
                  <article className={`h-full bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-500 ${
                    visibleSections.posts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[4/3]' : isWide ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#47635D] text-xs font-semibold rounded-full shadow-sm capitalize">
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>

                      {/* Bookmark */}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-sm">
                        <Bookmark className="w-5 h-5 text-[#47635D]" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className={`p-6 ${isLarge ? 'p-8' : ''}`}>
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm text-[#47635D] mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors ${
                        isLarge ? 'text-2xl' : isWide ? 'text-xl' : 'text-lg'
                      }`}>
                        {post.title}
                      </h3>

                      {/* Excerpt - only on larger cards */}
                      {(isLarge || isWide) && (
                        <p className="text-[#47635D] mb-4 line-clamp-2">{post.excerpt}</p>
                      )}

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#C2DDB4]/30">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
                            <span className="text-[#4E9141] font-bold text-sm">{post.author.charAt(0)}</span>
                          </div>
                          <span className="text-sm text-[#47635D]">{post.author}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#4E9141] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Load More Button */}
          {regularPosts.length > 6 && !showAllPosts && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllPosts(true)}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1D342F] text-white rounded-xl font-semibold hover:bg-[#2a4a43] transition-all group"
                data-testid="load-more-button"
              >
                Load More Articles
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Clean & Elegant */}
      <section className="py-24 bg-[#F7FFF5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 lg:p-16 border border-[#C2DDB4]/30 shadow-xl shadow-[#4E9141]/5 text-center">
            <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-[#47635D] text-lg mb-10 max-w-xl mx-auto">
              Get exclusive insights, industry trends, and expert analysis delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#F7FFF5] border border-[#C2DDB4] rounded-xl text-[#1D342F] placeholder-[#47635D] focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                data-testid="newsletter-email"
              />
              <button 
                className="px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all flex items-center justify-center gap-2 group"
                data-testid="newsletter-submit"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-[#47635D] text-sm mt-6">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Expert Consultation?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            Our team of experts can help you navigate complex business challenges with data-driven insights and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#5ba84d] transition-all group"
              data-testid="cta-contact"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/market-research" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
