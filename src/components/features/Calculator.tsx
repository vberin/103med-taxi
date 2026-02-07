'use client';

import { useState } from 'react';
import { CITIES } from '@/lib/data/cities';
import { Calculator as CalcIcon, Phone, CheckCircle2 } from 'lucide-react';

// ✅ Добавляем описание свойств, которые может принимать компонент
interface CalculatorProps {
  defaultDestination?: string; // Теперь компонент знает, что такое defaultDestination
}

export default function Calculator({ defaultDestination }: CalculatorProps) {
  const [distance, setDistance] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [price, setPrice] = useState<number | null>(null);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    setSelectedCity(slug);
    
    if (slug) {
      const city = CITIES.find(c => c.slug === slug);
      if (city) {
        setDistance(city.distance.toString());
        setPrice(city.priceFrom);
      }
    } else {
      setDistance('');
      setPrice(null);
    }
  };

  const handleCalculate = () => {
    if (!distance) return;
    const dist = parseFloat(distance);
    // Базовая формула: подача 500 + 25 грн/км
    const calculated = 500 + (dist * 25); 
    setPrice(Math.round(calculated / 100) * 100); // Округление до сотен
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <CalcIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Розрахунок вартості</h2>
          <p className="text-slate-500 text-sm">Дізнайтеся орієнтовну ціну поїздки</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Оберіть місто призначення (з Кривого Рогу)
            </label>
            <select 
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Інше місто / Введіть відстань вручну</option>
              {CITIES.map((city) => (
                <option key={city.slug} value={city.slug}>
                  {city.nameUk} ({city.distance} км)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Відстань (км)
            </label>
            <input 
              type="number" 
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
                setSelectedCity(''); // Сброс города, если меняем вручную
              }}
              placeholder="Наприклад: 350"
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button 
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 active:scale-95 transform duration-100"
          >
            Розрахувати вартість
          </button>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-slate-200">
          {price ? (
            <>
              <p className="text-slate-500 font-medium mb-2">Орієнтовна вартість:</p>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                {price} <span className="text-2xl text-slate-500 font-bold">грн</span>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <a 
                  href="tel:+380971031030"
                  className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  <Phone className="w-5 h-5" />
                  Замовити
                </a>
                <p className="text-xs text-slate-400 mt-2">
                  * Кінцева вартість може залежати від ваги пацієнта та поверху підйому.
                </p>
              </div>
            </>
          ) : (
            <div className="text-slate-400">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Введіть відстань або оберіть місто, щоб побачити ціну</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}