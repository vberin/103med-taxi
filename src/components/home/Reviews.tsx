import Link from 'next/link'

export default function Reviews() {
  const reviews = [
    {
      author: 'Олена К.',
      stars: '★★★★★',
      text: 'Дуже вдячні! Хлопці приїхали вчасно, акуратно спустили бабусю з 5-го поверху. Машина чиста, ввічливі.'
    },
    {
      author: 'Андрій',
      stars: '★★★★★',
      text: 'Везли батька після інсульту в Дніпро. Машина м\'яка, доїхали без проблем. Рекомендую!'
    },
    {
      author: 'Марина',
      stars: '★★★★★',
      text: 'Замовляли поїздку на МРТ. Почекали, допомогли перекласти. Сервіс на найвищому рівні.'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Що говорять клієнти</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md border border-slate-100 p-8 rounded-3xl shadow-soft hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">{review.author}</span>
                <span className="text-yellow-500">{review.stars}</span>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            className="btn btn-secondary"
          >
            Читати відгуки на Google Maps
          </Link>
        </div>
      </div>
    </section>
  )
}