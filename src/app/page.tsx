import { LocalBusinessSchema, ReviewSchema } from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <>
      <LocalBusinessSchema lang="uk" />
      <ReviewSchema lang="uk" />
      
      <main>
        {/* твой контент */}
      </main>
    </>
  );
}
