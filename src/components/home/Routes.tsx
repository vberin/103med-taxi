'use client';

import Link from 'next/link';
import { CITIES } from '@/lib/data/cities';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Routes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            Маршрути
          </h2>
          <p className="text-xl text-slate-600">
            Возимо пацієнтів до всіх міст України
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/routes/${city.slug}`}
              className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 text-center"
            >
              <MapPin className="w-8 h-8 text-cyan-500 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition">
                {city.nameUk}
              </h3>
              <p className="text-sm text-slate-500 mb-2">{city.distance} км</p>
              <p className="text-green-600 font-black">від {city.priceFrom} грн</p>
              <ArrowRight className="w-5 h-5 text-cyan-500 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
