'use client'

import React from 'react'
import { Award, Zap, UserCheck, Briefcase } from 'lucide-react'
import { whyWorkWithUs } from '@/data/mock'

const icons = [Award, Zap, UserCheck, Briefcase]

const WhyUsSection = () => {
  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div 
              data-testid="why-us-badge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2DDB4] text-[#4E9141] text-sm font-semibold mb-6"
            >
              Our Values
            </div>

            {/* Section heading */}
            <h2 
              data-testid="why-us-heading"
              className="text-4xl lg:text-5xl font-bold text-[#212427] mb-6 leading-tight tracking-tight"
            >
              Why Work With Us
            </h2>

            <p className="text-lg text-[#47635D] mb-8 leading-relaxed">
              MARC has set foot into an ocean of requirements that potential
              customers seek to enhance in their business. We ensure our
              clients that the business consulting services we provide come
              with warm care and personalized understanding.
            </p>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?w=800&auto=format&fit=crop"
                alt="MARC Consultants Team collaborating on business strategy"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/40 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES GRID ================= */}
          <div className="grid gap-6">
            {whyWorkWithUs.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.id}
                  data-testid={`why-us-card-${index}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-[#C2DDB4]/30 hover:shadow-xl hover:border-[#4E9141]/40 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#C2DDB4] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4E9141] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#4E9141] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div>
                      {/* Feature title */}
                      <h3 className="text-xl font-semibold text-[#212427] mb-2 tracking-tight group-hover:text-[#4E9141] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-[#47635D] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
