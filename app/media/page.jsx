'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Newspaper, FileText, Mail, Download, Calendar, ChevronRight, Award } from 'lucide-react'

const newsArticles = [
  {
    date: 'Sept 1, 2023',
    source: 'The Economic Times',
    title: 'The most admired Indian companies in 2023',
    excerpt: 'MARC gets featured for "Top 10 Most Admired Companies in India 2023" that features diverse range of companies achieving financial success while prioritizing innovation and social responsibility.',
    link: '#',
    featured: true
  },
  {
    date: 'Oct 21, 2022',
    source: 'EMS Now',
    title: 'The Indian Companies Helping The C-Suite Tackle Talent Shortages',
    excerpt: 'MARC Glocal provides very different services but with a similar level of flexibility and expertise, supporting companies in M&A activity.',
    link: '#'
  },
  {
    date: 'Feb 2, 2022',
    source: 'The SME India',
    title: 'MSMEs and the Union Budget 2022',
    excerpt: 'The MSME sector is hailed as the backbone of the country\'s economy, comprising 6.3 million units and employing over 11 crores of population.',
    link: '#'
  },
  {
    date: 'Jan 31, 2022',
    source: 'Deccan Herald',
    title: 'Internationalization is Crucial for MSMEs',
    excerpt: 'Over the last few years, working closely with clients, we have realized that several Indian companies have incredible quality products limited in local markets.',
    link: '#'
  },
  {
    date: 'Dec 2, 2021',
    source: 'Daily Pioneer',
    title: 'MARC aims at helping SMEs throughout life',
    excerpt: 'MARC\'s robust portfolio has led the company to receive rewards, recognition and acknowledgements across the country.',
    link: '#'
  },
  {
    date: 'Nov 18, 2021',
    source: 'Mid-Day',
    title: 'MARC is assisting SMEs & MSMEs in their growth journey',
    excerpt: 'MARC helps small and medium scale businesses to start well, prosper and grow, believing every business is unique.',
    link: '#'
  },
  {
    date: 'Oct 27, 2021',
    source: 'Bangalore Mirror',
    title: 'It\'s time to dine and wine again',
    excerpt: 'After almost two years of grim tidings, the hospitality sector is grooving back to its pre-pandemic days.',
    link: '#'
  },
  {
    date: 'Sept 22, 2021',
    source: 'SME Futures',
    title: 'Internationalization: New frontiers for SMEs in India',
    excerpt: 'If you thought Internationalisation was only the act of exporting, that\'s akin to saying Marketing and Sales are the same things.',
    link: '#'
  },
  {
    date: 'Aug 10, 2021',
    source: 'Your Story',
    title: '\'Your vibe attracts your tribe\' – 35 quotes from Indian startup journeys',
    excerpt: 'Ashutosh Kharangate, Founder and MD of MARC was quoted among the top 35 Indian Startup Entrepreneurs.',
    link: '#'
  }
]

const pressReleases = [
  {
    date: 'Nov 29, 2022',
    source: 'Outlook India',
    title: 'MARC celebrates 12 years of business',
    excerpt: 'MARC celebrated its 12-year anniversary with its flagship event \'Celebrating Entrepreneurship in Goa\' honouring associates and industry leaders.',
    link: '#'
  },
  {
    date: 'Jan 12, 2022',
    source: 'PR.com',
    title: 'Anita Ganti joins the Board of Directors of MARC India',
    excerpt: 'MARC appoints Ex-Wipro, Flex, and Texas Instruments executive Anita Ganti to its Board of Directors.',
    link: '#'
  },
  {
    date: 'Aug 04, 2021',
    source: 'Business Standard',
    title: 'MARC Opens Its 8th Office in India',
    excerpt: 'MARC opens its latest office in Pune on the occasion of its 11th Anniversary, offering customized Analytical services to MSMEs.',
    link: '#'
  },
  {
    date: 'Jun 25, 2020',
    source: 'oHeraldo',
    title: 'EFL ties up with MARC to set up a branch in Goa',
    excerpt: 'Electronica Finance Limited has entered into an MOU with MARC to provide services of a satellite office in Goa.',
    link: '#'
  },
  {
    date: 'Jan 28, 2020',
    source: 'Navhind Times',
    title: 'Mangal Analytics branches into IT consultancy',
    excerpt: 'Branched into IT consultancy with the launch of TechPally, aimed at providing software consultation to local units.',
    link: '#'
  },
  {
    date: 'Sep 01, 2018',
    source: 'Business Goa',
    title: 'MARC moves into its new corporate address',
    excerpt: 'MARC inaugurated its new office premises at 2nd Floor, CMM Building, Rua de Ourem, Panjim.',
    link: '#'
  }
]

