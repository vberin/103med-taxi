import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES } from '@/lib/data/cities';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Calculator from '@/components/features/Calculator';

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city_slug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { city_slug: string };
}): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city_slug);
  if (!city) return {};

  const title = `Медичне таксі Кривий Ріг - ${city.nameUk} | Перевезення лежачих хворих`;
  const description = city.descriptionUk;

  return {
    title,
    description,
    keywords: city.seoKeywordsUk.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'uk_UA',
    },
    alternates: {
      canonical: `https://103med.taxi/routes/${city.slug}`,
    },
  };
}

export default function CityRoutePage({
  params,
}: {
  params: { city_slug: string };
}) {
  const city = CITIES.find((c) => c.slug === params.city_slug);
  if (!city) notFound();

  const cityName = city.nameUk;
  const description = city.descriptionUk;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">
              Кривий Ріг — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{cityName}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="text-cyan-500" />
                <span className="font-bold text-slate-700">{city.distance} км</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-green-600">Від {city.priceFrom} грн</span>
              </div>
            </div>
          </div>

          <Calculator defaultDestination={cityName} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            Чому обирають нас для поїздки до {cityName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {city.features.map((feature, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-100 hover:shadow-lg transition">
                <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      {city.hospitals.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
              Лікарні та клініки у місті {cityName}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {city.hospitals.map((hospital, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{hospital.name}</h3>
                  <p className="text-slate-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    {hospital.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 px-4 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-800 mb-10 text-center">
            Питання про перевезення до {cityName}
          </h2>
          <div className="space-y-6">
            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Скільки часу займає поїздка Кривий Ріг — {cityName}?
              </summary>
              <p className="text-slate-600 mt-4">
                Приблизний час у дорозі — {Math.round(city.distance / 80)} години. 
                Робимо зупинки для комфорту пацієнта за потреби.
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Чи можна їхати з супроводжуючим?
              </summary>
              <p className="text-slate-600 mt-4">
                Так, супровід родичів включено у вартість безкоштовно (до 2 осіб).
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Які документи потрібні для перевезення?
              </summary>
              <p className="text-slate-600 mt-4">
                Паспорт пацієнта, медична довідка або виписка з лікарні (за наявності). 
                Диспетчер підкаже всі деталі при замовленні.
              </p>
            </details>

            <details className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200">
              <summary className="font-bold text-lg text-slate-800 cursor-pointer">
                Як оплатити поїздку?
              </summary>
              <p className="text-slate-600 mt-4">
                Оплата готівкою водію після поїздки або передоплата на картку (за домовленістю). 
                Видаємо чек/квитанцію.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Потрібна консультація?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Наші диспетчери дадуть відповідь на всі питання щодо перевезення до {cityName}
          </p>
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition"
          >
            <Phone className="w-6 h-6" />
            Зателефонувати диспетчеру
          </a>
        </div>
      </section>
    </div>
  );
}
