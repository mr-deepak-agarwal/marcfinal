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
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#5D9F94' }}
    >
      {/* ================= BACKGROUND PATTERN ================= */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div 
            data-testid="industries-badge"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold mb-6"
          >
            Industries We Serve
          </div>

          {/* Heading */}
          <h2 
            data-testid="industries-heading"
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Shaping Better Business Decisions
          </h2>

          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            MARC combines strategy management consulting and market research to
            help businesses act with clarity and confidence across diverse
            sectors.
          </p>
        </div>

        {/* ================= INDUSTRIES GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry] || Building2

            return (
              <button
                key={index}
                data-testid={`industry-card-${index}`}
                onClick={() => setActiveIndustry(index)}
                className={`group p-6 rounded-2xl transition-all duration-500 text-left ${
                  activeIndustry === index
                    ? 'bg-white text-[#1D342F] shadow-2xl shadow-black/20 scale-105'
                    : 'bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 border border-white/15'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-[#C2DDB4]'
                      : 'bg-white/15 group-hover:bg-white/25'
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 transition-colors ${
                      activeIndustry === index
                        ? 'text-[#4E9141]'
                        : 'text-[#C2DDB4]'
                    }`}
                  />
                </div>

                {/* Industry title */}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    activeIndustry === index
                      ? 'text-[#212427]'
                      : 'text-white'
                  }`}
                >
                  {industry}
                </h3>

                <div
                  className={`flex items-center gap-1 text-sm font-medium transition-opacity ${
                    activeIndustry === index
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span
                    className={
                      activeIndustry === index
                        ? 'text-[#4E9141]'
                        : 'text-[#C2DDB4]'
                    }
                  >
                    Learn more
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      activeIndustry === index
                        ? 'text-[#4E9141]'
                        : 'text-[#C2DDB4]'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* ================= DECORATIVE ELEMENTS ================= */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#4E9141]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#C2DDB4]/15 rounded-full blur-3xl" />
      </div>
    </section>
  )
}

export default IndustriesSection
