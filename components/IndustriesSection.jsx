'use client'

import React, { useState } from 'react'
import {
  Building2,
  ShoppingBag,
  Car,
  HeartPulse,
  ShoppingCart,
  Building,
  Cpu,
  Factory,
  ArrowRight,
} from 'lucide-react'
import { industries } from '@/data/mock'

const industryIcons = {
  Hospitality: Building2,
  Consumer: ShoppingBag,
  'Automobile & Mobility': Car,
  Healthcare: HeartPulse,
  'E-Commerce & Retail': ShoppingCart,
  'Construction & Infrastructure': Building,
  Technology: Cpu,
  Manufacturing: Factory,
}

const IndustriesSection = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="py-24 relative overflow-hidden bg-[#4E9141]"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C2DDB4]/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>

          <h2 
            data-testid="industries-heading"
            className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Shaping Better Business Decisions
          </h2>

          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            MARC combines strategy management consulting and market research to
            help businesses act with clarity and confidence across diverse
            sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry] || Building2
            const isHovered = hoveredIndustry === index

            return (
              <button
                key={index}
                data-testid={`industry-card-${index}`}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className={`group p-6 rounded-2xl transition-all duration-300 text-left ${
                  isHovered
                    ? 'bg-white shadow-2xl shadow-black/20 scale-105'
                    : 'bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#4E9141]'
                      : 'bg-white/20'
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 transition-colors ${
                      isHovered
                        ? 'text-white'
                        : 'text-white'
                    }`}
                  />
                </div>

                {/* Industry title */}
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    isHovered
                      ? 'text-[#1D342F]'
                      : 'text-white'
                  }`}
                >
                  {industry}
                </h3>

                <div
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                    isHovered
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span
                    className={
                      isHovered
                        ? 'text-[#4E9141]'
                        : 'text-white/80'
                    }
                  >
                    Learn more
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isHovered
                        ? 'text-[#4E9141]'
                        : 'text-white/80'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
