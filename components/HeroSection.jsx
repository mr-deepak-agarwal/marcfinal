'use client'

import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { Button } from './ui/button'

const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Financial chart data points for animations
  const lineChartPath = "M0 380 L80 350 L160 320 L240 280 L320 310 L400 250 L480 220 L560 180 L640 200 L720 150 L800 120 L880 140 L960 100 L1040 80 L1120 110 L1200 60 L1280 40 L1360 70 L1440 30"
  const lineChartPath2 = "M0 420 L80 400 L160 380 L240 350 L320 370 L400 320 L480 290 L560 260 L640 280 L720 230 L800 210 L880 230 L960 190 L1040 170 L1120 195 L1200 150 L1280 130 L1360 155 L1440 120"
  const lineChartPath3 = "M0 480 L80 460 L160 440 L240 420 L320 430 L400 390 L480 360 L560 340 L640 355 L720 310 L800 290 L880 305 L960 270 L1040 250 L1120 265 L1200 230 L1280 210 L1360 225 L1440 200"

  // Bar chart heights (representing financial metrics)
  const barHeights = [120, 180, 140, 220, 160, 240, 190, 280, 210, 300, 250, 320]
  
  // Candlestick data
  const candlesticks = [
    { x: 100, low: 400, high: 320, open: 380, close: 340 },
    { x: 180, low: 360, high: 280, open: 340, close: 300 },
    { x: 260, low: 340, high: 240, open: 310, close: 260 },
    { x: 340, low: 300, high: 200, open: 280, close: 220 },
    { x: 420, low: 260, high: 160, open: 240, close: 180 },
    { x: 500, low: 220, high: 120, open: 200, close: 140 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">

      {/* ===== FINANCIAL GRID BACKGROUND ===== */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Animated grid lines */}
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(52,211,153,0)" />
            <stop offset="100%" stopColor="rgba(52,211,153,0.3)" />
          </linearGradient>
          <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(52,211,153,0.1)" />
            <stop offset="100%" stopColor="rgba(52,211,153,0.4)" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines with fade animation */}
        {[150, 250, 350, 450, 550, 650, 750].map((y, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={y}
            x2="1440"
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            className="animate-grid-fade"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Vertical grid lines */}
        {[120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320].map((x, i) => (
          <line
            key={`v-${i}`}
            x1={x}
            y1="0"
            x2={x}
            y2="900"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
            className="animate-grid-fade"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      {/* ===== ANIMATED FINANCIAL CHARTS ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Area fill under main line chart */}
        <path
          d={`${lineChartPath} L1440 900 L0 900 Z`}
          fill="url(#chartGradient)"
          className="animate-area-reveal"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Primary trend line - main growth chart */}
        <path
          d={lineChartPath}
          fill="none"
          stroke="rgba(52,211,153,0.6)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-line"
        />

        {/* Secondary trend line */}
        <path
          d={lineChartPath2}
          fill="none"
          stroke="rgba(52,211,153,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-line-slow"
          style={{ animationDelay: '1s' }}
        />

        {/* Tertiary trend line */}
        <path
          d={lineChartPath3}
          fill="none"
          stroke="rgba(52,211,153,0.2)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-line-slow"
          style={{ animationDelay: '2s' }}
        />

        {/* Data points on main line */}
        {[80, 240, 400, 560, 720, 880, 1040, 1200, 1360].map((x, i) => {
          const yValues = [350, 280, 250, 180, 150, 140, 80, 60, 70]
          return (
            <circle
              key={`point-${i}`}
              cx={x}
              cy={yValues[i]}
              r="4"
              fill="rgba(52,211,153,0.8)"
              className="animate-float-point"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          )
        })}
      </svg>

      {/* ===== BAR CHART OVERLAY (Right Side) ===== */}
      <svg
        className="absolute right-0 bottom-0 w-1/2 h-2/3 opacity-40"
        viewBox="0 0 600 500"
        preserveAspectRatio="xMaxYMax meet"
      >
        {barHeights.map((height, i) => (
          <rect
            key={`bar-${i}`}
            x={30 + i * 45}
            y={500 - height}
            width="30"
            height={height}
            fill="url(#barGradient)"
            rx="3"
            className="animate-bar-wave"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              transformOrigin: `${45 + i * 45}px 500px`
            }}
          />
        ))}
        {/* Bar chart glow dots on top */}
        {barHeights.map((height, i) => (
          <circle
            key={`bar-dot-${i}`}
            cx={45 + i * 45}
            cy={500 - height - 5}
            r="3"
            fill="rgba(52,211,153,0.7)"
            className="animate-float-point"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>

      {/* ===== CANDLESTICK CHART (Left Side) ===== */}
      <svg
        className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-25"
        viewBox="0 0 600 500"
        preserveAspectRatio="xMinYMid meet"
      >
        {candlesticks.map((candle, i) => {
          const isGreen = candle.close < candle.open
          const bodyTop = Math.min(candle.open, candle.close)
          const bodyHeight = Math.abs(candle.open - candle.close)
          
          return (
            <g key={`candle-${i}`} className="animate-candle-pulse" style={{ animationDelay: `${i * 0.6}s` }}>
              {/* Wick */}
              <line
                x1={candle.x}
                y1={candle.high}
                x2={candle.x}
                y2={candle.low}
                stroke={isGreen ? 'rgba(52,211,153,0.6)' : 'rgba(248,113,113,0.4)'}
                strokeWidth="2"
              />
              {/* Body */}
              <rect
                x={candle.x - 12}
                y={bodyTop}
                width="24"
                height={bodyHeight || 4}
                fill={isGreen ? 'rgba(52,211,153,0.5)' : 'rgba(248,113,113,0.3)'}
                rx="2"
              />
            </g>
          )
        })}
      </svg>

      {/* ===== PIE CHART ACCENT (Top Right) ===== */}
      <svg
        className="absolute top-20 right-20 w-40 h-40 opacity-30"
        viewBox="0 0 100 100"
      >
        {/* Rotating outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(52,211,153,0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-pie-rotate"
        />
        
        {/* Pulsing pie segments */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="rgba(52,211,153,0.5)"
          strokeWidth="20"
          strokeDasharray="55 165"
          className="animate-pie-pulse"
          style={{ animationDelay: '0s' }}
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="rgba(52,211,153,0.35)"
          strokeWidth="20"
          strokeDasharray="70 150"
          strokeDashoffset="-55"
          className="animate-pie-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="rgba(52,211,153,0.2)"
          strokeWidth="20"
          strokeDasharray="95 125"
          strokeDashoffset="-125"
          className="animate-pie-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="rgba(52,211,153,0.3)"
          className="animate-float-point"
        />
      </svg>

      {/* ===== SECOND PIE CHART (Bottom Left) ===== */}
      <svg
        className="absolute bottom-32 left-16 w-28 h-28 opacity-25"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(52,211,153,0.4)"
          strokeWidth="15"
          strokeDasharray="80 170"
          className="animate-pie-pulse"
          style={{ animationDelay: '0.3s' }}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(52,211,153,0.25)"
          strokeWidth="15"
          strokeDasharray="100 150"
          strokeDashoffset="-80"
          className="animate-pie-pulse"
          style={{ animationDelay: '0.8s' }}
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="rgba(52,211,153,0.15)"
          strokeWidth="2"
          strokeDasharray="3 3"
          className="animate-pie-rotate"
          style={{ animationDirection: 'reverse' }}
        />
      </svg>

      {/* ===== FLOATING METRICS (Scattered) ===== */}
      <div className="absolute top-32 left-16 text-emerald-400/20 text-2xl font-mono animate-float-point" style={{ animationDelay: '0s' }}>
        +24.5%
      </div>
      <div className="absolute top-48 right-32 text-emerald-400/15 text-xl font-mono animate-float-point" style={{ animationDelay: '1s' }}>
        $12.4M
      </div>
      <div className="absolute bottom-40 left-24 text-emerald-400/20 text-lg font-mono animate-float-point" style={{ animationDelay: '2s' }}>
        ROI 340%
      </div>
      <div className="absolute top-1/3 right-16 text-emerald-400/15 text-xl font-mono animate-float-point" style={{ animationDelay: '1.5s' }}>
        ↑ 18.2%
      </div>

      {/* ===== DEPTH OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-transparent to-emerald-950/60" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-400/10 backdrop-blur-md border border-emerald-400/20 text-emerald-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          {companyInfo.tagline}
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-white/95 mb-6 leading-tight tracking-tight">
          Business Consulting Services
          <br />
          <span className="text-emerald-300">
            That Power Smarter Growth
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          {companyInfo.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection('#services')}
            size="lg"
            className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-900/20"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            onClick={() => scrollToSection('#about')}
            variant="outline"
            size="lg"
            className="border-2 border-emerald-400/30 text-white hover:bg-emerald-400/10 hover:border-emerald-400/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            Learn About Us
          </Button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 text-emerald-400/60 hover:text-emerald-300 animate-bounce-scroll transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
