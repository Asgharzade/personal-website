import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amin Asgharzadeh | Data Scientist | GenAI Engineer',
  description: 'Welcome to my personal website. I am a passionate data scientist and genai engineer creating innovative solutions with cutting-edge technologies.',
  keywords: ['data scientist', 'genai engineer', 'programming', 'portfolio', 'technology', 'innovation'],
  authors: [{ name: 'Amin Asgharzadeh' }],
  openGraph: {
    title: 'Amin Asgharzadeh | Data Scientist | GenAI Engineer',
    description: 'Welcome to my personal website. I am a passionate data scientist and GenAI engineer creating innovative solutions with cutting-edge technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 