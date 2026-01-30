'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, CheckSquare, Settings, Users, Shield, Workflow, BookOpen, RefreshCw } from 'lucide-react'

const pageData = {
  tagline: 'Standard Operating Procedures',
  title: 'Build Operational Excellence with',
  titleHighlight: 'Documented Processes',
  description: 'Comprehensive SOP development services to standardize operations, ensure consistency, improve efficiency, and build scalable business processes.',
  
  stats: [
    { value: '150+', label: 'SOP Projects' },
    { value: '40%', label: 'Efficiency Gains' },
    { value: '1000+', label: 'Processes Documented' },
    { value: '99%', label: 'Compliance Rate' },
  ],
  
  valueProps: [
    { icon: CheckSquare, title: 'Consistency', desc: 'Ensure consistent quality and outcomes across all operations and locations.' },
    { icon: Shield, title: 'Compliance', desc: 'Meet regulatory requirements and industry standards with documented procedures.' },
    { icon: Settings, title: 'Efficiency', desc: 'Streamline operations and reduce errors through standardized workflows.' },
    { icon: Users, title: 'Training', desc: 'Accelerate employee onboarding and training with clear process documentation.' },
  ],
  
  methodology: [
    { num: '01', title: 'Process Discovery', desc: 'Map existing processes through interviews, observations, and documentation review.' },
    { num: '02', title: 'Gap Analysis', desc: 'Identify gaps between current practices and best practices or compliance requirements.' },
    { num: '03', title: 'Process Design', desc: 'Design optimized processes with clear roles, responsibilities, and decision points.' },
    { num: '04', title: 'Documentation', desc: 'Create comprehensive SOPs with step-by-step procedures, checklists, and flowcharts.' },
    { num: '05', title: 'Review & Validation', desc: 'Validate SOPs with stakeholders and incorporate feedback for practical applicability.' },
    { num: '06', title: 'Implementation Support', desc: 'Support rollout with training materials, change management, and compliance monitoring.' },
  ],
  methodologyDescription: 'We combine process excellence expertise with industry best practices to create SOPs that are practical, comprehensive, and easy to follow.',
  
  services: [
    {
      title: 'Operations SOPs',
      desc: 'Document core operational processes including production, service delivery, and quality control.',
      features: ['Process Mapping', 'Quality Standards', 'Checklists'],
      icon: Settings,
    },
    {
      title: 'Finance & Accounting SOPs',
      desc: 'Standardize financial processes including accounts payable, receivable, and reporting.',
      features: ['Financial Controls', 'Reporting Procedures', 'Audit Trail'],
      icon: FileText,
    },
    {
      title: 'HR & Admin SOPs',
      desc: 'Document HR processes from recruitment to exit including policies and procedures.',
      features: ['Recruitment', 'Performance Management', 'Exit Process'],
      icon: Users,
    },
    {
      title: 'Compliance SOPs',
      desc: 'Develop SOPs to meet regulatory requirements and industry compliance standards.',
      features: ['Regulatory Compliance', 'Audit Readiness', 'Risk Management'],
      icon: Shield,
    },
  ],
  
  caseStudies: [
    {
      title: 'Manufacturing SOP Development',
      client: 'Auto Components Manufacturer',
      desc: 'Created comprehensive SOPs for production processes resulting in 30% quality improvement.',
      tags: ['Manufacturing', 'Quality'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Hotel Operations Manual',
      client: 'Hospitality Chain',
      desc: 'Developed complete operations manual covering all hotel functions and guest services.',
      tags: ['Hospitality', 'Operations'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=800',
    },
    {
      title: 'Compliance Documentation',
      client: 'Healthcare Provider',
      desc: 'Built regulatory-compliant SOPs for clinical and administrative processes.',
      tags: ['Healthcare', 'Compliance'],
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What industries benefit most from SOP development?', a: 'All industries benefit from SOPs. We have extensive experience in manufacturing, hospitality, healthcare, retail, financial services, and professional services.' },
    { q: 'How long does SOP development typically take?', a: 'Timeline depends on scope. A focused function may take 4-6 weeks, while enterprise-wide SOPs can take 3-6 months.' },
    { q: 'Do you provide training on new SOPs?', a: 'Yes, we offer training programs and materials to help teams understand and implement new procedures effectively.' },
    { q: 'How do you ensure SOPs are practical and usable?', a: 'We involve end-users throughout the development process and validate all SOPs through pilot testing before final rollout.' },
  ],
  
  ctaTitle: 'Ready to Standardize Your Operations?',
  ctaDescription: 'Build operational excellence with comprehensive SOPs. Partner with MARC for practical process documentation.',
}

export default function SOPPage() {
  return <ServicePageTemplate {...pageData} />
}
