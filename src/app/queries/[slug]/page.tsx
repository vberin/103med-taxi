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
    params.push({ slug: query.slugUk });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const query = queriesData.queries.find((q) => q.slugUk === params.slug);

  if (!query) return {};

  return {
    title: query.titleUk,
    description: `${query.titleUk}. Професійне медичне таксі у Кривому Розі. ${query.price}. Виїзд за 15 хвилин. ☎️ +38 (097) 000-00-00`,
    keywords: [
      'медтаксі кривий ріг',
      'перевезення лежачих хворих',
      'медичне таксі',
      query.slugUk,
    ].join(', '),
    openGraph: {
      title: query.titleUk,
      description: `${query.titleUk}. ${query.price}`,
      type: 'website',
      locale: 'uk_UA',
      url: `https://103med.taxi/queries/${query.slugUk}`,
      siteName: '103med.taxi',
      images: [
        {
          url: 'https://103med.taxi/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '103med.taxi - Медичне таксі Кривий Ріг',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: query.titleUk,
      description: `${query.titleUk}. ${query.price}`,
    },
    alternates: {
      canonical: `https://103med.taxi/queries/${query.slugUk}`,
      languages: {
        'uk': `https://103med.taxi/queries/${query.slugUk}`,
        'ru': `https://103med.taxi/ru/queries/${queriesData.queries.find(q => q.id === query.id)?.slugRu}`,
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

export default function QueryPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = queriesData.queries.find((q) => q.slugUk === params.slug);

  if (!query) notFound();

  const faqs = [
    {
      q: 'Скільки коштує перевезення?',
      a: `Вартість: ${query.price}. Точну ціну назве диспетчер після уточнення маршруту.`,
    },
    {
      q: 'Як швидко приїдете?',
      a: 'По Кривому Рогу подаємо авто за 15-30 хвилин. На далекі маршрути узгоджуємо час заздалегідь.',
    },
    {
      q: 'Чи включено підйом/спуск?',
      a: 'Так, підйом та спуск з будь-якого поверху (навіть без ліфта) включено у вартість безкоштовно.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <LocalBusinessSchema lang="uk" />
      <MedicalServiceSchema query={query} lang="uk" />
      <BreadcrumbSchema
        items={[
          { name: 'Головна', url: 'https://103med.taxi' },
          { name: 'Послуги', url: 'https://103med.taxi/queries' },
          { name: query.titleUk, url: `https://103med.taxi/queries/${query.slugUk}` },
        ]}
      />
      <FAQSchema faqs={faqs} lang="uk" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Breadcrumbs */}
              <nav className="mb-6 text-sm text-slate-600">
                <a href="/" className="hover:text-cyan-600">Головна</a>
                <span className="mx-2">/</span>
                <a href="/queries" className="hover:text-cyan-600">Послуги</a>
                <span className="mx-2">/</span>
                <span className="font-bold text-slate-800">{query.titleUk}</span>
              </nav>

              {/* Category badge */}
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-bold text-sm mb-6">
                {query.category === 'general' && '🚑 Загальні послуги'}
                {query.category === 'patient' && '👥 Пацієнти'}
                {query.category === 'diagnosis' && '🏥 Діагнози'}
                {query.category === 'hospital' && '🏥 Лікарні'}
                {query.category === 'district' && '📍 Райони'}
                {query.category === 'price' && '💰 Ціни'}
                {query.category === 'service' && '⚙️ Послуги'}
                {query.category === 'specific' && '🎯 Особливе'}
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
                {query.titleUk}
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Професійне перевезення лежачих хворих у Кривому Розі. Медсупровід, носилки, кисень. Підйом/спуск включено. Працюємо 24/7.
              </p>

              {/* Price */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 text-green-700 rounded-xl font-black text-xl mb-8">
                💰 Вартість: {query.price}
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
                  href="/calculator"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-cyan-500 text-cyan-600 font-black text-xl rounded-2xl hover:bg-cyan-50 transition"
                >
                  Розрахувати вартість
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
              Що входить у послугу
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: CheckCircle2, 
                  title: 'Підйом/спуск', 
                  desc: 'З будь-якого поверху безкоштовно' 
                },
                { 
                  icon: Heart, 
                  title: 'Медсупровід', 
                  desc: 'Досвідчена медсестра або фельдшер' 
                },
                { 
                  icon: Clock, 
                  title: 'Швидка подача', 
                  desc: '15-30 хвилин по місту' 
                },
                { 
                  icon: MapPin, 
                  title: 'Будь-які маршрути', 
                  desc: 'Місто, область, вся Україна' 
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
              Часті питання
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
              Потрібне перевезення?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Телефонуйте прямо зараз — диспетчер розрахує вартість
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
