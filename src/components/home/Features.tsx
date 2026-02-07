'use client';

import { Shield, Clock, Heart, Users, Stethoscope, Phone, CheckCircle2, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Швидка подача',
    description: 'Приїжджаємо протягом 15-30 хвилин після дзвінка. Знаємо всі райони Кривого Рогу.',
    color: 'cyan',
    stats: '15-30 хв',
  },
  {
    icon: Shield,
    title: 'Досвід 10+ років',
    description: 'Кваліфіковані медпрацівники з багаторічним досвідом перевезення лежачих хворих.',
    color: 'green',
    stats: '10+ років',
  },
  {
    icon: Stethoscope,
    title: 'Медобладнання',
    description: 'Носилки, кисневі балони, дефібрилятор, тонометр — все необхідне для безпечної поїздки.',
    color: 'blue',
    stats: '100% обладнано',
  },
  {
    icon: Heart,
    title: 'Турбота та увага',
    description: 'Ставимося до кожного пацієнта як до рідної людини. Супровід протягом усього шляху.',
    color: 'red',
    stats: '5★ рейтинг',
  },
  {
    icon: Users,
    title: 'Супровід родичів',
    description: 'До 2 супроводжуючих можуть їхати безкоштовно. Ваша присутність важлива для пацієнта.',
    color: 'purple',
    stats: 'До 2 осіб',
  },
  {
    icon: Phone,
    title: 'Цілодобово 24/7',
    description: 'Працюємо без вихідних та святкових днів. Завжди на зв\'язку для екстрених викликів.',
    color: 'orange',
    stats: '24/7',
  },
  {
    icon: CheckCircle2,
    title: 'Прозора ціна',
    description: 'Повідомляємо вартість до поїздки. Без прихованих доплат. Чек після завершення.',
    color: 'emerald',
    stats: 'Без доплат',
  },
  {
    icon: Award,
    title: 'Ліцензії та страховки',
    description: 'Всі дозволи МОЗ, страхування пасажирів, сертифіковане обладнання.',
    color: 'indigo',
    stats: 'Повна легальність',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: 'text-cyan-500' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'text-green-500' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'text-blue-500' },
  red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: 'text-red-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'text-purple-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: 'text-orange-500' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: 'text-emerald-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', icon: 'text-indigo-500' },
};

export default function Features() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20 -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-cyan-100 rounded-full text-cyan-700 font-bold text-sm mb-4">
            Чому обирають нас
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Ваша безпека — наш{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              пріоритет
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Понад 10 років досвіду у перевезенні лежачих хворих. Довіра сотень сімей Кривого Рогу та області.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];

            return (
              <div
                key={index}
                className={`group relative ${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.icon} bg-white rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Stats badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 ${colors.text} bg-white rounded-full text-xs font-bold shadow-sm`}>
                  {feature.stats}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-black ${colors.text} mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            <Phone className="w-6 h-6" />
            Викликати медтаксі зараз
          </a>
          <p className="mt-4 text-slate-600">
            Або зателефонуйте: <a href="tel:+380970000000" className="text-cyan-600 font-bold text-lg">+38 (097) 000-00-00</a>
          </p>
        </div>
      </div>
    </section>
  );
}
