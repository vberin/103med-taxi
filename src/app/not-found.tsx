import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Не знайдено</h2>
      <p>Запитаний ресурс не знайдено</p>
      <Link href="/">Повернутися на головну</Link>
    </div>
  )
}