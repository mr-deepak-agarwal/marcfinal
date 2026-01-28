'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Heart, 
  Shield, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Clock, 
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
  CheckCircle,
  Send,
  FileText,
  UserCheck,
  MessageSquare,
  Handshake,
  Coffee,
  BookOpen,
  Plane,
  HeartPulse,
  Wallet,
  Baby,
  Dumbbell,
  Quote
} from 'lucide-react'

// Employee Testimonials Data (Placeholders)
const employeeTestimonials = [
  {
    id: 1,
    name: "Your Name Here",
    role: "Senior Analyst",
    department: "Market Research",
    years: "3 years at MARC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. What do they love about working at MARC? What projects have they worked on? How have they grown?",
    highlight: "Promoted twice in 3 years"
  },
  {
    id: 2,
    name: "Your Name Here",
    role: "Project Manager",
    department: "Strategy Consulting",
    years: "5 years at MARC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. Share their journey, the challenges they've overcome, and why they chose to stay at MARC.",
    highlight: "Led 20+ client engagements"
  },
  {
    id: 3,
    name: "Your Name Here",
    role: "Business Analyst",
    department: "M&A Advisory",
    years: "2 years at MARC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. Include specifics about the work culture, mentorship, or career development opportunities.",
    highlight: "Worked on ₹200Cr+ deals"
  },
  {
    id: 4,
    name: "Your Name Here",
    role: "Research Lead",
    department: "Consumer & Retail",
    years: "4 years at MARC",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    quote: "Add your employee testimonial here. What makes MARC different from other firms? What advice would they give to candidates?",
    highlight: "Built the retail practice"
  }
]

// Application Process Steps
const applicationSteps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your resume and cover letter through our careers portal. We review every application.",
    duration: "Day 1",
    icon: Send
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Our HR team reviews your profile and reaches out for a brief phone conversation.",
    duration: "Days 3-5",
    icon: FileText
  },
  {
    step: 3,
    title: "Case Interview",
    description: "Demonstrate your problem-solving skills through a real-world business case study.",
    duration: "Week 2",
    icon: MessageSquare
  },
  {
    step: 4,
    title: "Panel Interview",
    description: "Meet with senior team members to discuss your experience and cultural fit.",
    duration: "Week 2-3",
    icon: UserCheck
  },
  {
    step: 5,
    title: "Final Decision",
    description: "Receive your offer letter with complete compensation and benefits details.",
    duration: "Week 3-4",
    icon: Handshake
  }
]

// Benefits Data
const benefits = [
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual allowance for courses, certifications & conferences" },
  { icon: Wallet, title: "Performance Bonus", description: "Competitive bonuses tied to individual and team performance" },
  { icon: Plane, title: "Travel Opportunities", description: "Work with clients across India and international exposure" },
  { icon: Baby, title: "Parental Leave", description: "Generous maternity and paternity leave policies" },
  { icon: Coffee, title: "Flexible Work", description: "Hybrid work model with work-from-home flexibility" },
  { icon: BookOpen, title: "Mentorship Program", description: "1-on-1 mentoring from senior consultants and partners" },
  { icon: Dumbbell, title: "Wellness Programs", description: "Gym memberships, mental health support & wellness days" },
]

// Job Openings Data (Expanded)
const jobOpenings = [
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    type: "Full-time",
    location: "Goa, India",
    department: "Sales",
    experience: "2-4 years",
    salary: "Competitive + Incentives",
    posted: "2 days ago",
    urgent: true
  },
  {
    id: "senior-research-analyst",
    title: "Senior Research Analyst",
    type: "Full-time",
    location: "Mumbai, India",
    department: "Market Research",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    posted: "1 week ago",
    urgent: false
  },
  {
    id: "project-manager",
    title: "Project Manager",
    type: "Full-time",
    location: "Goa, India",
    department: "Operations",
    experience: "5-8 years",
    salary: "₹12-18 LPA",
    posted: "3 days ago",
    urgent: true
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    type: "Full-time",
    location: "Pune, India",
    department: "M&A Advisory",
    experience: "2-4 years",
    salary: "₹6-10 LPA",
    posted: "5 days ago",
    urgent: false
  },
  {
    id: "associate-consultant",
    title: "Associate Consultant",
    type: "Full-time",
    location: "Multiple Locations",
    department: "Strategy",
    experience: "0-2 years",
    salary: "₹5-8 LPA",
    posted: "1 week ago",
    urgent: false
  }
]

// Culture Values
const cultureValues = [
  {
    icon: Sparkles,
    title: 'Adaptability',
    description: 'Innovation thinking, self-learning, and always having a positive attitude.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Knowledge sharing, frequent client interaction, and working as one team.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Everyone can achieve their potential with the right backing and support.',
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Being proactive, honest, committed, and communicative at all times.',
  }
]

