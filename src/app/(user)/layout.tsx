import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../style/globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coding Crossroads',
  description: 'Coding Crossroads is a blog about web development and programming. I write about JavaScript, React, Next.js, Tailwind CSS, and Node.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
