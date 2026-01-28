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
        <SectionDivider title="About Us" variant="line-text" />
        <AboutSection />
        <SectionDivider title="Our Services" variant="line-text" />
        <ServicesSection />
        <SectionDivider title="Industries" variant="line-text" />
        <IndustriesSection />
        <SectionDivider title="Why Choose Us" variant="line-text" />
        <WhyUsSection />
        <SectionDivider title="Testimonials" variant="line-text" />
        <TestimonialsSection />
        <ClientsSection />
        <SectionDivider title="Insights" variant="line-text" />
        <InsightsSection />
        <SectionDivider title="Careers" variant="line-text" />
        <CareersSection />
        <SectionDivider title="Contact" variant="line-text" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
