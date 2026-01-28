'use client'

import React from 'react'
import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from 'lucide-react'

const companyInfo = {
  phone: '+91 93596 28675',
  email: 'contact@marcglocal.com',
  address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Panaji, Goa 403001',
  socialLinks: {
    facebook: 'https://www.facebook.com/MARCGlocal/',
    twitter: 'https://twitter.com/Marcglocal',
    instagram: 'https://www.instagram.com/marc_glocal/',
    linkedin: 'https://www.linkedin.com/company/marcglocal/',
    youtube: 'https://www.youtube.com/channel/UCMg4JaqL7zZ3pLfpfkhRnVQ',
  },
}

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
  { label: 'Careers', href: '/career' },
  { label: 'Media', href: '/media' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialIcons = [
    { icon: Facebook, href: companyInfo.socialLinks.facebook },
    { icon: Twitter, href: companyInfo.socialLinks.twitter },
    { icon: Instagram, href: companyInfo.socialLinks.instagram },
    { icon: Linkedin, href: companyInfo.socialLinks.linkedin },
    { icon: Youtube, href: companyInfo.socialLinks.youtube },
  ]

  return (
    <footer data-testid="footer" className="bg-[#1D342F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-[#5FBB46]">M</span>ARC
              </div>
            </Link>

            <p className="text-[#B4DAD3] mb-6 max-w-md leading-relaxed">
              MARC is committed to Delivering Excellence & Partnering Success by driving Economic Growth through actionable insights and strategic consulting.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${index}`}
                  className="w-10 h-10 rounded-lg bg-[#47635D] flex items-center justify-center text-[#B4DAD3] hover:bg-[#5FBB46] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 data-testid="footer-quick-links-title" className="text-lg font-semibold mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      href={link.href}
                      className="text-[#B4DAD3] hover:text-[#5FBB46] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : link.href.includes('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href.replace('/', ''))}
                      className="text-[#B4DAD3] hover:text-[#5FBB46] transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#B4DAD3] hover:text-[#5FBB46] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 data-testid="footer-resources-title" className="text-lg font-semibold mb-6 tracking-tight">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#B4DAD3] hover:text-[#5FBB46] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 tracking-tight">Contact Us</h4>
            <ul className="space-y-2 text-[#B4DAD3]">
              <li>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#5FBB46] transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#5FBB46] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#47635D]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5D9F94] text-sm">
            © {new Date().getFullYear()} Mangal Analytics and Research Consulting (MARC). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-[#5D9F94] hover:text-[#5FBB46] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#5D9F94] hover:text-[#5FBB46] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        data-testid="scroll-to-top-btn"
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#5FBB46] text-white rounded-full shadow-lg shadow-[#5FBB46]/30 flex items-center justify-center hover:bg-[#4E9141] transition-all duration-300 hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
