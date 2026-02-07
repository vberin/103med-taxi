'use client';

import { Ambulance, MapPin, Plane, Building2, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Ambulance,
    title: 'Перевезення лежачих хворих',
    description: 'Комфортне та безпечне транспортування пацієнтів з обмеженою мобільністю по місту та Україні.',
    features: ['Носилки', 'Медсупровід', 'Підйом/спуск'],
    price: 'від 850 грн',
    link: '/services/bedridden',
    color: 'cyan',
  },
  {
    icon: MapPin,
    title: 'Міжміські перевезення',
    description: 'Веземо пацієнтів у Київ, Дніпро, Одесу, Харків та інші міста України з медичним супроводом.',
    features: ['Далекі маршрути', 'Зупинки для відпочинку', 'Супровід родичів'],
    price: 'від 1200 грн',
    link: '/routes',
    color: 'blue',
  },
  {
    icon: Building2,
    title: 'Виписка з лікарні',
    description: 'Забираємо пацієнта з лікарні та доставляємо додому. Підйом на поверх, перекладання у ліжко.',
    features: ['З палати до дому', 'Допомога медперсоналу', 'Без стресу'],
    price: 'від 850 грн',
    link: '/services/hospital-discharge',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Поїздки на обстеження',
    description: 'Супровід на МРТ, КТ, рентген, аналізи. Чекаємо пацієнта та веземо назад.',
    features: ['Очікування 30 хв безкоштовно', 'Супровід у клініку', 'Туди-назад'],
    price: 'від 1000 грн',
    link: '/services/medical-exams',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Перевезення людей похилого віку',
    description: 'Делікатний підхід до літніх пацієнтів. Психологічна підтримка, повільний темп.',
    features: ['Без поспіху', 'Турботливий персонал', 'Комфорт'],
    price: 'від 850 грн',
    link: '/services/elderly',
    color: 'orange',
  },
  {
    icon: Plane,
    title: 'Трансфер до санаторіїв',
    description: 'Веземо пацієнтів на реабілітацію: Трускавець, Моршин, Миргород, Затока.',
    features: ['Далекі відстані', 'Комфортний салон', 'Знижки на зворотню поїздку'],
    price: 'від 3500 грн',
    link: '/services/sanatorium',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; text: string; icon: string; button: string }> = {
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', icon: 'text-cyan-500', button: 'bg-cyan-500 hover:bg-cyan-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'text-blue-500', button: 'bg-blue-500 hover:bg-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-700', icon: 'text-green-500', button: 'bg-green-500 hover:bg-green-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', icon: 'text-purple-500', button: 'bg-purple-500 hover:bg-purple-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', icon: 'text-orange-500', button: 'bg-orange-500 hover:bg-orange-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', icon: 'text-emerald-500', button: 'bg-emerald-500 hover:bg-emerald-600' },
};

export default function Services() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm mb-4">
            Наші послуги
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Медичне перевезення{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              будь-якої складності
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Від поїздки до лікарні по місту до далеких маршрутів у санаторії та клініки України
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`${colors.bg} p-6 relative`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} bg-white rounded-xl shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1 bg-white rounded-full text-green-600 font-black text-sm shadow-sm">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${colors.button} text-white font-bold rounded-xl transition-all group-hover:gap-4`}
                  >
                    Детальніше
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
