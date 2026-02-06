import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <>
      <div className="w-full">
        <Image
          src="https://placehold.co/600x400/e2e8f0/1e293b?text=Ambulance"
          alt="Високотехнологічний інтер'єр швидкої допомоги з сучасним обладнанням"
          width={1920}
          height={593}
          className="w-full h-auto object-contain"
        />
      </div>
      <section className="pt-32 pb-20 bg-gradient-radial from-[#f0fdff] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,102,102,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text tracking-tight max-w-[90%] mx-auto">
            Професійне перевезення лежачих хворих у Кривому Розі
          </h1>
          <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto max-w-[90%]">
            Надійний транспорт для пацієнтів з обмеженою рухливістю. Працюємо цілодобово.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/calculator">
                <button className="btn btn-primary h-14 px-8 rounded-full font-bold text-lg">Розрахувати вартість</button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="tel:+380975539030">
                <button className="btn btn-secondary h-14 px-8 rounded-full font-bold text-lg">Зателефонувати</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}