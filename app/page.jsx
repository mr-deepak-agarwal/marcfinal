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
        <SectionDivider title="About Us" variant="side-accent" />
        <AboutSection />
        <SectionDivider title="Our Services" variant="side-accent" />
        <ServicesSection />
        <SectionDivider title="Industries" variant="side-accent" />
        <IndustriesSection />
        <SectionDivider title="Why Choose Us" variant="side-accent" />
        <WhyUsSection />
        <SectionDivider title="Testimonials" variant="side-accent" />
        <TestimonialsSection />
        <ClientsSection />
        <SectionDivider title="Insights" variant="side-accent" />
        <InsightsSection />
        <SectionDivider title="Careers" variant="side-accent" />
        <CareersSection />
        <SectionDivider title="Contact" variant="side-accent" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
