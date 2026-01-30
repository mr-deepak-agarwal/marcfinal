# MARC Glocal Website - Project Documentation

## Original Problem Statement
- Clone and continue development of MARC Glocal website (Next.js) from GitHub repo
- Add animated carousel to Media page hero section (like About page)
- Enhance Milestones & Recognition section with connected path animation
- Enhance navbar with glassmorphism + blur transition effects
- Modify Career page to match About/Industries design language

## Tech Stack
- **Framework**: Next.js 15.1.6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations, IntersectionObserver

## What's Been Implemented

### Jan 30, 2026
1. **Media Page Hero Carousel**
   - Added animated image carousel with 4 media-related images
   - Auto-rotation every 3 seconds
   - 3D stacked cards effect with perspective
   - Dot indicators for navigation

2. **Enhanced Navbar (Glassmorphism)**
   - Floating pill-shaped hover indicator
   - Glassmorphism blur effect on scroll
   - Logo zoom effect when scrolled
   - Animated shimmer accent line at bottom
   - Enhanced dropdown menus with glassmorphism

3. **Milestones Animation (Connected Path)**
   - Animated gradient path line
   - Pulsing dots with ping animation
   - Staggered reveal on scroll
   - Clean timeline layout

4. **Career Page Redesign**
   - Matched About/Industries design language
   - Consistent typography and color palette
   - Stats grid in hero section
   - Timeline-style application process
   - 4 pillars culture section
   - Job openings with department tags

## Backups
- `/app/backups/media_page_backup.jsx` - Original media page
- `/app/backups/Header_backup.jsx` - Original header

## Color Palette
- Primary Green: #4E9141
- Light Green: #C2DDB4
- Background Green: #F7FFF5
- Dark Text: #1D342F
- Body Text: #47635D

## Key Files Modified
- `/app/app/media/page.jsx`
- `/app/components/Header.jsx`
- `/app/app/career/page.jsx`

## Next Action Items
- Add more employee testimonials (currently placeholder text)
- Integrate job application form functionality
- Add page transition animations

## Future/Backlog
- P1: Job detail pages for each opening
- P1: Contact form integration
- P2: Blog/Insights page enhancements
- P2: Mobile menu improvements
