import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import RouteLoader from '@/components/RouteLoader'
import Header from '@/components/Header'
import { LoadingProvider } from '@/components/loading-store'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://marcglocal.com'),
  title: {
    default: 'MARC Glocal - Business Consulting & Strategy',
    template: '%s | MARC Glocal'
  },
  description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
  keywords: ['business consulting', 'strategy', 'M&A', 'financial advisory', 'due diligence'],
  authors: [{ name: 'MARC Glocal' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marcglocal.com',
    title: 'MARC Glocal - Business Consulting',
    description: 'Leading strategy consultancy helping organizations achieve competitive advantage.',
    siteName: 'MARC Glocal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARC Glocal',
    description: 'Business Consulting & Strategy',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
    <body className="antialiased">
      <LoadingProvider>
          <RouteLoader />
          <Header />
          {children}
        </LoadingProvider>
    </body>
    </html>
    )
}