'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { BarChart3, Database, LineChart, PieChart, Monitor, Layers, Settings, RefreshCw } from 'lucide-react'

const pageData = {
  tagline: 'Management Information Systems',
  title: 'Data-Driven Decisions with',
  titleHighlight: 'Robust MIS',
  description: 'Design and implement management information systems that provide timely, accurate, and actionable insights for informed business decision-making.',
  
  stats: [
    { value: '75+', label: 'MIS Implementations' },
    { value: '60%', label: 'Decision Speed Improvement' },
    { value: '100+', label: 'Dashboards Created' },
    { value: '99%', label: 'Data Accuracy' },
  ],
  
  valueProps: [
    { icon: BarChart3, title: 'Real-time Visibility', desc: 'Get instant access to key business metrics and performance indicators.' },
    { icon: Database, title: 'Data Integration', desc: 'Consolidate data from multiple sources into unified reporting framework.' },
    { icon: LineChart, title: 'Trend Analysis', desc: 'Track trends and patterns to anticipate issues and opportunities.' },
    { icon: Monitor, title: 'Executive Dashboards', desc: 'Intuitive dashboards for quick insights at every management level.' },
  ],
  
  methodology: [
    { num: '01', title: 'Requirements Analysis', desc: 'Understand business needs, decision-making processes, and reporting requirements.' },
    { num: '02', title: 'Data Assessment', desc: 'Evaluate data sources, quality, and integration requirements for MIS.' },
    { num: '03', title: 'KPI Definition', desc: 'Define key performance indicators and metrics aligned with business objectives.' },
    { num: '04', title: 'System Design', desc: 'Design MIS architecture, reporting framework, and dashboard specifications.' },
    { num: '05', title: 'Implementation', desc: 'Build and deploy MIS with data pipelines, reports, and dashboards.' },
    { num: '06', title: 'Training & Support', desc: 'Train users and provide ongoing support for system adoption and optimization.' },
  ],
  methodologyDescription: 'We design MIS solutions that balance comprehensiveness with usability, ensuring adoption across all levels of the organization.',
  
  services: [
    {
      title: 'MIS Design & Architecture',
      desc: 'Design comprehensive MIS framework including data flows, reporting hierarchy, and system architecture.',
      features: ['Framework Design', 'Data Architecture', 'Integration Planning'],
      icon: Layers,
    },
    {
      title: 'KPI & Metrics Framework',
      desc: 'Define and implement KPIs and metrics aligned with strategic objectives.',
      features: ['KPI Definition', 'Benchmarking', 'Target Setting'],
      icon: LineChart,
    },
    {
      title: 'Dashboard Development',
      desc: 'Create intuitive dashboards for executives, managers, and operational teams.',
      features: ['Executive Dashboards', 'Operational Reports', 'Self-service BI'],
      icon: Monitor,
    },
    {
      title: 'Process Automation',
      desc: 'Automate data collection, processing, and reporting for efficiency and accuracy.',
      features: ['Data Automation', 'Report Scheduling', 'Alert Systems'],
      icon: RefreshCw,
    },
  ],
  
  caseStudies: [
    {
      title: 'Enterprise MIS Implementation',
      client: 'Manufacturing Group',
      desc: 'Implemented comprehensive MIS covering sales, production, finance, and HR functions.',
      tags: ['Manufacturing', 'Enterprise MIS'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Real-time Sales Dashboard',
      client: 'Retail Chain',
      desc: 'Built real-time sales tracking system with store-level and regional dashboards.',
      tags: ['Retail', 'Dashboards'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
    {
      title: 'Financial Reporting System',
      client: 'Financial Services',
      desc: 'Designed automated financial reporting system with regulatory compliance features.',
      tags: ['Finance', 'Reporting'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What tools do you use for MIS implementation?', a: 'We work with various tools including Excel-based solutions, Power BI, Tableau, and custom systems depending on client needs and existing infrastructure.' },
    { q: 'How long does MIS implementation take?', a: 'A focused MIS module can be implemented in 4-8 weeks, while enterprise-wide MIS may take 3-6 months.' },
    { q: 'Can MIS integrate with our existing ERP?', a: 'Yes, we design MIS to integrate with existing systems including ERPs, CRMs, and other data sources.' },
    { q: 'Do you provide training for the team?', a: 'Yes, comprehensive training is included to ensure effective adoption and use of the MIS.' },
  ],
  
  ctaTitle: 'Ready for Data-Driven Management?',
  ctaDescription: 'Partner with MARC to build MIS that transforms data into actionable insights for better decisions.',
}

export default function MISPage() {
  return <ServicePageTemplate {...pageData} />
}
