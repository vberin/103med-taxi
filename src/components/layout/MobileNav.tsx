'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  name: string
  href: string
}

interface MobileNavProps {
  navLinks: NavLink[]
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-3xl"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-white md:hidden"
            style={{ paddingTop: 'env(safe-area-inset-top)' }}
          >
            <div className="flex flex-col h-full">
              {/* Top Bar */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-slate-900"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col gap-6 text-2xl font-black text-slate-900 mt-12 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact Block */}
              <div className="mt-auto p-6 space-y-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary text-white text-xl font-bold py-4 px-6 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Замовити
                </button>
                <a
                  href="tel:+380975539030"
                  className="block w-full bg-secondary text-white text-xl font-bold py-4 px-6 rounded-full text-center hover:bg-secondary/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Зателефонувати
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}