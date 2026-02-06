import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const posts = [
    {
      title: 'Як підготуватися до виписки з лікарні?',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Post+1',
      link: '/blog/post-hospital-discharge'
    },
    {
      title: 'Особливості перевезення на далекі відстані',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Post+2',
      link: '/blog/post-long-distance'
    },
    {
      title: 'Безпека та обладнання наших авто',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Post+3',
      link: '/blog/post-safety'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Корисна інформація</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
              <Link href={post.link}>
                <Image
                  src={post.image}
                  alt={`Ілюстрація до статті: ${post.title} - професійні медичні послуги`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{post.title}</h3>
                  <div className="text-primary font-semibold">Читати статтю →</div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn btn-outline">Всі статті блогу</Link>
        </div>
      </div>
    </section>
  )
}