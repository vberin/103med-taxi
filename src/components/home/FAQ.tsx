'use client';

import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Загальне',
    questions: [
      {
        q: 'Скільки коштує виїзд медичного таксі?',
        a: 'Вартість залежить від відстані та складності перевезення. По місту Кривий Ріг — від 850 грн. Міжміські маршрути: Дніпро від 1200 грн, Київ від 4500 грн. Точну ціну назве диспетчер після уточнення деталей.',
      },
      {
        q: 'Як швидко ви приїжджаєте?',
        a: 'По Кривому Рогу подаємо авто протягом 15-30 хвилин з моменту дзвінка. Час залежить від району та завантаженості бригад. На далекі маршрути узгоджуємо час подачі заздалегідь.',
      },
      {
        q: 'Чи працюєте ви цілодобово?',
        a: 'Так, ми працюємо 24/7 без вихідних та святкових днів. Можете викликати медтаксі у будь-який час доби.',
      },
    ],
  },
  {
    category: 'Оплата',
    questions: [
      {
        q: 'Які способи оплати ви приймаєте?',
        a: 'Приймаємо готівку водію після завершення поїздки. Також можлива оплата на картку ФОП за домовленістю (передоплата або після). Видаємо чек або квитанцію.',
      },
      {
        q: 'Чи потрібна передоплата?',
        a: 'Передоплата не обов\'язкова для більшості поїздок. Для далеких маршрутів (Київ, Львів, Одеса) можемо попросити передоплату 30-50% для резервування бригади.',
      },
      {
        q: 'Чи включено підйом/спуск у вартість?',
        a: 'Так, підйом та спуск пацієнта з будь-якого поверху (навіть без ліфта) включено у базову вартість безкоштовно.',
      },
    ],
  },
  {
    category: 'Перевезення',
    questions: [
      {
        q: 'Чи можна їхати з родичами?',
        a: 'Так, до 2 супроводжуючих можуть їхати безкоштовно. Для більшої кількості людей обговорюємо варіанти окремо.',
      },
      {
        q: 'Що взяти з собою в дорогу?',
        a: 'Паспорт пацієнта, медичні документи (виписка, довідки), ліки які він приймає, зручний одяг, воду. Для далеких поїздок — підгузки за потреби. Носилки, кисень та обладнання надаємо ми.',
      },
      {
        q: 'Чи возите ви під крапельницею?',
        a: 'Так, маємо досвід перевезення пацієнтів під крапельницею. У салоні є штатив для флаконів. Обов\'язково повідомте диспетчера про це при замовленні.',
      },
    ],
  },
  {
    category: 'Медперсонал',
    questions: [
      {
        q: 'Яка кваліфікація у вашого персоналу?',
        a: 'Всі медпрацівники мають вищу або середню спеціальну освіту (медсестри, фельдшери), сертифікати долікарської допомоги, досвід роботи від 5 років.',
      },
      {
        q: 'Чи надаєте ви медичну допомогу в дорозі?',
        a: 'Так, наш персонал надає долікарську допомогу: контроль показників, кисень, знеболювальні за призначенням, психологічна підтримка. У критичних ситуаціях викликаємо швидку 103.',
      },
      {
        q: 'Чи є у вас ліцензія?',
        a: 'Так, ми працюємо офіційно як ФОП з медичної діяльності, маємо всі необхідні дозволи МОЗ України, страхування пасажирів.',
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-purple-100 rounded-full text-purple-700 font-bold text-sm mb-4">
            ❓ Питання та відповіді
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Все що вас{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              цікавить
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Відповіді на найпопулярніші запитання про медичне таксі
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category title */}
              <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
                    >
                      {/* Question button */}
                      <button
                        onClick={() => toggleQuestion(catIndex, qIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cyan-50 transition-colors"
                      >
                        <span className="font-bold text-lg text-slate-800 pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t-2 border-slate-100 pt-5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10 text-center text-white">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-black mb-4">
            Не знайшли відповіді на своє питання?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Телефонуйте нам — диспетчер детально проконсультує
          </p>
          <a
            href="tel:+380970000000"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            <Phone className="w-6 h-6" />
            +38 (097) 000-00-00
          </a>
        </div>
      </div>
    </section>
  );
}
