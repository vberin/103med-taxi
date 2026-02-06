import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Блог | Корисні статті про перевезення хворих',
  description: 'Поради щодо догляду за лежачими хворими, підготовка до транспортування та новини сервісу.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Наш Блог</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Корисна інформація для пацієнтів та їхніх родичів
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Заглушка картинки (цветной градиент) */}
              <div className="h-48 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-red-100 group-hover:to-red-200 transition-colors relative flex items-center justify-center">
                 <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider shadow-sm">
                   {post.category}
                 </span>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-red-500 font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Читати статтю <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}