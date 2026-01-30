'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Handshake, Target, TrendingUp, Users, Search, FileText, Building2, Scale } from 'lucide-react'

const pageData = {
  tagline: 'Deal Advisory',
  title: 'End-to-End M&A Support for',
  titleHighlight: 'Successful Transactions',
  description: 'Comprehensive deal advisory services supporting buyers and sellers through every stage of M&A transactions from strategy through deal closure.',
  
  stats: [
    { value: '100+', label: 'Deals Advised' },
    { value: '₹15,000Cr+', label: 'Deal Value' },
    { value: '85%', label: 'Deal Success Rate' },
    { value: '50+', label: 'Cross-border Deals' },
  ],
  
  valueProps: [
    { icon: Handshake, title: 'Deal Expertise', desc: 'Experienced team with deep M&A expertise across sectors.' },
    { icon: Target, title: 'Strategic Fit', desc: 'Focus on deals that create genuine strategic value.' },
    { icon: TrendingUp, title: 'Value Maximization', desc: 'Structure and negotiate deals for optimal outcomes.' },
    { icon: Scale, title: 'Fair Process', desc: 'Transparent, professional process that builds trust.' },
  ],
  
  methodology: [
    { num: '01', title: 'Strategy Alignment', desc: 'Align M&A strategy with overall corporate objectives and growth plans.' },
    { num: '02', title: 'Target Identification', desc: 'Identify and screen potential targets or buyers based on strategic criteria.' },
    { num: '03', title: 'Approach & Engagement', desc: 'Manage outreach, initial discussions, and preliminary negotiations.' },
    { num: '04', title: 'Due Diligence', desc: 'Coordinate comprehensive due diligence workstreams.' },
    { num: '05', title: 'Deal Structuring', desc: 'Structure transaction for optimal value, risk allocation, and tax efficiency.' },
    { num: '06', title: 'Negotiation & Closure', desc: 'Lead negotiations through definitive agreements and deal closure.' },
  ],
  methodologyDescription: 'We provide hands-on deal support from origination to closure, ensuring smooth execution and value maximization.',
  
  services: [
    {
      title: 'Buy-side Advisory',
      desc: 'Support acquirers through target identification, due diligence, and deal execution.',
      features: ['Target Screening', 'Deal Structuring', 'Negotiation Support'],
      icon: Search,
    },
    {
      title: 'Sell-side Advisory',
      desc: 'Help sellers achieve optimal outcomes through structured sale processes.',
      features: ['Buyer Identification', 'Process Management', 'Value Maximization'],
      icon: Building2,
    },
    {
      title: 'Transaction Structuring',
      desc: 'Design optimal deal structures considering tax, legal, and commercial aspects.',
      features: ['Structure Optimization', 'Tax Planning', 'Risk Allocation'],
      icon: FileText,
    },
    {
      title: 'Integration Planning',
      desc: 'Plan post-merger integration to realize deal synergies and value.',
      features: ['Synergy Planning', '100-day Plan', 'PMI Support'],
      icon: Users,
    },
  ],
  
  caseStudies: [
    {
      title: 'Strategic Acquisition',
      client: 'Industrial Group',
      desc: 'Advised on ₹400Cr strategic acquisition expanding manufacturing capabilities.',
      tags: ['Buy-side', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Business Divestiture',
      client: 'Diversified Conglomerate',
      desc: 'Managed sale process for non-core business division to strategic buyer.',
      tags: ['Sell-side', 'Divestiture'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Cross-border M&A',
      client: 'International Corporation',
      desc: 'Supported cross-border acquisition of Indian company by international buyer.',
      tags: ['Cross-border', 'FDI'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'Do you work on both buy-side and sell-side?', a: 'Yes, we provide advisory services to both buyers and sellers, though never on the same transaction to avoid conflicts.' },
    { q: 'What size deals do you handle?', a: 'We work on deals ranging from ₹10Cr to ₹1,000Cr+, with particular strength in mid-market transactions.' },
    { q: 'Do you help find targets or buyers?', a: 'Yes, we support target identification for acquirers and buyer identification for sellers as part of our deal origination services.' },
    { q: 'What industries do you cover?', a: 'We have deal experience across manufacturing, consumer, healthcare, technology, infrastructure, and financial services sectors.' },
  ],
  
  ctaTitle: 'Planning a Transaction?',
  ctaDescription: 'Partner with MARC for expert deal advisory that maximizes value and ensures successful transaction execution.',
}

export default function DealAdvisoryPage() {
  return <ServicePageTemplate {...pageData} />
}
