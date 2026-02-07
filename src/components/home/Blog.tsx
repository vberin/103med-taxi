'use client';

import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  // Беремо тільки 6 останніх статей
  const latestPosts = BLOG_POSTS.slice(0, 6);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-green-100 rounded-full text-green-700 font-bold text-sm mb-4">
            📝 Блог
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Корисні поради та{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              новини
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Статті про медичне перевезення, поради родичам, огляди маршрутів та послуг
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300"
            >
              {/* Category badge */}
              <div className="p-6">
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-cyan-600 transition line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 border-t-2 border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('uk-UA')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} хв</span>
                  </div>
                </div>

                {/* Read more */}
                <div className="mt-4 flex items-center gap-2 text-cyan-600 font-bold group-hover:gap-4 transition-all">
                  Читати далі
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-cyan-500 text-cyan-600 font-black text-lg rounded-2xl shadow-lg hover:bg-cyan-50 transition-all"
          >
            Всі статті блогу
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
