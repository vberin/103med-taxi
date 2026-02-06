import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

// 1. Генерируем пути для всех статей (чтобы работала сборка)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Генерируем метаданные
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Статтю не знайдено' };

  return {
    title: `${post.title} | Блог 103med.taxi`,
    description: post.excerpt,
  };
}

// 3. Страница статьи
export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* Кнопка назад */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-slate-500 hover:text-red-500 font-bold text-sm mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Всі статті
        </Link>

        {/* Заголовок */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-slate-400 text-xs font-bold flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-500 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Контент */}
        <div className="prose prose-slate prose-lg max-w-none bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          {/* Опасная вставка HTML (но безопасна, так как данные локальные) */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Призыв к действию */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Потрібна консультація?</h3>
          <p className="text-slate-400 mb-8">Наші диспетчери дадуть відповідь на всі питання щодо перевезення.</p>
          <a 
            href="tel:+380975539030" 
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition transform hover:-translate-y-1"
          >
            Зателефонувати диспетчеру
          </a>
        </div>
      </article>
    </main>
  );
}