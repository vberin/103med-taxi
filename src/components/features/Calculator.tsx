'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';

interface CalculatorProps {
  defaultDestination?: string;
}

export default function Calculator({ defaultDestination = '' }: CalculatorProps) {
  const [from, setFrom] = useState('Кривий Ріг');
  const [to, setTo] = useState(defaultDestination);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-cyan-100">
      <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">
        Розрахувати вартість поїздки
      </h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Звідки
          </label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-400 focus:outline-none"
            placeholder="Кривий Ріг"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Куди
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-400 focus:outline-none"
            placeholder="Введіть місто призначення"
          />
        </div>
      </div>

      <a
        href="tel:+380970000000"
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg rounded-xl shadow-lg hover:scale-105 transition"
      >
        <Phone className="w-6 h-6" />
        Викликати медтаксі
      </a>

      <p className="text-center text-sm text-slate-500 mt-4">
        Або зателефонуйте: <a href="tel:+380970000000" className="text-cyan-600 font-bold">+38 (097) 000-00-00</a>
      </p>
    </div>
  );
}
