import './globals.css'

export const metadata = {
  title: 'MARC Glocal - Business Consulting & Strategy',
  description: 'MARC is a global strategy consultancy working with business leaders to seize competitive advantage and amplify growth through actionable, objective insights.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
