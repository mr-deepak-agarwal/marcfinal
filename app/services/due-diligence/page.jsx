'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Search, FileCheck, Shield, Eye, BarChart3, Building2, Scale, AlertTriangle } from 'lucide-react'

const pageData = {
  tagline: 'Due Diligence',
  title: 'Comprehensive Due Diligence for',
  titleHighlight: 'Confident Transactions',
  description: 'Thorough due diligence services that uncover risks, validate assumptions, and provide clarity for M&A transactions, investments, and strategic decisions.',
  
  stats: [
    { value: '200+', label: 'Due Diligence Projects' },
    { value: '₹20,000Cr+', label: 'Transaction Value' },
    { value: '50+', label: 'PE/VC Clients' },
    { value: '15+', label: 'Years Experience' },
  ],
  
  valueProps: [
    { icon: Search, title: 'Deep Investigation', desc: 'Thorough examination of financial, operational, and commercial aspects.' },
    { icon: Shield, title: 'Risk Identification', desc: 'Uncover hidden risks and potential deal breakers early.' },
    { icon: Eye, title: 'Transparency', desc: 'Clear visibility into target company operations and performance.' },
    { icon: Scale, title: 'Deal Confidence', desc: 'Make informed decisions backed by comprehensive analysis.' },
  ],
  
  methodology: [
    { num: '01', title: 'Scope Definition', desc: 'Define due diligence scope, focus areas, and key questions to address.' },
    { num: '02', title: 'Data Collection', desc: 'Gather and organize documents, data, and information for analysis.' },
    { num: '03', title: 'Financial Analysis', desc: 'Deep-dive into financial statements, quality of earnings, and working capital.' },
    { num: '04', title: 'Commercial Review', desc: 'Assess market position, customer relationships, and commercial viability.' },
    { num: '05', title: 'Risk Assessment', desc: 'Identify and quantify risks including legal, regulatory, and operational.' },
    { num: '06', title: 'Reporting', desc: 'Deliver comprehensive due diligence report with findings and recommendations.' },
  ],
  methodologyDescription: 'Our team brings Big 4 experience and rigorous methodology to deliver due diligence that protects your interests.',
  
  services: [
    {
      title: 'Financial Due Diligence',
      desc: 'Comprehensive analysis of financial statements, accounting policies, and earnings quality.',
      features: ['Quality of Earnings', 'Working Capital', 'Debt Analysis'],
      icon: BarChart3,
    },
    {
      title: 'Commercial Due Diligence',
      desc: 'Assessment of market position, competitive dynamics, and growth potential.',
      features: ['Market Analysis', 'Customer Review', 'Growth Assessment'],
      icon: Building2,
    },
    {
      title: 'Operational Due Diligence',
      desc: 'Review of operations, processes, systems, and operational risks.',
      features: ['Process Review', 'IT Systems', 'Supply Chain'],
      icon: Search,
    },
    {
      title: 'Tax Due Diligence',
      desc: 'Analysis of tax positions, compliance, and potential tax exposures.',
      features: ['Tax Compliance', 'Contingent Liabilities', 'Structure Review'],
      icon: FileCheck,
    },
  ],
  
  caseStudies: [
    {
      title: 'PE Acquisition Due Diligence',
      client: 'Private Equity Fund',
      desc: 'Comprehensive financial and commercial due diligence for ₹500Cr manufacturing acquisition.',
      tags: ['Private Equity', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Strategic Acquisition Review',
      client: 'Industrial Conglomerate',
      desc: 'Due diligence support for strategic acquisition in adjacent business segment.',
      tags: ['Strategic M&A', 'Industrial'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Cross-border Transaction',
      client: 'International Investor',
      desc: 'Due diligence for international investor entering Indian market through acquisition.',
      tags: ['Cross-border', 'FDI'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is typically covered in due diligence?', a: 'Due diligence typically covers financial analysis, commercial assessment, operational review, tax review, legal matters, and HR/people aspects depending on deal requirements.' },
    { q: 'How long does due diligence take?', a: 'Timeline depends on deal complexity. Focused due diligence can take 3-4 weeks, while comprehensive reviews may require 6-8 weeks.' },
    { q: 'Do you work with legal counsel?', a: 'Yes, we coordinate closely with legal counsel and other advisors to ensure comprehensive coverage and avoid gaps.' },
    { q: 'Can you support post-deal activities?', a: 'Absolutely. We can support post-deal integration planning, 100-day plans, and synergy realization tracking.' },
  ],
  
  ctaTitle: 'Planning a Transaction?',
  ctaDescription: 'Partner with MARC for due diligence that protects your investment and enables confident deal-making.',
}

export default function DueDiligencePage() {
  return <ServicePageTemplate {...pageData} />
}
