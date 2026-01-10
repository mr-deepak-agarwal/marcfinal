'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Search, Calendar, Clock, ArrowRight, ArrowUpRight, User, Tag, ChevronRight,
  TrendingUp, BookOpen, Bookmark, Sparkles, Quote
} from 'lucide-react'

const categories = ['All', 'Market Research', 'Due Diligence', 'Strategy', 'Finance', 'M&A', 'Industry Trends']

const blogs = [
  {
    title: 'Why Financial Model Validation Is Non-Negotiable in 2025',
    excerpt: 'The Theranos breakdown remains a defining example of what happens when unchecked assumptions prevail in financial projections...',
    category: 'Finance',
    author: 'Ashutosh Kharangate',
    date: 'Jul 15, 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    featured: true,
    size: 'large',
  },
  {
    title: 'SME IPO Readiness: A Complete 3-Year Preparation Roadmap',
    excerpt: 'Planning an SME IPO? Our expert 3-year roadmap guides you from foundational readiness to a successful listing...',
    category: 'Finance',
    author: 'Satish Shinde',
    date: 'Jul 12, 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?w=800',
    featured: true,
    size: 'medium',
  },
  {
    title: 'Unlocking Sustainable Growth: Why a Robust MIS Is Essential',
    excerpt: 'In 2025, Management Information Systems will no longer be limited to back-office reporting...',
    category: 'Strategy',
    author: 'Anita Ganti',
    date: 'Jul 10, 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=800',
    size: 'medium',
  },
  {
    title: 'Competitive Benchmarking: Unleashing Growth Strategy',
    excerpt: 'What if your competitors are not ahead, but they have spotted something you have not?',
    category: 'Market Research',
    author: 'MARC Team',
    date: 'Jul 8, 2025',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?w=800',
    size: 'small',
  },
  {
    title: 'The Future of Due Diligence: Trends to Watch in 2025',
    excerpt: 'Due Diligence in 2025: Faster, Smarter, and More Strategic than ever before...',
    category: 'Due Diligence',
    author: 'MARC Team',
    date: 'Jul 5, 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=800',
    size: 'small',
  },
  {
    title: 'Mastering Peak Season: A Hospitality Strategy Guide',
    excerpt: 'Every hospitality leader knows that peak season can test even the most efficient operation...',
    category: 'Industry Trends',
    author: 'MARC Team',
    date: 'Jul 3, 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=800',
    size: 'small',
  },
  {
    title: '5 Reasons Why Your Business Needs A Process Audit',
    excerpt: 'Studies show that businesses lose an average of 9% of annual revenue due to process inefficiencies...',
    category: 'Strategy',
    author: 'MARC Team',
    date: 'Jul 1, 2025',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=800',
    size: 'small',
  },
  {
    title: 'How AI Is Transforming Consulting in India',
    excerpt: 'Artificial Intelligence is not replacing consultants; it is reshaping how they work...',
    category: 'Industry Trends',
    author: 'MARC Team',
    date: 'Jun 28, 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800',
    size: 'small',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredBlog = blogs.find(b => b.featured && b.size === 'large')
  const secondaryFeatured = blogs.filter(b => b.featured && b.size === 'medium')

  return (
    <div className="bg-white min-h-screen">
  

      {/* Hero Section - Magazine Style */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500" />
            <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">MARC Blog</span>
          </div>

          {/* Magazine Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured */}
            {featuredBlog && (
              <div className="lg:col-span-2 group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                  <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-full">
                        {featuredBlog.category}
                      </span>
                      <span className="text-white/60 text-sm">{featuredBlog.readTime} read</span>
                    </div>
                    <h2 className="font-serif text-3xl lg:text-5xl text-white leading-tight mb-4 group-hover:text-emerald-400 transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 line-clamp-2 max-w-2xl">{featuredBlog.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                        {featuredBlog.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{featuredBlog.author}</p>
                        <p className="text-gray-400 text-sm">{featuredBlog.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Featured */}
            <div className="space-y-6">
              {secondaryFeatured.map((blog, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-emerald-400 transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-3 text-gray-400 text-sm">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime} read</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">80+</div>
              <div className="text-emerald-100">Expert Articles</div>
            </div>
            <div>
              <div className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">50k+</div>
              <div className="text-emerald-100">Monthly Readers</div>
            </div>
            <div>
              <div className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-100">Industry Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - Dynamic Masonry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredBlogs.map((blog, i) => {
              const isLarge = i % 7 === 0
              const isMedium = i % 5 === 2
              
              return (
                <article 
                  key={i} 
                  className={`group cursor-pointer ${isLarge ? 'lg:col-span-2' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden mb-5 ${isLarge ? 'aspect-[2/1]' : 'aspect-[16/10]'}`}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>

                    {/* Bookmark */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>

                    {/* Read arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime} read
                    </div>
                  </div>

                  <h3 className={`font-serif text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight mb-3 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-2 mb-4">{blog.excerpt}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{blog.author}</span>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <button className="w-12 h-12 bg-emerald-600 text-white rounded-xl font-semibold">1</button>
            <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors">2</button>
            <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors">3</button>
            <span className="text-gray-400">...</span>
            <button className="px-6 h-12 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter - Stunning Design */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Get exclusive insights, industry trends, and expert analysis delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <button className="px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group">
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-6">Join 10,000+ professionals. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
