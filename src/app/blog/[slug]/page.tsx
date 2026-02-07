import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Блог 103med.taxi`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 pt-32 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-bold mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад до блогу
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('uk-UA')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} хвилин читання</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Потрібна консультація?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наші диспетчери відповідять на всі питання
          </p>
          <a
            href="tel:+380970000000"
            className="inline-block px-8 py-4 bg-white text-cyan-600 font-black text-lg rounded-xl shadow-xl hover:scale-105 transition"
          >
            +38 (097) 000-00-00
          </a>
        </div>
      </article>
    </div>
  );
}
