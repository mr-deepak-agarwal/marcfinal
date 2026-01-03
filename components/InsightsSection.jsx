import React from 'react'
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { insights } from '@/data/mock'

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              Latest Insights
            </div>

            {/* Serif heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              Opinions, Analytics & Thoughts
            </h2>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Our team of professionals share insights from industry
              opinions, economic updates to strategic perspectives.
            </p>
          </div>

          <button className="hidden lg:inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors group mt-6 lg:mt-0">
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* ================= INSIGHTS GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              className={`group cursor-pointer ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div
                className={`relative rounded-3xl overflow-hidden ${
                  index === 0
                    ? 'h-full min-h-[500px]'
                    : 'h-[280px]'
                }`}
              >
                {/* Image */}
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

                {/* ================= CONTENT ================= */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-white/70 text-sm">
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </span>
                  </div>

                  {/* Serif insight title */}
                  <h3
                    className={`font-serif text-white mb-3 transition-colors group-hover:text-emerald-300 tracking-tight ${
                      index === 0
                        ? 'text-2xl lg:text-3xl font-medium'
                        : 'text-xl font-medium'
                    }`}
                  >
                    {insight.title}
                  </h3>

                  <div className="flex items-center gap-2 text-emerald-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-emerald-500">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= MOBILE CTA ================= */}
        <div className="lg:hidden mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors group">
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
