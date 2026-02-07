import { LocalBusinessSchema, ReviewSchema } from '@/components/seo/StructuredData';
// Исправленные пути:
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Equipment from '@/components/home/Equipment';
import Diagnoses from '@/components/home/Diagnoses';
import Routes from '@/components/home/Routes';
import Reviews from '@/components/home/Reviews';
import FAQ from '@/components/home/FAQ';
import Blog from '@/components/home/Blog';
import SeoText from '@/components/home/SeoText';

// Если файл Features.tsx тоже лежит в home, замените строку выше на:
// import Features from '@/components/home/Features';

export default function Home() {
  return (
    <>
      {/* Если этих компонентов нет, закомментируйте две строки ниже */}
      <LocalBusinessSchema lang="uk" />
      <ReviewSchema lang="uk" />
      
      <Hero />
      <Features />
      <Services />
      <Process />
      <Equipment />
      <Diagnoses />
      <Routes />
      <Reviews />
      <FAQ />
      <Blog />
      <SeoText />
    </>
  );
}