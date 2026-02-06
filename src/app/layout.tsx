import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StickyFooter from '../components/layout/StickyFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '103med.taxi - Медичний транспорт Кривий Ріг',
  description: 'Швидкий та надійний медичний транспорт у Кривому Розі',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <StickyFooter />
      </body>
    </html>
  )
}