'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLoading } from '@/components/loading-store'

const companyInfo = {
  phone: '+91 93596 28675',
  email: 'contact@marcglocal.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/marcglocal/',
    twitter: 'https://twitter.com/Marcglocal',
  },
}

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'S1', href: '/s1' },
      { label: 'S2', href: '/s2' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { setLoading } = useLoading()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    // Prevent loader for same-page hash scroll
    if (href.startsWith('/#')) return
    setLoading(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-emerald-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2">
              <Phone size={14} /> {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2">
              <Mail size={14} /> {companyInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
            <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noreferrer">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" onClick={() => handleClick('/')}>
              <img src="/marc_logo.png" alt="MARC Logo" className="h-10" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className="px-4 py-2 flex items-center gap-1 text-sm font-medium text-gray-800 rounded-lg hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {link.label}
                      <ChevronDown size={16} />
                    </Link>

                    <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => handleClick(child.href)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className="px-4 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <Button className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6">
                  Get in Touch
                </Button>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex justify-between items-center px-4 py-3 font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
                    >
                      {link.label}
                      <ChevronDown
                        className={`transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => handleClick(child.href)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-emerald-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className="block px-4 py-3 font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <Button className="w-full mt-4 bg-emerald-600 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
