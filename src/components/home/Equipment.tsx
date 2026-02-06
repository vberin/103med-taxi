export default function Equipment() {
  const equipment = [
    '🚑 Демпферна платформа',
    '🛌 Вакуумний матрас',
    '⚕️ М\'які ноші'
  ]

  return (
    <section className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Обладнання</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}