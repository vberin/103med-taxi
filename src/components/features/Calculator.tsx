'use client';

import { useState, useEffect } from 'react';
import { Phone, MapPin, Navigation, CheckCircle2 } from 'lucide-react';

interface CalculatorProps {
  defaultDestination?: string;
  defaultDistance?: number;
}

export default function Calculator({ defaultDestination, defaultDistance }: CalculatorProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    phone: '',
    distance: 0,
  });

  useEffect(() => {
    if (defaultDestination && !formData.to) {
      setFormData(prev => ({ ...prev, to: defaultDestination }));
    }
    if (defaultDistance && !formData.distance) {
        setFormData(prev => ({ ...prev, distance: defaultDistance }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultDestination, defaultDistance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Имитация отправки
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 max-w-4xl mx-auto my-8 text-center min-h-[400px] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-black text-slate-800 mb-2">Заявку прийнято!</h3>
        <p className="text-slate-600 text-lg mb-6 max-w-md">
          Диспетчер вже розраховує найвигідніший маршрут. Ми зателефонуємо вам протягом 3 хвилин.
        </p>
        <a 
          href="tel:+380970000000"
          className="inline-block px-8 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/30"
        >
          Зателефонувати диспетчеру
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10 max-w-4xl mx-auto my-8 relative z-10 transition-all hover:shadow-cyan-500/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
          Розрахунок вартості <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">перевезення</span>
        </h2>
        <p className="text-slate-500 font-medium">Введіть маршрут, і ми миттєво запропонуємо ціну</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Звідки</label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              required
              type="text" 
              placeholder="Адреса або лікарня"
              value={formData.from}
              onChange={(e) => setFormData({...formData, from: e.target.value})}
              className="w-full pl-12 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all font-medium text-lg text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="space-y-2 relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Куди</label>
          <div className="relative group">
            <Navigation className="absolute left-4 top-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              required
              type="text" 
              placeholder="Місто або вулиця"
              value={formData.to}
              onChange={(e) => setFormData({...formData, to: e.target.value})}
              className="w-full pl-12 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all font-medium text-lg text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-2 relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Ваш телефон</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-4 text-slate-400 group-focus-within:text-green-500 transition-colors" />
            <input 
              required
              type="tel" 
              placeholder="+38 (0XX) XXX-XX-XX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full pl-12 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all font-bold text-xl text-slate-800 placeholder:text-slate-300"
            />
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <button 
            disabled={loading}
            type="submit"
            className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? 'Відправка...' : 'ОТРИМАТИ ВАРТІСТЬ ПОЇЗДКИ'}
          </button>
        </div>
      </form>
    </div>
  );
}