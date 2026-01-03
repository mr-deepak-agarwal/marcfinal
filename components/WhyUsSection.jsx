import React from 'react'
import { Award, Zap, UserCheck, Briefcase } from 'lucide-react'
import { whyWorkWithUs } from '@/data/mock'

const icons = [Award, Zap, UserCheck, Briefcase]

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              Our Values
            </div>

            {/* Serif section heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
              Why Work With Us
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MARC has set foot into an ocean of requirements that potential
              customers seek to enhance in their business. We ensure our
              clients that the business consulting services we provide come
              with warm care and personalized understanding.
            </p>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?w=800&auto=format&fit=crop"
                alt="MARC Consultants Team"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES GRID ================= */}
          <div className="grid gap-6">
            {whyWorkWithUs.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div>
                      {/* Serif feature title */}
                      <h3 className="font-serif text-xl font-medium text-gray-900 mb-2 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
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
