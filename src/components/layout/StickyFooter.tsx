import Link from 'next/link'

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex gap-4 md:hidden z-50">
      <Link href="tel:+380975539030" className="flex-1 bg-secondary text-white rounded-lg flex items-center justify-center text-2xl">
        📞
      </Link>
      <Link href="/calculator" className="flex-grow bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg">
        Викликати авто
      </Link>
    </div>
  )
}