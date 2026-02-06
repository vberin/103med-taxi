import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DISTRICTS } from '@/lib/data/districts';
import Calculator from '@/components/features/Calculator';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

interface Props {
  params: {
    district_slug: string;
  };
}

// 1. Генерируем пути для всех районов
export async function generateStaticParams() {
  return DISTRICTS.map((district) => ({
    district_slug: district.slug,
  }));
}

// 2. SEO Метаданные
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const district = DISTRICTS.find((d) => d.slug === params.district_slug);
  
  if (!district) return { title: 'Район не знайдено' };

  return {
    title: `Перевезення хворих - ${district.name} | 103med.taxi`,
    description: `${district.description} Подача спецтранспорту від 20 хвилин.`,
  };
}

// 3. Компонент страницы
export default function DistrictPage({ params }: Props) {
  const district = DISTRICTS.find((d) => d.slug === params.district_slug);

  if (!district) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero блок */}
      <section className="bg-slate-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4">
            Кривий Ріг
          </p>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {district.name}
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Спеціалізоване перевезення лежачих хворих та інвалідів-візочників у цьому районі.
          </p>
        </div>
      </section>

      {/* Калькулятор */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="container mx-auto">
          {/* Автоматически подставляем район в калькулятор */}
          <Calculator defaultDestination={`Кривий Ріг, ${district.name}`} />
        </div>
      </section>

      {/* Преимущества района */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <Clock className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Швидка подача</h3>
            <p className="text-slate-500">
              В районі &quot;{district.name}&quot; чергує наша бригада. Подача авто можлива протягом 20-30 хвилин.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <MapPin className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Знання маршрутів</h3>
            <p className="text-slate-500">
              Водії відмінно знають під&apos;їзди до лікарень та особливості дворів у цьому районі.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Від {district.price_start} грн</h3>
            <p className="text-slate-500">
              Доступні тарифи на перевезення по району. Підйом на поверх (при наявності ліфта) безкоштовний.
            </p>
          </div>
        </div>
      </section>

      {/* Текст для SEO */}
      <section className="container mx-auto px-4 max-w-3xl text-slate-600 leading-relaxed pb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Послуги медтаксі: {district.name}
        </h2>
        <p className="mb-4">
          Ми виконуємо планові перевезення пацієнтів &quot;від ліжка до ліжка&quot;. 
          Якщо вам потрібно доставити хворого на обстеження (МРТ, КТ, рентген) або перевезти додому після виписки, 
          наша бригада готова допомогти.
        </p>
        <p>
          Автомобілі оснащені м&apos;якими ношами, кріслом для перенесення та місцями для супроводжуючих.
        </p>
      </section>
    </main>
  );
}