export default function CareersPage() {
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
    <div className="min-h-screen bg-[#F7FFF5]" data-testid="careers-page">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-[#4E9141]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C2DDB4]/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Build Your Career
              <span className="block mt-2 text-[#C2DDB4]">With MARC</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
              At MARC, you'll help a hospitality client expand across South India, 
              conduct due diligence for ₹500Cr acquisitions, and build market entry 
              strategies for emerging brands — from day one.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#openings" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                data-testid="view-openings-btn"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                How to Apply
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="absolute bottom-10 right-10 hidden lg:flex gap-6">
            {[
              { num: '500+', label: 'Projects' },
              { num: '14+', label: 'Years' },
              { num: '8', label: 'Offices' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EMPLOYEE TESTIMONIALS ==================== */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#B45309]" />
              <span className="text-[#B45309] font-semibold text-sm uppercase tracking-[0.2em]">Our People</span>
              <span className="w-8 h-[2px] bg-[#B45309]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight">
              Hear From Our Team
            </h2>
            <p className="mt-4 text-lg text-[#47635D] max-w-2xl mx-auto">
              Real stories from real people who've built their careers at MARC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {employeeTestimonials.map((employee, index) => (
              <div 
                key={employee.id}
                className="group relative bg-[#F7FFF5] rounded-3xl p-8 border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-500"
                data-testid={`employee-testimonial-${index}`}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#4E9141]/20" />
                
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={employee.image} 
                    alt={`${employee.name} - ${employee.role} at MARC`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#4E9141]/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#1D342F]">{employee.name}</h3>
                    <p className="text-[#4E9141] font-medium">{employee.role}</p>
                    <p className="text-sm text-[#47635D]">{employee.department} • {employee.years}</p>
                  </div>
                </div>

                <p className="text-[#47635D] leading-relaxed mb-4 italic">
                  "{employee.quote}"
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4E9141]/10 rounded-full">
                  <Award className="w-4 h-4 text-[#4E9141]" />
                  <span className="text-sm font-medium text-[#4E9141]">{employee.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPLICATION PROCESS ==================== */}
      <section 
        id="process"
        ref={el => observerRefs.current[1] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#1D342F]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#B45309]" />
              <span className="text-[#B45309] font-semibold text-sm uppercase tracking-[0.2em]">How To Apply</span>
              <span className="w-8 h-[2px] bg-[#B45309]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Journey Starts Here
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Our hiring process typically takes 3-4 weeks. Here's what to expect.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#4E9141]/30 -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative text-center"
                  data-testid={`application-step-${index}`}
                >
                  {/* Step Circle */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-[#4E9141] flex items-center justify-center shadow-lg shadow-[#4E9141]/30">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-6 h-6 rounded-full bg-[#B45309] text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm mb-3 leading-relaxed">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-[#C2DDB4]">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Box */}
          <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Tips for Success</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">Research MARC's recent projects and industry focus areas before your interview.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">Prepare for case studies using structured frameworks (MECE, Porter's Five Forces).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">Be ready to discuss specific examples of problem-solving from your experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section 
        ref={el => observerRefs.current[2] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#B45309]" />
                <span className="text-[#B45309] font-semibold text-sm uppercase tracking-[0.2em]">Benefits & Perks</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight mb-6">
                We Take Care of Our People
              </h2>
              <p className="text-lg text-[#47635D] leading-relaxed mb-8">
                Beyond competitive salaries, we invest in your growth, health, and happiness. 
                Because when you thrive, we all thrive.
              </p>
              
              <a 
                href="#openings"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4E9141] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1D342F] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[#47635D]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CULTURE VALUES ==================== */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F0F8F6]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#B45309]" />
              <span className="text-[#B45309] font-semibold text-sm uppercase tracking-[0.2em]">Our Culture</span>
              <span className="w-8 h-[2px] bg-[#B45309]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D342F]">
              Built on <span className="text-[#4E9141]">4 Pillars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{value.title}</h3>
                <p className="text-[#47635D] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== JOB OPENINGS ==================== */}
      <section 
        id="openings"
        ref={el => observerRefs.current[4] = el}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
      >
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#B45309]" />
              <span className="text-[#B45309] font-semibold text-sm uppercase tracking-[0.2em]">Open Positions</span>
              <span className="w-8 h-[2px] bg-[#B45309]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D342F]">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-[#47635D]">
              Find your perfect role and take the next step in your career.
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Link 
                key={job.id}
                href={`/career/${job.id}`}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#F7FFF5] hover:bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
                data-testid={`job-card-${index}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        Urgent
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-[#4E9141]/10 text-[#4E9141] text-xs font-semibold">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#47635D]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wallet className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#4E9141] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="hidden sm:inline">View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Don't see a fit */}
          <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-[#4E9141] to-[#3d7334] text-white">
            <h3 className="text-2xl font-bold mb-2">Don't see a role that fits?</h3>
            <p className="text-white/80 mb-6">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              data-testid="send-resume-cta"
            >
              <Send className="w-5 h-5" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#4E9141]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join MARC and be part of a team that's shaping business decisions 
            across India. Your next career milestone starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#4E9141] font-bold text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-testid="final-cta-explore"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="mailto:careers@marcglocal.com" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
