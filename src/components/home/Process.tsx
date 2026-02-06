export default function Process() {
  const steps = [
    'Дзвінок диспетчеру',
    'Виїзд бригади',
    'Транспортування',
    'Доставка до місця призначення'
  ]

  return (
    <section className="py-16 bg-[#eefcfd]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Як це працює</h2>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                {index + 1}
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}