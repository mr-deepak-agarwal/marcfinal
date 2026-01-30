# MARC Glocal Website - Product Requirements Document

## Original Problem Statement
Recreate and enhance the MARC Glocal consultancy website based on the user's GitHub repository (`https://github.com/mr-deepak-agarwal/marcfinal`) and live site (`https://marcfinal.vercel.app`). The goal is to modernize the design with a minimalist aesthetic inspired by Big 4 consultancy websites while maintaining brand consistency.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: React (Server and Client Components)
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Animations**: CSS Animations & Transitions
- **Database**: None (Static marketing site)

## Completed Features ✅

### Session 1 (Jan 30, 2025)
1. **New Insights Page** - Created modern `/insights` page with:
   - Animated card stack hero section
   - Symmetrical grid layout for reports
   - Statistics section (65+ reports, 50k+ downloads, etc.)
   - Featured reports section

2. **Homepage Redesign**
   - New consistent section divider component (`SectionDivider.jsx`)
   - Updated typography across all homepage sections
   - Removed inconsistent orange styling from contact icons
   - Standardized "Our Clients" section header

3. **Navigation & CTA Updates**
   - Header: "Contact" link styled as green button
   - Footer: Twitter icon → X (logo) icon
   - Added site-wide floating WhatsApp button

4. **About Page - Complete Redesign**
   - **Light green color scheme** (matching homepage) with dark green accents only
   - **Animated Team Carousel** in hero section (like insights page animation) - fixed broken image URLs
   - **"Trusted by 500+ Companies"** section with stats (500+ Clients, 30+ Countries, 98% Satisfaction)
   - **Client logos marquee** - Two rows scrolling in OPPOSITE directions (The Park, Kineco, Magsons, Taj, Isha Yoga, Marriott)
   - **Vision & Mission** cards
   - **Animated Journey Timeline** with scroll-triggered animations (2010-2024)
   - **Leadership Team** section - NOW with LIGHT GREEN background (was dark)
   - **Moving Locations Carousel** with 10 offices (Panaji, Delaware, Mumbai, Pune, Kolkata, Kochi, Indore, Ahmedabad, Mangaluru, Agartala)
   - **Global Affiliations** section (Mundi Consulting, Research 8020, Clearview Partners, Electronica Finance)
   - CTA section

5. **Code Cleanup**
   - Deleted old `/insights` folder
   - Renamed `/insights-v2` to `/insights`
   - Updated all internal links to point to `/insights`

## File Structure
```
/app
├── app/
│   ├── about/
│   │   ├── page.jsx
│   │   └── AboutPageClient.jsx
│   ├── insights/
│   │   └── page.jsx (new modern design)
│   ├── career/
│   ├── contact/
│   └── ...
├── components/
│   ├── Header.jsx (updated nav + Contact button)
│   ├── Footer.jsx (X icon)
│   ├── SectionDivider.jsx
│   ├── WhatsAppButton.jsx
│   └── ...
├── public/
└── tailwind.config.js
```

## Key Components Modified
- `/app/components/Header.jsx` - Navigation links, Contact button styling
- `/app/components/Footer.jsx` - X (Twitter) icon, link updates
- `/app/components/WhatsAppButton.jsx` - Floating CTA
- `/app/app/layout.jsx` - Global WhatsApp button inclusion
- `/app/app/about/AboutPageClient.jsx` - Updated links
- `/app/app/insights/page.jsx` - Complete redesign

## Backlog / Future Enhancements (P2)
- Add more animations/micro-interactions
- Implement dark mode toggle
- Add blog/article detail pages
- SEO optimization
- Performance optimization (image lazy loading, etc.)

## Notes
- All content is hardcoded (static marketing site)
- User focused on visual details - prepare for iterative UI feedback
- Ready for GitHub push → Vercel deployment
