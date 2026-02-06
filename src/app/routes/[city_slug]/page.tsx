import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES } from '@/lib/data/cities';
import Calculator from '@/components/features/Calculator';

interface Props {
  params: {
    city_slug: string;
  };
}

// 1. Генерируем статические пути для сборки
export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city_slug: city.slug,
  }));
}

// 2. Генерируем SEO (Title/Description)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city_slug);
  
  if (!city) {
    return { title: 'Маршрут не знайдено' };
  }

  return {
    title: `Перевезення хворих Кривий Ріг - ${city.name} | Ціна ${city.price} грн`,
    description: `Медичне таксі з Кривого Рогу в ${city.name}. ${city.description} Відстань ${city.distance} км.`
  };
}

// 3. Основной компонент страницы
export default function CityRoutePage({ params }: Props) {
  const city = CITIES.find((c) => c.slug === params.city_slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4">
            Міжміське перевезення
          </p>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
            Кривий Ріг — <span className="text-cyan-400">{city.name}</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Комфортне транспортування лежачих хворих &quot;від ліжка до ліжка&quot;. 
            Без передоплати. Медичний супровід.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="container mx-auto">
          {/* Передаем имя города в калькулятор */}
          <Calculator defaultDestination={city.name} />
        </div>
      </section>

      {/* Info Grid */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="text-4xl mb-2">🚗</div>
            <div className="text-slate-500 text-sm font-bold uppercase mb-1">Відстань</div>
            <div className="text-2xl font-black text-slate-800">~{city.distance} км</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="text-slate-500 text-sm font-bold uppercase mb-1">Час у дорозі</div>
            <div className="text-2xl font-black text-slate-800">
              ~{(city.distance / 70).toFixed(1)} год
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              Фіксована ціна
            </div>
            <div className="text-4xl mb-2">💰</div>
            <div className="text-slate-500 text-sm font-bold uppercase mb-1">Вартість</div>
            <div className="text-2xl font-black text-green-600">
              ~{city.price} грн
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Text */}
      <section className="container mx-auto px-4 max-w-3xl text-slate-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Як замовити перевезення в місто {city.name}?
        </h2>
        <p className="mb-4">
          Ми спеціалізуємося на дальніх перевезеннях. Наша бригада підготує пацієнта до дороги, 
          забезпечить безпечний спуск та підйом на поверх у місті {city.name}. 
          Ми використовуємо м&apos;які ноші та спеціалізоване обладнання.
        </p>
        <p>
          Всі автомобілі обладнані системою клімат-контролю та м&apos;якою підвіскою, що критично важливо 
          при поїздках на відстань понад {city.distance} км.
        </p>
      </section>
    </main>
  );
}