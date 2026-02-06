import Link from 'next/link'

const cities = [
  'Кривий Ріг',
  'Дніпро',
  'Запоріжжя',
  'Київ',
  'Харків',
  'Одеса',
  'Львів',
  'Вінниця',
  'Житомир',
  'Черкаси',
  'Кропивницький',
  'Миколаїв',
  'Херсон',
  'Полтава',
  'Суми',
  'Чернігів',
  'Чернівці',
  'Івано-Франківськ',
  'Тернопіль',
  'Рівне',
  'Луцьк',
  'Ужгород',
  'Хмельницький',
  'Кам\'янець-Подільський'
]

export default function Routes() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Маршрути</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/routes/${city.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-')}`}
              className="block p-6 bg-white/80 backdrop-blur-md border border-slate-100 hover:bg-primary hover:text-white transition-all duration-300 rounded-3xl shadow-soft hover:shadow-2xl hover:-translate-y-2 text-center"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}