export default function Features() {
  const features = [
    {
      icon: '🛏️',
      title: 'Від кровати до кровати',
      description: 'Повний супровід пацієнта від місця виклику до лікарні'
    },
    {
      icon: '❄️',
      title: 'Комфорт та клімат',
      description: 'Сучасні автомобілі з системою клімат-контролю'
    },
    {
      icon: '👨‍⚕️',
      title: 'Професійна бригада',
      description: 'Медики з досвідом роботи в екстрених ситуаціях'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-8 text-center shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}