const publications = [
  { name: 'The Economic Times', logo: 'ET' },
  { name: 'Your Story', logo: 'YS' },
  { name: 'Business Standard', logo: 'BS' },
  { name: 'Outlook India', logo: 'OI' },
  { name: 'Deccan Herald', logo: 'DH' },
  { name: 'Mid-Day', logo: 'MD' }
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('news')
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
    <div className="min-h-screen bg-white" data-testid="media-page">
  

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
          {/* Animated Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Newspaper Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
            }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-medium mb-8 animate-fadeInUp">
              <Newspaper className="w-4 h-4" />
              <span>Media & Press</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              In the news,
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                taking the spotlight
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              We are either brainstorming novel ways to execute strategies, or making headlines. 
              Stay abreast of our presence in the tabloids.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#coverage" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                data-testid="view-coverage-btn"
              >
                View Coverage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#press" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                data-testid="press-releases-btn"
              >
                Press Releases
              </a>
            </div>
          </div>
        </div>

        {/* Featured Publications Marquee */}
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="flex items-center justify-center gap-12 flex-wrap px-6">
            <span className="text-white/40 text-sm uppercase tracking-wider">Featured In</span>
            {publications.map((pub, i) => (
              <div key={i} className="text-white/60 font-semibold text-sm hover:text-white transition-colors cursor-pointer">
                {pub.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts & Press Kit */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-20 px-6 lg:px-8 bg-[#F5F3EE]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Media Contacts */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Media Contacts</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Journalists, media houses, dailies, and publishers may use the contact information 
                for inquiries and clarifications.
              </p>
              <a 
                href="mailto:contact@marcglocal.com" 
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
                data-testid="media-contact-link"
              >
                contact@marcglocal.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Press Kit */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Press Kit</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Resources and material for media releases, company profiles, and relevant content. 
                Usage rights are reserved with MARC.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
                data-testid="download-press-kit-btn"
              >
                <Download className="w-4 h-4" />
                Download Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Press Releases */}
      <section 
        id="coverage"
        ref={el => observerRefs.current[1] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Media Coverage</span>
              <h2 className="mt-2 text-4xl lg:text-5xl font-bold text-slate-900">
                {activeTab === 'news' ? 'MARC in the News' : 'Press Releases'}
              </h2>
            </div>
            
            <div className="flex p-1 bg-slate-100 rounded-full">
              <button 
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'news' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                data-testid="news-tab"
              >
                <span className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4" />
                  News
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('press')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'press' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                data-testid="press-tab"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Press Releases
                </span>
              </button>
            </div>
          </div>

          {/* Featured Article */}
          {activeTab === 'news' && newsArticles[0] && (
            <a 
              href={newsArticles[0].link}
              className="group block mb-12 p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-xl transition-all duration-300"
              data-testid="featured-article"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">Featured</span>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{newsArticles[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-emerald-600 font-medium">{newsArticles[0].source}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{newsArticles[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'news' ? newsArticles.slice(1) : pressReleases).map((article, index) => (
              <a 
                key={index}
                href={article.link}
                className="group flex flex-col p-6 rounded-2xl bg-[#F5F3EE] hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`article-${index}`}
              >
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                  {article.source}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-500">Read more</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        id="press"
        ref={el => observerRefs.current[2] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F5F3EE]"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Journey</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
              Milestones & Recognition
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500" />

            <div className="space-y-8">
              {[
                { year: '2023', title: 'Top 10 Most Admired Companies', desc: 'Featured in The Economic Times for business excellence' },
                { year: '2022', title: '12 Years Anniversary', desc: 'Celebrated with flagship event "Celebrating Entrepreneurship in Goa"' },
                { year: '2022', title: 'Board Expansion', desc: 'Anita Ganti joins as Board Director' },
                { year: '2021', title: '8th Office Opening', desc: 'Expanded to Pune on 11th Anniversary' },
                { year: '2020', title: 'TechPally Launch', desc: 'Branched into IT consultancy services' },
                { year: '2018', title: 'New Headquarters', desc: 'Moved to new corporate address in Panjim, Goa' },
                { year: '2010', title: 'MARC Founded', desc: 'Started journey of delivering excellence' }
              ].map((item, index) => (
                <div key={index} className="relative pl-20" style={{ transitionDelay: `${index * 100}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 -translate-x-1/2" />
                  
                  <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-sm font-bold text-emerald-600 mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Let us help you solve your toughest challenges
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            And realize your greatest ambitions.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            data-testid="cta-consultation-btn"
          >
            Schedule a Free Consulting
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
