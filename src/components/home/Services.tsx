export default function Services() {
  const services = [
    {
      title: 'По місту',
      price: 'від 800 UAH',
      description: 'Перевезення в межах Кривого Рогу'
    },
    {
      title: 'Міжмісто',
      price: '20 UAH/км',
      description: 'Перевезення за межі міста'
    },
    {
      title: 'Підйом на поверх',
      price: '100 UAH/поверх',
      description: 'Якщо немає ліфта'
    },
    {
      title: 'Очікування',
      price: '50 UAH/година',
      description: 'Час очікування на місці'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Послуги та ціни</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-soft p-8 flex justify-between items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
              <div className="text-2xl font-bold text-primary ml-4">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}