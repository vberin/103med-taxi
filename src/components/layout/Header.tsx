'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Globe, MapPin, Ambulance } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname?.startsWith('/ru') ? 'ru' : 'uk';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    uk: {
      routes: 'Маршрути',
      districts: 'Райони',
      services: 'Послуги',
      blog: 'Блог',
      calculator: 'Калькулятор',
      call: 'Викликати медтаксі',
    },
    ru: {
      routes: 'Маршруты',
      districts: 'Районы',
      services: 'Услуги',
      blog: 'Блог',
      calculator: 'Калькулятор',
      call: 'Вызвать медтакси',
    },
  };

  const basePath = lang === 'ru' ? '/ru' : '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={basePath + '/'}
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-2.5 shadow-lg group-hover:scale-110 transition-transform">
              <Ambulance className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-black text-slate-800">
                103med
              </span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                .taxi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href={basePath + '/routes'}
              className="px-4 py-2 text-slate-700 font-bold hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition whitespace-nowrap"
            >
              {t[lang].routes}
            </Link>
            <Link
              href={basePath + '/locations'}
              className="px-4 py-2 text-slate-700 font-bold hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition whitespace-nowrap"
            >
              {t[lang].districts}
            </Link>
            <Link
              href={basePath + '/services'}
              className="px-4 py-2 text-slate-700 font-bold hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition whitespace-nowrap"
            >
              {t[lang].services}
            </Link>
            <Link
              href={basePath + '/blog'}
              className="px-4 py-2 text-slate-700 font-bold hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition whitespace-nowrap"
            >
              {t[lang].blog}
            </Link>
            <Link
              href={basePath + '/calculator'}
              className="px-4 py-2 text-slate-700 font-bold hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition whitespace-nowrap"
            >
              {t[lang].calculator}
            </Link>
          </nav>

          {/* Right side - Phone & Language */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <Link
                href={pathname?.replace('/ru', '') || '/'}
                className={`px-3 py-1.5 rounded-md font-bold text-sm transition whitespace-nowrap ${
                  lang === 'uk'
                    ? 'bg-white text-cyan-600 shadow-sm'
                    : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                УКР
              </Link>
              <Link
                href={'/ru' + (pathname?.replace('/ru', '') || '')}
                className={`px-3 py-1.5 rounded-md font-bold text-sm transition whitespace-nowrap ${
                  lang === 'ru'
                    ? 'bg-white text-cyan-600 shadow-sm'
                    : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                РУС
              </Link>
            </div>

            {/* Phone */}
            <a
              href="tel:+380970000000"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">+38 (097) 000-00-00</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-slate-100 shadow-2xl">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            <Link
              href={basePath + '/routes'}
              className="block px-4 py-3 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[lang].routes}
            </Link>
            <Link
              href={basePath + '/locations'}
              className="block px-4 py-3 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[lang].districts}
            </Link>
            <Link
              href={basePath + '/services'}
              className="block px-4 py-3 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[lang].services}
            </Link>
            <Link
              href={basePath + '/blog'}
              className="block px-4 py-3 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[lang].blog}
            </Link>
            <Link
              href={basePath + '/calculator'}
              className="block px-4 py-3 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[lang].calculator}
            </Link>

            {/* Language switcher mobile */}
            <div className="flex items-center gap-2 pt-4">
              <Link
                href={pathname?.replace('/ru', '') || '/'}
                className={`flex-1 py-3 text-center rounded-lg font-bold transition ${
                  lang === 'uk'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Українська
              </Link>
              <Link
                href={'/ru' + (pathname?.replace('/ru', '') || '')}
                className={`flex-1 py-3 text-center rounded-lg font-bold transition ${
                  lang === 'ru'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Русский
              </Link>
            </div>

            {/* Phone mobile */}
            <a
              href="tel:+380970000000"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg rounded-xl shadow-lg mt-4"
            >
              <Phone className="w-6 h-6" />
              <span className="whitespace-nowrap">+38&nbsp;(097)&nbsp;000-00-00</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
