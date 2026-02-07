import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Блог 103med.taxi | Поради, новини, статті про медичне таксі',
  description:
    'Корисні статті про перевезення лежачих хворих, поради родичам, огляди маршрутів та послуг медичного таксі в Кривому Розі',
  keywords: [
    'блог медтаксі',
    'статті про перевезення',
    'поради медичний транспорт',
    'новини 103med',
  ].join(', '),
};

export default function BlogPage() {
  const categories = ['Всі', 'Поради', 'Послуги', 'Маршрути', 'Здоров\'я', 'Новини'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6">
            Блог <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">103med.taxi</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Корисні поради, новини та статті про медичне перевезення
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className="px-6 py-3 bg-white rounded-xl border-2 border-cyan-200 text-slate-700 font-bold hover:bg-cyan-50 hover:border-cyan-400 transition"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-cyan-600 transition">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('uk-UA')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} хв</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
