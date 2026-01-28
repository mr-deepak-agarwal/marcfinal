'use client'

import React from 'react'

const SectionDivider = ({ title, variant = 'default' }) => {
  if (variant === 'subtle') {
    return (
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    )
  }

  if (variant === 'line') {
    return (
      <div className="w-full py-6 flex items-center justify-center">
        <div className="w-24 h-1 bg-amber-500 rounded-full" />
      </div>
    )
  }

  return (
    <div 
      data-testid={`section-divider-${title?.toLowerCase().replace(/\s+/g, '-') || 'default'}`}
      className="w-full py-4 flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(90deg, #FF9933, #FFB366, #FF9933)' 
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
