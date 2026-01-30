'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { useLoading } from '@/components/loading-store'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Market Research', href: '/s1' },
      { label: 'Growth Strategy', href: '/s2' },
      { label: 'Mergers & Acquisitions', href: '/s1' },
      { label: 'Internationalization', href: '/s2' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/career' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const { setLoading } = useLoading()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    if (href.startsWith('/#')) return
    setLoading(true)
    setIsMobileMenuOpen(false)
  }

  // Handle hover indicator positioning
  const handleMouseEnter = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const navRect = navRef.current?.getBoundingClientRect()
    if (navRect) {
      setIndicatorStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1,
      })
    }
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    setHoveredIndex(null)
  }

  return (
    <>
      <header
        data-testid="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'py-2'
            : 'py-0'
        }`}
      >
        {/* Glassmorphism background layer */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled
              ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20'
              : 'bg-white backdrop-blur-none'
          }`}
        />
        
        {/* Animated accent line at bottom */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden transition-all duration-700 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-gradient-to-r from-transparent via-[#4E9141] to-transparent"
            style={{
              animation: isScrolled ? 'shimmerLine 3s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with glow effect on scroll */}
            <Link 
              href="/" 
              onClick={() => handleClick('/')} 
              data-testid="header-logo"
              className="relative group z-10"
            >
              <div className={`absolute -inset-4 rounded-2xl transition-all duration-500 ${
                isScrolled ? 'bg-[#4E9141]/5 blur-xl scale-100' : 'bg-transparent blur-none scale-0'
              }`} />
              <img 
                src="/marc_logo.png" 
                alt="MARC - Business Consulting Services" 
                className={`relative h-10 transition-all duration-500 ${
                  isScrolled ? 'drop-shadow-lg' : ''
                } group-hover:scale-105`}
              />
            </Link>

            {/* Desktop Navigation with floating indicator */}
            <nav 
              ref={navRef}
              className="hidden lg:flex items-center gap-1 relative"
              onMouseLeave={handleMouseLeave}
            >
              {/* Floating background indicator */}
              <div 
                className="absolute h-9 bg-[#4E9141]/10 rounded-full transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity,
                  transform: 'translateY(-50%)',
                  top: '50%',
                }}
              />

              {navLinks.map((link, index) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={(e) => {
                      handleMouseEnter(e, index)
                      setActiveDropdown(link.label)
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className={`relative px-4 py-2 flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                      </span>
                      <ChevronDown 
                        size={14} 
                        className={`transition-all duration-300 ${
                          activeDropdown === link.label ? 'rotate-180 text-[#4E9141]' : ''
                        }`}
                      />
                    </Link>

                    {/* Enhanced Dropdown Menu with glassmorphism */}
                    <div 
                      className={`absolute left-0 top-full pt-3 transition-all duration-400 ${
                        activeDropdown === link.label 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-3'
                      }`}
                    >
                      <div className="w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-[#4E9141]/10 overflow-hidden">
                        {/* Dropdown glow effect */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#4E9141] to-transparent rounded-full" />
                        
                        {link.children.map((child, idx) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => handleClick(child.href)}
                            className="group flex items-center justify-between px-5 py-4 text-sm text-[#1D342F] hover:bg-[#4E9141]/5 transition-all duration-300 relative overflow-hidden"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <span className="relative z-10 group-hover:text-[#4E9141] transition-colors">{child.label}</span>
                            <ArrowRight 
                              size={14} 
                              className="text-[#4E9141] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                            />
                            {/* Hover shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#4E9141]/10 to-transparent" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    onMouseEnter={(e) => handleMouseEnter(e, index)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                    </span>
                  </Link>
                )
              )}

              {/* Enhanced CTA Button */}
              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <button
                  data-testid="header-cta"
                  className={`relative ml-6 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-500 overflow-hidden group ${
                    isScrolled 
                      ? 'bg-[#4E9141] text-white shadow-lg shadow-[#4E9141]/30' 
                      : 'bg-[#4E9141] text-white'
                  }`}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4E9141] via-[#5fa84f] to-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ backgroundSize: '200% 100%', animation: 'gradientShift 2s linear infinite' }}
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Contact</span>
                </button>
              </Link>
            </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : ''}`} />
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  className="w-full flex justify-between items-center px-4 py-3 text-[#1D342F] font-medium hover:bg-[#F7FFF5] rounded-lg transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeDropdown === link.label ? 'rotate-180' : ''
                    }`}
                    size={16}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === link.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 py-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => handleClick(child.href)}
                        className="block px-4 py-2.5 text-sm text-[#47635D] hover:text-[#4E9141] hover:bg-[#F7FFF5] rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className="block px-4 py-3 text-[#1D342F] font-medium hover:bg-[#F7FFF5] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-3">
            <Link href="/contact" onClick={() => handleClick('/contact')}>
              <button className="w-full py-3 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
