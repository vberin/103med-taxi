import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_SEO_QUERIES } from '@/lib/data/all-seo-queries';
import { Phone, CheckCircle2, MapPin, Clock, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const params = [];
  
  for (const query of ALL_SEO_QUERIES) {
    params.push({ lang: 'uk', slug: query.slugUk });
    params.push({ lang: 'ru', slug: query.slugRu });
  }
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const query = ALL_SEO_QUERIES.find((q) =>
    params.lang === 'ru' ? q.slugRu === params.slug : q.slugUk === params.slug
  );

  if (!query) return {};

  const title = params.lang === 'ru' ? query.titleRu : query.titleUk;
  const description = params.lang === 'ru' ? query.descriptionRu : query.descriptionUk;

  return {
    title,
    description,
    keywords: query.keywords.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function QueryPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const query = ALL_SEO_QUERIES.find((q) =>
    params.lang === 'ru' ? q.slugRu === params.slug : q.slugUk === params.slug
  );

  if (!query) notFound();

  const t = params.lang === 'ru' ? {
    callNow: 'Вызвать медтакси',
    features: 'Что входит в услугу',
    howItWorks: 'Как это работает',
    price: 'Стоимость',
    contacts: 'Контакты',
    about: 'Подробнее о перевозке',
  } : {
    callNow: 'Викликати медтаксі',
    features: 'Що входить у послугу',
    howItWorks: 'Як це працює',
    price: 'Вартість',
    contacts: 'Контакти',
    about: 'Детальніше про перевезення',
  };

  const h1 = params.lang === 'ru' ? query.h1Ru : query.h1Uk;
  const description = params.lang === 'ru' ? query.descriptionRu : query.descriptionUk;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Category badge */}
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-bold text-sm mb-6">
              {query.category === 'general' && '🚑 Загальні послуги'}
              {query.category === 'patient' && '👥 Пацієнти'}
              {query.category === 'diagnosis' && '🏥 Діагнози'}
              {query.category === 'hospital' && '🏥 Лікарні'}
              {query.category === 'district' && '📍 Райони'}
              {query.category === 'price' && '💰 Ціни'}
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              {h1}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {description}
            </p>

            {/* Price */}
            {query.price && (
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 text-green-700 rounded-xl font-black text-xl mb-8">
                💰 {query.price}
              </div>
            )}

            {/* CTA */}
            <a
              href="tel:+380970000000"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6" />
              {t.callNow}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            {t.features}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: params.lang === 'ru' ? 'Подъем/спуск' : 'Підйом/спуск', desc: params.lang === 'ru' ? 'С любого этажа' : 'З будь-якого поверху' },
              { icon: Heart, title: params.lang === 'ru' ? 'Медсопровождение' : 'Медсупровід', desc: params.lang === 'ru' ? 'Опытная медсестра' : 'Досвідчена медсестра' },
              { icon: Clock, title: params.lang === 'ru' ? 'Быстрая подача' : 'Швидка подача', desc: '15-30 ' + (params.lang === 'ru' ? 'минут' : 'хвилин') },
              { icon: MapPin, title: params.lang === 'ru' ? 'Любые маршруты' : 'Будь-які маршрути', desc: params.lang === 'ru' ? 'Город и область' : 'Місто та область' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:shadow-xl transition">
                  <Icon className="w-12 h-12 text-cyan-500 mb-4" />
                  <h3 className="font-black text-lg text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content based on category */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {renderContent(query, params.lang)}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            {params.lang === 'ru' ? 'Нужна перевозка?' : 'Потрібне перевезення?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {params.lang === 'ru' 
              ? 'Звоните прямо сейчас — диспетчер рассчитает стоимость' 
              : 'Телефонуйте прямо зараз — диспетчер розрахує вартість'}
          </p>
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            <Phone className="w-6 h-6" />
            +38&nbsp;(097)&nbsp;000-00-00
          </a>
        </div>
      </section>
    </div>
  );
}

// Генерація контенту залежно від категорії
function renderContent(query: any, lang: string) {
  const isRu = lang === 'ru';
  
  // Базовий шаблон для всіх запитів
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-800 mb-4">
          {isRu ? 'Описание услуги' : 'Опис послуги'}
        </h2>
        <p className="text-slate-700 leading-relaxed">
          {isRu ? query.descriptionRu : query.descriptionUk}
        </p>
      </div>

      {/* Детали залежно від категорії */}
      {query.category === 'diagnosis' && (
        <div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">
            {isRu ? 'Особенности транспортировки' : 'Особливості транспортування'}
          </h3>
          <ul className="space-y-2">
            <li>✅ {isRu ? 'Жесткие носилки при необходимости' : 'Жорсткі носилки за потреби'}</li>
            <li>✅ {isRu ? 'Контроль показателей в дороге' : 'Контроль показників у дорозі'}</li>
            <li>✅ {isRu ? 'Кислород при необходимости' : 'Кисень за потреби'}</li>
          </ul>
        </div>
      )}

      {query.category === 'hospital' && (
        <div>
          <h3 className="text-2xl font-black text-slate-800 mb-4">
            {isRu ? 'Как заказать' : 'Як замовити'}
          </h3>
          <ol className="space-y-3 list-decimal list-inside">
            <li>{isRu ? 'Позвоните диспетчеру' : 'Зателефонуйте диспетчеру'}</li>
            <li>{isRu ? 'Назовите адрес и больницу' : 'Назвіть адресу та лікарню'}</li>
            <li>{isRu ? 'Получите расчет стоимости' : 'Отримайте розрахунок вартості'}</li>
            <li>{isRu ? 'Ожидайте бригаду 15-30 минут' : 'Очікуйте бригаду 15-30 хвилин'}</li>
          </ol>
        </div>
      )}

      {/* Для всіх - блок з телефоном */}
      <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200">
        <p className="text-2xl font-black text-slate-800 mb-4 text-center">
          📞 {isRu ? 'Телефон для заказа' : 'Телефон для замовлення'}
        </p>
        <p className="text-center">
          <a href="tel:+380970000000" className="text-4xl font-black text-cyan-600">
            +38 (097) 000-00-00
          </a>
        </p>
      </div>
    </div>
  );
}
