import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import queriesData from '@/lib/data/all-200-seo-queries.json';
import { Phone, CheckCircle2, MapPin, Clock, Heart } from 'lucide-react';
import { 
  LocalBusinessSchema, 
  MedicalServiceSchema, 
  BreadcrumbSchema,
  FAQSchema 
} from '@/components/seo/StructuredData';

export async function generateStaticParams() {
  const params: Array<{ slug: string }> = [];
  
  queriesData.queries.forEach((query) => {
    params.push({ slug: query.slugRu });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const query = queriesData.queries.find((q) => q.slugRu === params.slug);

  if (!query) return {};

  return {
    title: query.titleRu,
    description: `${query.titleRu}. Профессиональное медицинское такси в Кривом Роге. ${query.price}. Выезд за 15 минут. ☎️ +38 (097) 000-00-00`,
    keywords: [
      'медтакси кривой рог',
      'перевозка лежачих больных',
      'медицинское такси',
      query.slugRu,
    ].join(', '),
    openGraph: {
      title: query.titleRu,
      description: `${query.titleRu}. ${query.price}`,
      type: 'website',
      locale: 'ru_UA',
      url: `https://103med.taxi/ru/queries/${query.slugRu}`,
      siteName: '103med.taxi',
      images: [
        {
          url: 'https://103med.taxi/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '103med.taxi - Медицинское такси Кривой Рог',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: query.titleRu,
      description: `${query.titleRu}. ${query.price}`,
    },
    alternates: {
      canonical: `https://103med.taxi/ru/queries/${query.slugRu}`,
      languages: {
        'ru': `https://103med.taxi/ru/queries/${query.slugRu}`,
        'uk': `https://103med.taxi/queries/${queriesData.queries.find(q => q.id === query.id)?.slugUk}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function QueryPageRu({
  params,
}: {
  params: { slug: string };
}) {
  const query = queriesData.queries.find((q) => q.slugRu === params.slug);

  if (!query) notFound();

  const faqs = [
    {
      q: 'Сколько стоит перевозка?',
      a: `Стоимость: ${query.price}. Точную цену назовет диспетчер после уточнения маршрута.`,
    },
    {
      q: 'Как быстро приедете?',
      a: 'По Кривому Рогу подаем авто за 15-30 минут. На дальние маршруты согласовываем время заранее.',
    },
    {
      q: 'Включен ли подъем/спуск?',
      a: 'Да, подъем и спуск с любого этажа (даже без лифта) включен в стоимость бесплатно.',
    },
  ];

  return (
    <>
      {/* Structured Data НА РУССКОМ */}
      <LocalBusinessSchema lang="ru" />
      <MedicalServiceSchema query={query} lang="ru" />
      <BreadcrumbSchema
        items={[
          { name: 'Главная', url: 'https://103med.taxi/ru' },
          { name: 'Услуги', url: 'https://103med.taxi/ru/queries' },
          { name: query.titleRu, url: `https://103med.taxi/ru/queries/${query.slugRu}` },
        ]}
      />
      <FAQSchema faqs={faqs} lang="ru" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Breadcrumbs */}
              <nav className="mb-6 text-sm text-slate-600">
                <a href="/ru" className="hover:text-cyan-600">Главная</a>
                <span className="mx-2">/</span>
                <a href="/ru/queries" className="hover:text-cyan-600">Услуги</a>
                <span className="mx-2">/</span>
                <span className="font-bold text-slate-800">{query.titleRu}</span>
              </nav>

              {/* Category badge */}
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-bold text-sm mb-6">
                {query.category === 'general' && '🚑 Общие услуги'}
                {query.category === 'patient' && '👥 Пациенты'}
                {query.category === 'diagnosis' && '🏥 Диагнозы'}
                {query.category === 'hospital' && '🏥 Больницы'}
                {query.category === 'district' && '📍 Районы'}
                {query.category === 'price' && '💰 Цены'}
                {query.category === 'service' && '⚙️ Услуги'}
                {query.category === 'specific' && '🎯 Особенное'}
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
                {query.titleRu}
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Профессиональная перевозка лежачих больных в Кривом Роге. Медсопровождение, носилки, кислород. Подъем/спуск включен. Работаем 24/7.
              </p>

              {/* Price */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 text-green-700 rounded-xl font-black text-xl mb-8">
                💰 Стоимость: {query.price}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+380970000000"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
                >
                  <Phone className="w-6 h-6" />
                  <span className="whitespace-nowrap">+38&nbsp;(097)&nbsp;000-00-00</span>
                </a>
                <a
                  href="/ru/calculator"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-cyan-500 text-cyan-600 font-black text-xl rounded-2xl hover:bg-cyan-50 transition"
                >
                  Рассчитать стоимость
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
              Что входит в услугу
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: CheckCircle2, 
                  title: 'Подъем/спуск', 
                  desc: 'С любого этажа бесплатно' 
                },
                { 
                  icon: Heart, 
                  title: 'Медсопровождение', 
                  desc: 'Опытная медсестра или фельдшер' 
                },
                { 
                  icon: Clock, 
                  title: 'Быстрая подача', 
                  desc: '15-30 минут по городу' 
                },
                { 
                  icon: MapPin, 
                  title: 'Любые маршруты', 
                  desc: 'Город, область, вся Украина' 
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:shadow-xl transition"
                  >
                    <Icon className="w-12 h-12 text-cyan-500 mb-4" />
                    <h3 className="font-black text-lg text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
              Частые вопросы
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200"
                >
                  <h3 className="font-black text-xl text-slate-800 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Нужна перевозка?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Звоните прямо сейчас — диспетчер рассчитает стоимость
            </p>
            <a
              href="tel:+380970000000"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6" />
              <span className="whitespace-nowrap">+38&nbsp;(097)&nbsp;000-00-00</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
