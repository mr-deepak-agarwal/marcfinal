'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const companyInfo = {
  phone: '+91 93596 28675',
  email: 'contact@marcglocal.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/marcglocal/',
    twitter: 'https://twitter.com/Marcglocal',
  },
}

const navLinks = [
  { label: 'About', href: '/about', isPage: true },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false)
    
    if (!link.isPage) {
      if (pathname !== '/') {
        window.location.href = '/' + link.href
      } else {
        const element = document.querySelector(link.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleContactClick = () => {
    setIsMobileMenuOpen(false)
    if (pathname !== '/') {
      window.location.href = '/#contact'
    } else {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-emerald-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <Phone size={14} />
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <Mail size={14} />
              {companyInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={companyInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={companyInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/marc_logo.png"
                alt="MARC Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium tracking-tight text-gray-800 rounded-lg transition-colors hover:text-emerald-600 hover:bg-emerald-50"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="px-4 py-2 text-sm font-medium tracking-tight text-gray-800 rounded-lg transition-colors hover:text-emerald-600 hover:bg-emerald-50"
                  >
                    {link.label}
                  </button>
                )
              ))}

              <Button
                onClick={handleContactClick}
                className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 font-medium tracking-tight shadow-sm"
              >
                Get in Touch
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-gray-800 font-medium tracking-tight hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-3 text-gray-800 font-medium tracking-tight hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}

            <Button
              onClick={handleContactClick}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium tracking-tight"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
