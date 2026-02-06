import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Колонка 1: Бренд */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-black text-white flex items-center gap-1 mb-4">
              103med<span className="text-red-500">.taxi</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              Професійна служба перевезення лежачих хворих та людей з обмеженими можливостями. 
              Комфорт, безпека та медичний супровід 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Колонка 2: Навігація */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Навігація</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-red-400 transition">Головна</Link></li>
              <li><Link href="/#services" className="hover:text-red-400 transition">Послуги та ціни</Link></li>
              <li><Link href="/blog" className="hover:text-red-400 transition">Блог</Link></li>
              <li><Link href="/#contacts" className="hover:text-red-400 transition">Контакти</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Контакти */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакти</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href="tel:+380975539030" className="hover:text-white transition">+38 (097) 553-90-30</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:info@103med.taxi" className="hover:text-white transition">info@103med.taxi</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span>м. Кривий Ріг, працюємо по всій Україні</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоса (Copyright и ссылки) */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 103med.taxi. Всі права захищені.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Політика конфіденційності</Link>
            <Link href="/terms" className="hover:text-white transition">Умови використання</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}