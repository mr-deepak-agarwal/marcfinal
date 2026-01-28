'use client'

import React from 'react'

const SectionDivider = ({ title, variant = 'default' }) => {
  // Option B: Subtle line with side text
  if (variant === 'line-text') {
    return (
      <div className="w-full py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <span className="text-[#1D342F] font-bold text-xl lg:text-2xl tracking-wide uppercase whitespace-nowrap">
            {title}
          </span>
          <div className="flex-1 h-[3px] bg-gradient-to-r from-[#4E9141] via-[#92400E] to-transparent rounded-full" />
        </div>
      </div>
    )
  }

  // Option D: Large watermark text (rendered inside section, not as divider)
  if (variant === 'watermark') {
    return (
      <div className="w-full py-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <span 
            className="text-[80px] lg:text-[120px] font-bold text-[#4E9141]/[0.07] uppercase tracking-wider leading-none select-none"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </span>
        </div>
      </div>
    )
  }

  // Option E: Vertical side accent
  if (variant === 'side-accent') {
    return (
      <div className="w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="w-1 h-8 bg-gradient-to-b from-[#4E9141] to-[#92400E] rounded-full" />
          <span className="text-[#1D342F] font-semibold text-sm tracking-[0.15em] uppercase">
            {title}
          </span>
        </div>
      </div>
    )
  }

  // Default: Original strip style
  return (
    <div 
      data-testid={`section-divider-${title?.toLowerCase().replace(/\s+/g, '-') || 'default'}`}
      className="w-full py-4 flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(90deg, #92400E, #B45309, #92400E)' 
      }}
    >
      {title && (
        <span className="text-white font-semibold text-sm sm:text-base tracking-[0.2em] uppercase px-6">
          {title}
        </span>
      )}
    </div>
  )
}

export default SectionDivider
