import { LocalBusinessSchema, ReviewSchema } from '@/components/seo/StructuredData';

export default function HomeRu() {
  return (
    <>
      <LocalBusinessSchema lang="ru" />
      <ReviewSchema lang="ru" />
      
      <main>
        {/* твой контент */}
      </main>
    </>
  );
}
