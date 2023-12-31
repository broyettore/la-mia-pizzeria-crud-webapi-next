import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heaven\'s Slice',
  description: 'heaven\' slice pizzeria website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className={inter.className}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
