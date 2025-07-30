import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Vivek Kakade | Portfolio',
  description: 'Computer Engineering Student with expertise in software development, AI/ML, and web technologies. Passionate about emerging technologies and dedicated to achieving excellence.',
  keywords: ['Vivek Kakade', 'Computer Engineering', 'Software Development', 'AI/ML', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Vivek Kakade' }],
  creator: 'Vivek Kakade',
  publisher: 'Vivek Kakade',
  robots: 'index, follow',
  openGraph: {
    title: 'Vivek Kakade | Portfolio',
    description: 'Computer Engineering Student with expertise in software development, AI/ML, and web technologies.',
    url: 'https://vivek-kakade-portfolio.vercel.app',
    siteName: 'Vivek Kakade Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vivek Kakade Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Kakade | Portfolio',
    description: 'Computer Engineering Student with expertise in software development, AI/ML, and web technologies.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00aaff',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00aaff" />
      </head>
      <body className="font-poppins bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
} 