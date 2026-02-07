import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DISTRICTS } from '@/lib/data/districts';
import { Phone, MapPin, CheckCircle2, Building2, Navigation } from 'lucide-react';
import Calculator from '@/components/features/Calculator';

export async function generateStaticParams() {
  return DISTRICTS.map((district) => ({
    district_slug: district.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { district_slug: string };
}): Promise<Metadata> {
  const district = DISTRICTS.find((d) => d.slug === params.district_slug);
  if (!district) return {};

  const title = `${district.nameUk} | Медичне таксі Кривий Ріг - Перевезення лежачих хворих`;
  const description = district.descriptionUk;

  return {
    title,
    description,
    keywords: district.seoKeywordsUk.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'uk_UA',
    },
    alternates: {
      canonical: `https://103med.taxi/locations/${district.slug}`,
    },
  };
}

export default function DistrictPage({
  params,
}: {
  params: { district_slug: string };
}) {
  const district = DISTRICTS.find((d) => d.slug === params.district_slug);
  if (!district) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-cyan-100 rounded-full text-cyan-700 font-bold text-sm mb-4">
              Кривий Ріг
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                {district.nameUk}
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {district.descriptionUk}
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-black text-green-600">
              Від {district.priceFrom} грн
            </div>
          </div>

          <Calculator defaultDestination={district.nameUk} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            Чому обирають нас у {district.nameUk}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {district.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-100 hover:shadow-lg transition"
              >
                <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            Лікарні та поліклініки {district.nameUk}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {district.hospitals.map((hospital, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition"
              >
                <Building2 className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {hospital.name}
                </h3>
                <p className="text-slate-600 flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  {hospital.address}
                </p>
                {hospital.phone && (
                  <a
                    href={`tel:${hospital.phone}`}
                    className="text-cyan-600 hover:underline font-medium flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {hospital.phone}
                  </a>
                )}
                <button className="mt-4 w-full py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition">
                  Виклик таксі з цього закладу
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streets & Landmarks */}
      <section className="py-16 px-4 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Streets */}
            <div>
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Navigation className="text-cyan-500" />
                Вулиці району
              </h2>
              <ul className="space-y-3">
                {district.streets.map((street, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 font-medium flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    {street}
                  </li>
                ))}
              </ul>
            </div>

            {/* Landmarks */}
            <div>
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <MapPin className="text-green-500" />
                Орієнтири
              </h2>
              <ul className="space-y-3">
                {district.landmarks.map((landmark, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 font-medium flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            Питання про перевезення у {district.nameUk}
          </h2>
          <div className="space-y-6">
            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Як швидко ви приїдете у {district.nameUk}?
              </summary>
              <p className="text-slate-600 mt-4">
                Ми подаємо авто у межах {district.slug.includes('saksaganskyi') || district.slug.includes('tsentralno') ? '15-20 хвилин' : '20-30 хвилин'} 
                з моменту дзвінка. Знаємо всі під&apos;їзди та адреси району.
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Чи включено підйом/спуск у вартість?
              </summary>
              <p className="text-slate-600 mt-4">
                Так, підйом та спуск пацієнта з будь-якого поверху (навіть без ліфта) 
                включено у вартість безкоштовно. Наша бригада має досвід роботи у багатоповерхових будинках.
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Яке обладнання є в авто?
              </summary>
              <p className="text-slate-600 mt-4">
                У нашому медтакси є: носилки (в т.ч. складні для вузьких під&apos;їздів), 
                кисневе обладнання, дефібрилятор, тонометр, аптечка. 
                Салон обладнаний для комфорту лежачих пацієнтів.
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Чи можна замовити таксі для поїздки в інше місто?
              </summary>
              <p className="text-slate-600 mt-4">
                Так, ми возимо пацієнтів з {district.nameUk} у будь-яке місто України: 
                Київ, Дніпро, Запоріжжя, Одеса, Львів та інші. Є досвід далеких перевезень.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Виклик медтакси у {district.nameUk}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Телефонуйте прямо зараз — диспетчер розрахує вартість та надішле авто
          </p>
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition"
          >
            <Phone className="w-6 h-6" />
            +38 (097) 000-00-00
          </a>
        </div>
      </section>
    </div>
  );
}
