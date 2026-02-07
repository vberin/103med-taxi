'use client';

import { Phone, UserCheck, Ambulance, MapPin, Home, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Телефонуйте диспетчеру',
    description: 'Зателефонуйте за номером +38 (097) 000-00-00. Повідомте адресу, стан пацієнта та куди потрібно везти.',
    time: '2-3 хв',
    color: 'cyan',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Отримайте розрахунок',
    description: 'Диспетчер одразу назве точну вартість, час подачі авто та номер бригади.',
    time: '1 хв',
    color: 'blue',
  },
  {
    number: '03',
    icon: Ambulance,
    title: 'Приїзд медбригади',
    description: 'Бригада приїжджає протягом 15-30 хвилин. Медперсонал оцінює стан та обережно спускає пацієнта на носилках.',
    time: '15-30 хв',
    color: 'purple',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Транспортування',
    description: 'Під час поїздки медпрацівник контролює показники, спілкується з пацієнтом. Плавна їзда, комфортна температура.',
    time: 'За маршрутом',
    color: 'green',
  },
  {
    number: '05',
    icon: Home,
    title: 'Прибуття до місця',
    description: 'Бригада завозить пацієнта до кабінету/палати/дому, допомагає перекластися, при потребі — чекає.',
    time: '10-15 хв',
    color: 'orange',
  },
  {
    number: '06',
    icon: CheckCircle2,
    title: 'Оплата та чек',
    description: 'Оплата готівкою водію або на картку. Видаємо чек/квитанцію. Дякуємо за довіру!',
    time: '2-3 хв',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-300', text: 'text-cyan-700', icon: 'text-cyan-500', badge: 'bg-cyan-500' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700', icon: 'text-blue-500', badge: 'bg-blue-500' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-700', icon: 'text-purple-500', badge: 'bg-purple-500' },
  green: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', icon: 'text-green-500', badge: 'bg-green-500' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', icon: 'text-orange-500', badge: 'bg-orange-500' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', icon: 'text-emerald-500', badge: 'bg-emerald-500' },
};

export default function Process() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-purple-100 rounded-full text-purple-700 font-bold text-sm mb-4">
            Як це працює
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Виклик медтакси —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              просто та швидко
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Від дзвінка до прибуття — всього кілька простих кроків. Все організуємо за вас.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200" style={{ top: '6rem' }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];

              return (
                <div
                  key={index}
                  className={`relative ${colors.bg} rounded-2xl p-8 border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 ${colors.badge} text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>

                  {/* Time badge */}
                  <div className="absolute -top-3 right-4 px-4 py-1 bg-white rounded-full text-slate-700 font-bold text-xs shadow-lg">
                    ⏱️ {step.time}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} bg-white rounded-xl shadow-lg mb-6 mt-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-black ${colors.text} mb-3`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-10 border-2 border-cyan-200">
            <p className="text-2xl font-black text-slate-800 mb-6">
              Готові замовити медтаксі? Телефонуйте прямо зараз!
            </p>
            <a
              href="tel:+380970000000"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6" />
              +38 (097) 000-00-00
            </a>
            <p className="mt-4 text-slate-600">
              Або перейдіть до <a href="/calculator" className="text-cyan-600 font-bold underline">калькулятора вартості</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
