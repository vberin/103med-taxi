'use client';

import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ірина Петренко',
    district: 'Саксаганський район',
    rating: 5,
    date: '15 березня 2024',
    text: 'Дякую бригаді за чуйність та професіоналізм! Везли маму до Києва після інсульту. Весь шлях медсестра була поряд, контролювала тиск. Доїхали за 4 години. Рекомендую від щирого серця!',
    service: 'Київ',
  },
  {
    name: 'Олександр Коваленко',
    district: 'Довгинцево',
    rating: 5,
    date: '8 березня 2024',
    text: 'Підняли тата з 5 поверху без ліфта. Боявся, що не впораються, але хлопці молодці — працювали обережно, без поспіху. Усе зробили професійно. Ціна адекватна. Дякую!',
    service: 'Підйом без ліфта',
  },
  {
    name: 'Марина Іваненко',
    district: 'Центр',
    rating: 5,
    date: '2 березня 2024',
    text: 'Возили бабусю на МРТ. Чекали нас після процедури, допомогли підійти до машини. Медсестра дуже уважна та турботлива. Ціна справедлива. Обов\'язково звернемося ще!',
    service: 'МРТ',
  },
  {
    name: 'Віктор Сидоренко',
    district: 'Інгулець',
    rating: 5,
    date: '25 лютого 2024',
    text: 'Син після ДТП — перевезли з Дніпра додому на жорстких носилках. Медсупровід на високому рівні, зв\'язок з лікарем. Дуже вдячний за допомогу у важку хвилину.',
    service: 'Дніпро → Кривий Ріг',
  },
  {
    name: 'Наталія Бондаренко',
    district: 'Тернівка',
    rating: 5,
    date: '18 лютого 2024',
    text: 'Везли чоловіка після операції на серці. Медсестра весь час була поряд, заспокоювала, контролювала стан. Доїхали без проблем. Дуже вдячна за турботу!',
    service: 'Виписка з лікарні',
  },
  {
    name: 'Сергій Мельник',
    district: 'Покровський район',
    rating: 5,
    date: '10 лютого 2024',
    text: 'Везли бабусю в Трускавець на реабілітацію. Довга дорога, робили зупинки для відпочинку. Бригада дуже уважна. Комфортний салон. Рекомендую для далеких поїздок!',
    service: 'Трускавець',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-yellow-100 rounded-full text-yellow-700 font-bold text-sm mb-4">
            ⭐ Відгуки клієнтів
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Що кажуть про нас{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              наші клієнти
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Реальні відгуки людей, які довірили нам перевезення своїх близьких
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Service badge */}
              <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold mb-4">
                {review.service}
              </div>

              {/* Review text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                &quot;{review.text}&quot;
              </p>

              {/* Author info */}
              <div className="border-t-2 border-slate-100 pt-4">
                <p className="font-black text-slate-800 text-lg">{review.name}</p>
                <p className="text-sm text-slate-500">{review.district}</p>
                <p className="text-xs text-slate-400 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-cyan-200 shadow-lg">
            <p className="text-4xl font-black text-cyan-600 mb-2">500+</p>
            <p className="text-slate-600 font-bold">Задоволених клієнтів</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-green-200 shadow-lg">
            <p className="text-4xl font-black text-green-600 mb-2">5.0</p>
            <p className="text-slate-600 font-bold">Середній рейтинг</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-blue-200 shadow-lg">
            <p className="text-4xl font-black text-blue-600 mb-2">10+</p>
            <p className="text-slate-600 font-bold">Років досвіду</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-purple-200 shadow-lg">
            <p className="text-4xl font-black text-purple-600 mb-2">24/7</p>
            <p className="text-slate-600 font-bold">Цілодобово</p>
          </div>
        </div>
      </div>
    </section>
  );
}
