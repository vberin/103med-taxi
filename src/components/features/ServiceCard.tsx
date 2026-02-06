import Link from 'next/link'
import { Ambulance, MapPin, Clock } from 'lucide-react'
import { Button } from '../ui/button'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  href: string
  address?: string
}

export default function ServiceCard({ title, description, price, href, address }: ServiceCardProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "UAH"
    }
  }

  return (
    <article className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-8 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
      <header className="flex items-center mb-4">
        <Ambulance className="text-primary mr-2" size={24} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </header>

      <div className="mb-4">
        {address && (
          <div className="flex items-center text-slate-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{address}</span>
          </div>
        )}
        <div className="flex items-center text-slate-500">
          <Clock size={16} className="mr-1" />
          <span>Подача авто: 20-30 хв</span>
        </div>
      </div>

      <footer className="flex flex-col items-center">
        <p className="text-2xl font-bold text-primary mb-4">{price} UAH</p>
        <Link href={href} className="w-full">
          <Button className="w-full h-14 px-8 rounded-full font-bold text-lg">Замовити перевезення</Button>
        </Link>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  )
}