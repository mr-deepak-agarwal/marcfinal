'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { DollarSign, Calculator, TrendingUp, Building2, BarChart3, Scale, PieChart, Target } from 'lucide-react'

const pageData = {
  tagline: 'Valuation Advisory',
  title: 'Accurate Valuations for',
  titleHighlight: 'Strategic Decisions',
  description: 'Independent valuation services that provide defensible, well-reasoned valuations for transactions, financial reporting, tax planning, and strategic decisions.',
  
  stats: [
    { value: '300+', label: 'Valuations Completed' },
    { value: '₹25,000Cr+', label: 'Assets Valued' },
    { value: '100%', label: 'Regulatory Acceptance' },
    { value: '15+', label: 'Years Experience' },
  ],
  
  valueProps: [
    { icon: Scale, title: 'Independence', desc: 'Objective, independent valuations free from conflicts of interest.' },
    { icon: Calculator, title: 'Rigor', desc: 'Robust methodology with well-documented assumptions and analysis.' },
    { icon: Target, title: 'Defensibility', desc: 'Valuations that withstand scrutiny from regulators and counterparties.' },
    { icon: TrendingUp, title: 'Insight', desc: 'Value drivers and strategic implications beyond just numbers.' },
  ],
  
  methodology: [
    { num: '01', title: 'Scope & Purpose', desc: 'Understand valuation purpose, standard of value, and reporting requirements.' },
    { num: '02', title: 'Information Gathering', desc: 'Collect financial data, management projections, and market information.' },
    { num: '03', title: 'Industry Analysis', desc: 'Analyze industry dynamics, competitive position, and growth outlook.' },
    { num: '04', title: 'Valuation Analysis', desc: 'Apply appropriate valuation methodologies and cross-check results.' },
    { num: '05', title: 'Sensitivity Analysis', desc: 'Test value sensitivity to key assumptions and scenarios.' },
    { num: '06', title: 'Valuation Report', desc: 'Deliver comprehensive valuation report with supporting analysis.' },
  ],
  methodologyDescription: 'We apply multiple valuation approaches and rigorous analysis to arrive at well-supported, defensible valuations.',
  
  services: [
    {
      title: 'Business Valuation',
      desc: 'Complete business valuation for transactions, disputes, or strategic planning.',
      features: ['DCF Analysis', 'Comparable Companies', 'Transaction Multiples'],
      icon: Building2,
    },
    {
      title: 'Intangible Asset Valuation',
      desc: 'Valuation of brands, technology, customer relationships, and other intangibles.',
      features: ['Brand Valuation', 'IP Valuation', 'PPA Support'],
      icon: PieChart,
    },
    {
      title: 'Fairness Opinion',
      desc: 'Independent fairness opinions for transactions to protect boards and shareholders.',
      features: ['Transaction Fairness', 'Board Support', 'Shareholder Protection'],
      icon: Scale,
    },
    {
      title: 'Tax Valuation',
      desc: 'Valuations for tax planning, transfer pricing, and regulatory compliance.',
      features: ['Transfer Pricing', 'Gift/Estate Tax', 'ESOP Valuation'],
      icon: DollarSign,
    },
  ],
  
  caseStudies: [
    {
      title: 'M&A Transaction Valuation',
      client: 'Private Equity Fund',
      desc: 'Independent valuation supporting ₹800Cr acquisition of manufacturing company.',
      tags: ['M&A', 'Private Equity'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Brand Valuation',
      client: 'Consumer Company',
      desc: 'Valued brand portfolio for strategic planning and licensing negotiations.',
      tags: ['Intangibles', 'Consumer'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
    {
      title: 'Fairness Opinion',
      client: 'Listed Company',
      desc: 'Provided fairness opinion for related-party transaction protecting minority shareholders.',
      tags: ['Fairness Opinion', 'Governance'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What valuation methodologies do you use?', a: 'We use DCF, comparable company analysis, precedent transactions, asset-based approaches, and other methods as appropriate for each engagement.' },
    { q: 'Are your valuations accepted by regulators?', a: 'Yes, our valuations meet regulatory requirements and have been accepted by tax authorities, SEBI, and other regulators.' },
    { q: 'How long does a valuation take?', a: 'Standard business valuations take 3-4 weeks. Complex valuations involving multiple entities or intangibles may take longer.' },
    { q: 'Do you provide valuation certificates?', a: 'Yes, we provide valuation certificates and reports as required for regulatory, tax, or transaction purposes.' },
  ],
  
  ctaTitle: 'Need a Valuation?',
  ctaDescription: 'Partner with MARC for independent, defensible valuations that support your strategic decisions.',
}

export default function ValuationPage() {
  return <ServicePageTemplate {...pageData} />
}
