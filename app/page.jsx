import HeroSection from '@/components/HeroSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import IndustriesSection from '@/components/IndustriesSection'
import WhyUsSection from '@/components/WhyUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ClientsSection from '@/components/ClientsSection'
import InsightsSection from '@/components/InsightsSection'
import CareersSection from '@/components/CareersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MARC Glocal - Business Consulting Services & Market Research India',
  description: 'MARC is a leading business consulting and market research firm in India offering strategy consulting, M&A advisory, due diligence, and internationalization services.',
  keywords: ['business consulting India', 'market research', 'strategy consulting', 'M&A advisory', 'due diligence', 'MARC Glocal'],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <SectionDivider title="About Us" />
        <AboutSection />
        <SectionDivider title="Our Services" />
        <ServicesSection />
        <SectionDivider title="Industries" />
        <IndustriesSection />
        <SectionDivider title="Why Choose Us" />
        <WhyUsSection />
        <SectionDivider title="Testimonials" />
        <TestimonialsSection />
        <ClientsSection />
        <SectionDivider title="Insights" />
        <InsightsSection />
        <SectionDivider title="Careers" />
        <CareersSection />
        <SectionDivider title="Contact" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
