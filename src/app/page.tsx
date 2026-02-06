'use client'

import Link from 'next/link'
import { DISTRICTS } from '@/lib/data/kryvyi-rih'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Diagnoses from '@/components/home/Diagnoses'
import Services from '@/components/home/Services'
import Equipment from '@/components/home/Equipment'
import Process from '@/components/home/Process'
import Blog from '@/components/home/Blog'
import Reviews from '@/components/home/Reviews'
import FAQ from '@/components/home/FAQ'
import Routes from '@/components/home/Routes'
import Calculator from '@/components/features/Calculator'
import SeoText from '@/components/home/SeoText'
import { motion } from 'framer-motion'

function DistrictsGrid() {
  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-white to-slate-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ми працюємо у всіх районах</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISTRICTS.map((district) => (
            <Link
              key={district.slug}
              href={`/locations/${district.slug}`}
              className="block p-8 bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <h3 className="text-xl font-semibold mb-2">{district.name}</h3>
              <p className="text-slate-600">подача від 20 хв</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <motion.section
        className="py-32 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Features />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Diagnoses />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Services />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Equipment />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Process />
      </motion.div>
      <DistrictsGrid />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Blog />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Reviews />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FAQ />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Routes />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SeoText />
      </motion.div>
    </main>
  )
}