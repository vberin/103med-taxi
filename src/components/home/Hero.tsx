'use client';

import { Phone, Ambulance, Clock, Shield, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 font-bold text-sm mb-6 animate-pulse">
              <Heart className="w-4 h-4" />
              Працюємо цілодобово 24/7
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-6 leading-tight">
              Медичне таксі{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Кривий Ріг
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Професійне перевезення лежачих хворих. Комфорт, безпека, медичний супровід.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                <Clock className="w-8 h-8 text-cyan-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-slate-800">Швидка подача</p>
                  <p className="text-sm text-slate-600">15-30 хвилин</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                <Shield className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-slate-800">Досвід 10+ років</p>
                  <p className="text-sm text-slate-600">Перевірені фахівці</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                <Ambulance className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-slate-800">Обладнання</p>
                  <p className="text-sm text-slate-600">Носилки, кисень</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                <Heart className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-slate-800">Турбота</p>
                  <p className="text-sm text-slate-600">Медсупровід</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+380970000000"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <Phone className="w-6 h-6" />
                Викликати медтаксі
              </a>

              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-cyan-500 text-cyan-600 font-black text-lg rounded-2xl shadow-lg hover:bg-cyan-50 transition-colors duration-300"
              >
                Розрахувати вартість
              </Link>
            </div>

            {/* Phone Number */}
            <p className="mt-6 text-slate-600">
              Або зателефонуйте:{' '}
              <a
                href="tel:+380970000000"
                className="text-2xl font-black text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                +38 (097) 000-00-00
              </a>
            </p>
          </div>

          {/* Right Column - Visual/Image */}
          <div className="relative lg:block hidden">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-tl from-cyan-300 to-blue-400 rounded-full opacity-30 animate-pulse delay-150" />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-12 shadow-2xl">
                  <Ambulance className="w-32 h-32 text-cyan-500" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 right-10 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <p className="text-sm font-bold text-slate-700">24/7</p>
                <p className="text-xs text-slate-500">Цілодобово</p>
              </div>

              <div className="absolute bottom-10 left-10 bg-white rounded-2xl p-4 shadow-xl animate-bounce delay-300">
                <p className="text-sm font-bold text-slate-700">10+ років</p>
                <p className="text-xs text-slate-500">Досвіду</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
