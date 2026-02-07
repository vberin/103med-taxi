import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES } from '@/lib/data/cities';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Calculator from '@/components/features/Calculator';
import { Phone, CheckCircle2, Clock, Shield, MapPin } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    city_slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city_slug);
  
  if (!city) {
    return { title: 'Маршрут не знайдено' };
  }

  return {
    title: `Медне таксі Кривий Ріг - ${city.nameUk} | Перевезення хворих`,
    description: `Перевезення лежачих хворих з Кривого Рогу в ${city.nameUk}. Комфортні авто, досвідчені санітари, доступні ціни від ${city.priceFrom} грн.`,
  };
}

export function generateStaticParams() {
  return CITIES.map((city) => ({
    city_slug: city.slug,
  }));
}

export default function RoutePage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city_slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 p-2 rounded-full px-4 mb-6 border border-blue-700">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-100">Міжміське перевезення</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Кривий Ріг <span className="text-cyan-400">↔</span> {city.nameUk}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Безпечне перевезення лежачих хворих на спеціалізованих авто. 
            Від ліжка до ліжка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-3xl font-bold text-white bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm">
              <span className="text-sm block text-blue-200 font-normal mb-1">Вартість</span>
              від {city.priceFrom} грн
            </div>
            <div className="text-3xl font-bold text-white bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm">
              <span className="text-sm block text-blue-200 font-normal mb-1">Відстань</span>
              ~{city.distance} км
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-10 -mt-10 relative z-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Безпека 100%</h3>
              <p className="text-slate-600">
                Спеціалізовані ноші, вакуумні матраци та кріплення для інвалідних візків.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Подача 24/7</h3>
              <p className="text-slate-600">
                Працюємо цілодобово. Подача машини в Кривому Розі від 30 хвилин.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Від ліжка до ліжка</h3>
              <p className="text-slate-600">
                Наші санітари самостійно спустять та піднімуть пацієнта на будь-який поверх.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Потрібно перевезти хворого в {city.nameUk}?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Зателефонуйте нам зараз, щоб розрахувати точну вартість та забронювати машину.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+380971031030"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition flex items-center justify-center gap-3 shadow-lg shadow-red-600/30"
              >
                <Phone className="w-5 h-5" />
                +38 (097) 103-103-0
              </a>
              <Link 
                href="/"
                className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition"
              >
                На головну
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}