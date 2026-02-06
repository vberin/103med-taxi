export default function Diagnoses() {
  const diagnoses = [
    {
      icon: '🦴',
      title: 'Травматологічні пацієнти',
      description: 'Перевезення пацієнтів з переломами та травмами'
    },
    {
      icon: '🧠',
      title: 'Неврологічні пацієнти',
      description: 'Транспортування пацієнтів з неврологічними діагнозами'
    },
    {
      icon: '🧬',
      title: 'Онкологічні пацієнти',
      description: 'Дбайливе перевезення пацієнтів з онкологічними захворюваннями'
    },
    {
      icon: '👴',
      title: 'Геріатричні пацієнти',
      description: 'Перевезення літніх пацієнтів з різними діагнозами'
    },
    {
      icon: '🏥',
      title: 'Післяопераційні пацієнти',
      description: 'Транспорт для пацієнтів після операцій'
    },
    {
      icon: '⚖️',
      title: 'Пацієнти >100 кг',
      description: 'Спеціалізований транспорт для пацієнтів з підвищеною вагою'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Яких пацієнтів ми перевозимо?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnoses.map((diagnosis, index) => (
            <div key={index} className="bg-bg border border-border rounded-lg p-6 flex items-start">
              <div className="text-3xl mr-4">{diagnosis.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{diagnosis.title}</h3>
                <p className="text-gray-600">{diagnosis.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}