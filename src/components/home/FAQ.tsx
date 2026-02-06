'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Які документи потрібні для виклику санітарного транспорту?',
    answer: 'Для виклику санітарного транспорту потрібні: паспорт або свідоцтво про народження, поліс медичного страхування, направлення від лікаря або виклик швидкої допомоги.'
  },
  {
    question: 'Чи можна викликати санітарний транспорт для перевезення лежачого хворого?',
    answer: 'Так, ми спеціалізуємося на перевезенні лежачих хворих. Наш транспорт обладнаний спеціальними ношами, кріслами та обладнанням для безпечного транспортування.'
  },
  {
    question: 'Яка вартість послуг санітарного транспорту?',
    answer: 'Вартість залежить від відстані, часу доби та терміновості. Мінімальна вартість поїздки - від 500 грн. Детальний розрахунок можна отримати за телефоном або через калькулятор на сайті.'
  },
  {
    question: 'Чи працюєте ви цілодобово?',
    answer: 'Так, наша служба працює цілодобово 24/7. Ми завжди готові надати допомогу в будь-який час доби.'
  },
  {
    question: 'Який транспорт використовується для перевезення?',
    answer: 'Ми використовуємо спеціалізований санітарний транспорт: автомобілі швидкої допомоги класу B та C, обладнані всім необхідним медичним обладнанням та персоналом.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Часті запитання</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 bg-white/80 backdrop-blur-md rounded-3xl shadow-soft border border-slate-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}