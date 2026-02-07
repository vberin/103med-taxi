'use client';

import { Heart, Wind, Zap, Activity, Package, Shield, Thermometer, Droplet } from 'lucide-react';

const equipment = [
  {
    icon: Package,
    title: 'Носилки медичні',
    description: 'Складні та жорсткі носилки для різних ситуацій. Протипролежневі матраци для комфорту пацієнта.',
    features: ['Складні (для вузьких під\'їздів)', 'Жорсткі (при травмах)', 'М\'які матраци'],
    color: 'cyan',
  },
  {
    icon: Wind,
    title: 'Кисневе обладнання',
    description: 'Кисневі балони з редукторами, маски та канюлі різних розмірів. Контроль подачі кисню.',
    features: ['Балони 10 л', 'Регульована швидкість', 'Резервний запас'],
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Дефібрилятор',
    description: 'Автоматичний зовнішній дефібрилятор для надання невідкладної допомоги при зупинці серця.',
    features: ['Автоматичний режим', 'Голосові підказки', 'Перевірений щомісяця'],
    color: 'red',
  },
  {
    icon: Activity,
    title: 'Тонометр та пульсоксиметр',
    description: 'Вимірювання тиску, пульсу та рівня кисню в крові. Контроль показників кожні 15 хвилин.',
    features: ['Електронний тонометр', 'Пульсоксиметр', 'Протокол вимірювань'],
    color: 'green',
  },
  {
    icon: Thermometer,
    title: 'Термометри',
    description: 'Безконтактні інфрачервоні термометри для швидкого вимірювання температури тіла.',
    features: ['Безконтактний', 'Точність 0.1°C', 'Миттєвий результат'],
    color: 'orange',
  },
  {
    icon: Heart,
    title: 'Аптечка',
    description: 'Повний набір медикаментів першої допомоги: знеболювальні, серцеві, від тиску, антисептики.',
    features: ['Знеболювальні', 'Серцеві препарати', 'Стерильні матеріали'],
    color: 'purple',
  },
  {
    icon: Droplet,
    title: 'Інфузійне обладнання',
    description: 'Штативи для крапельниць, кріплення для флаконів. Можливість перевезення під крапельницею.',
    features: ['Штатив регульований', 'Надійні кріплення', 'Контроль швидкості введення'],
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Засоби захисту',
    description: 'Маски, рукавички, антисептики, захисні костюми для персоналу. Дезінфекція салону після кожної поїздки.',
    features: ['Маски FFP2/FFP3', 'Антисептики', 'УФ-дезінфекція'],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-500', border: 'border-cyan-200' },
  blue: { bg: 'bg-blue-50', icon: 'text-blue-500', border: 'border-blue-200' },
  red: { bg: 'bg-red-50', icon: 'text-red-500', border: 'border-red-200' },
  green: { bg: 'bg-green-50', icon: 'text-green-500', border: 'border-green-200' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-500', border: 'border-orange-200' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-500', border: 'border-purple-200' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-500', border: 'border-indigo-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-500', border: 'border-emerald-200' },
};

export default function Equipment() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm mb-4">
            Обладнання
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Все необхідне для{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              безпечної поїздки
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Наші автомобілі обладнані сучасною медичною технікою для надання допомоги в дорозі
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];

            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${colors.icon} bg-white rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-slate-800 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certification badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-xl font-black text-slate-800 mb-2">
              ✅ Всі дозволи МОЗ України
            </p>
            <p className="text-slate-600">
              Обладнання сертифіковане, персонал атестований, автомобілі застраховані
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
