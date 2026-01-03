'use client'

import React from 'react'
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Globe,
} from 'lucide-react'
import { aboutSection, stats } from '@/data/mock'
import { Button } from './ui/button'

const AboutSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= STATS BAR ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg hover:border-emerald-200 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Premium numeric tone */}
              <div className="font-serif text-4xl lg:text-5xl font-medium text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>

              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutSection.image}
                alt="MARC Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>

            {/* Floating Mission Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <div className="font-serif text-base font-medium text-gray-800 tracking-tight">
                    Our Mission
                  </div>
                  <div className="text-sm text-gray-600">
                    Enabling better decisions
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200/50 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-emerald-300/30 rounded-full blur-2xl" />
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              {aboutSection.subtitle}
            </div>

            {/* Editorial serif heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
              {aboutSection.title}
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutSection.description}
            </p>

            {/* Strategic emphasis line */}
            <p className="font-serif text-emerald-700 font-normal mb-8 text-lg tracking-tight">
              {aboutSection.commitment}
            </p>

            {/* ================= FEATURE ICONS ================= */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: 'Strategic Growth' },
                { icon: Users, label: 'Expert Team' },
                { icon: Globe, label: 'Global Reach' },
                { icon: Target, label: 'Precise Insights' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:-translate-y-0.5 group"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
