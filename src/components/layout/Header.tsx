'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Головна', href: '/' },
  { name: 'Послуги та ціни', href: '/#services' }, // Добавили слэш для универсальности
  { name: 'Блог', href: '/blog' },
  { name: 'Контакти', href: '/#contacts' },       // Добавили слэш
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Эффект для тени при скролле
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Умная обработка клика по якорю
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); // Закрываем мобильное меню

    // Если это якорная ссылка
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      
      // Если мы УЖЕ на главной
      if (pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Если мы НЕ на главной — Next.js Link сам перекинет нас на '/' + якорь
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Логотип */}
          <Link href="/" className="text-2xl font-black text-slate-900 flex items-center gap-1">
            103med<span className="text-red-500">.taxi</span>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Правая часть (Телефон + Кнопка) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+380975539030" className="flex items-center gap-2 font-bold text-slate-800 hover:text-red-500 transition">
              <Phone className="w-5 h-5 text-red-500" />
              <span>+38 (097) 553-90-30</span>
            </a>
            <Link 
              href="/#calculator"
              onClick={(e) => handleNavClick(e, '/#calculator')}
              className="bg-red-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-600 transition shadow-lg shadow-red-500/30"
            >
              ЗАМОВИТИ
            </Link>
          </div>

          {/* Мобильная кнопка */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-bold text-slate-800 py-2 border-b border-slate-50 last:border-0"
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:+380975539030" className="flex items-center gap-3 font-bold text-slate-800 py-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-red-500" />
            </div>
            +38 (097) 553-90-30
          </a>
          <Link 
             href="/#calculator"
             onClick={(e) => handleNavClick(e, '/#calculator')}
             className="bg-red-500 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-red-500/20"
          >
            РОЗРАХУВАТИ ВАРТІСТЬ
          </Link>
        </div>
      )}
    </header>
  );
}