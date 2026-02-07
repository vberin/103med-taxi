'use client';

import { Heart, Brain, Bone, Activity, Thermometer, Accessibility, AlertCircle, Stethoscope } from 'lucide-react';

const diagnoses = [
  {
    icon: Heart,
    title: 'Серцево-судинні захворювання',
    conditions: ['Інфаркт міокарда', 'Інсульт', 'Гіпертонічна криза', 'Серцева недостатність', 'Аритмія'],
    description: 'Перевезення кардіологічних хворих з постійним контролем тиску, пульсу, кисню. Готовність до екстреної допомоги.',
    color: 'red',
  },
  {
    icon: Brain,
    title: 'Неврологічні захворювання',
    conditions: ['Інсульт', 'Хвороба Паркінсона', 'Розсіяний склероз', 'Епілепсія', 'Деменція'],
    description: 'Делікатний підхід до пацієнтів з порушеннями свідомості, рухів, пам\'яті. Психологічна підтримка.',
    color: 'purple',
  },
  {
    icon: Bone,
    title: 'Травми та переломи',
    conditions: ['Перелом хребта', 'Перелом шийки стегна', 'Політравма', 'Опіки', 'Післяопераційні стани'],
    description: 'Жорсткі носилки, іммобілізація, обережне транспортування без зайвих рухів. Досвід перевезення травмованих.',
    color: 'orange',
  },
  {
    icon: Activity,
    title: 'Онкологічні захворювання',
    conditions: ['Після хіміотерапії', 'Паліативна допомога', 'Післяопераційний період', 'Кахексія'],
    description: 'Максимальний комфорт, знеболення, турбота. Розуміємо особливості стану онкохворих.',
    color: 'indigo',
  },
  {
    icon: Accessibility,
    title: 'Інвалідність та обмежена мобільність',
    conditions: ['Параліч', 'Ампутація', 'ДЦП', 'Спінальна травма', 'Кріслоколяски'],
    description: 'Допомога у пересадці з інвалідного крісла, обладнання для підйому, досвідчений персонал.',
    color: 'blue',
  },
  {
    icon: Thermometer,
    title: 'Інфекційні захворювання',
    conditions: ['COVID-19', 'Пневмонія', 'Туберкульоз (закрита форма)', 'ГРВІ', 'Післяінфекційні стани'],
    description: 'Дотримання санітарних норм, засоби захисту, дезінфекція салону. Перевезення з дотриманням протоколів.',
    color: 'green',
  },
  {
    icon: AlertCircle,
    title: 'Похилий вік (65+)',
    conditions: ['Старечий вік', 'Деменція', 'Слабкість', 'Після падінь', 'Хронічні хвороби'],
    description: 'Терплячий підхід, повільний темп, психологічна підтримка. Ставимося як до рідних.',
    color: 'cyan',
  },
  {
    icon: Stethoscope,
    title: 'Післяопераційні стани',
    conditions: ['Після операцій', 'Дренажі', 'Катетери', 'Під крапельницею', 'На кисні'],
    description: 'Обережне транспортування, контроль усіх систем, зв\'язок з лікарем. Досвід медичного супроводу.',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  red: { bg: 'bg-red-50', icon: 'text-red-500', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-500', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-500', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-500', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  blue: { bg: 'bg-blue-50', icon: 'text-blue-500', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  green: { bg: 'bg-green-50', icon: 'text-green-500', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-500', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-500', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
};

export default function Diagnoses() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-red-700 font-bold text-sm mb-4">
            🏥 Діагнози та стани
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Перевозимо пацієнтів з{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              будь-якими діагнозами
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Наш персонал має досвід роботи з різними захворюваннями та станами. Індивідуальний підхід до кожного пацієнта.
          </p>
        </div>

        {/* Diagnoses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diagnoses.map((diagnosis, index) => {
            const Icon = diagnosis.icon;
            const colors = colorMap[diagnosis.color];

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
                  {diagnosis.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {diagnosis.description}
                </p>

                {/* Conditions */}
                <div className="space-y-2">
                  {diagnosis.conditions.map((condition, idx) => (
                    <div key={idx} className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-bold mr-2 mb-2`}>
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Important note */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-black text-slate-800 mb-2">
                ⚠️ Важливо!
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Якщо у пацієнта критичний стан (втрата свідомості, гостра кровотеча, зупинка дихання) — 
                негайно викликайте швидку 103. Ми займаємося <strong>плановими</strong> та <strong>стабільними</strong> перевезеннями.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-slate-700 mb-6">
            Не впевнені, чи підходить наша послуга? <strong>Зателефонуйте — проконсультуємо безкоштовно!</strong>
          </p>
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            📞 +38 (097) 000-00-00
          </a>
        </div>
      </div>
    </section>
  );
}
