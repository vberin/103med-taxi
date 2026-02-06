import Calculator from '@/components/features/Calculator'

export const metadata = {
  title: 'Калькулятор вартості перевезення',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Calculator />
    </main>
  )
}