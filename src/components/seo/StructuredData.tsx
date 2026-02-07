'use client';

interface LocalBusinessSchemaProps {
  lang: 'uk' | 'ru';
}

export function LocalBusinessSchema({ lang }: LocalBusinessSchemaProps) {
  const isRu = lang === 'ru';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `https://103med.taxi${isRu ? '/ru' : ''}`,
    name: isRu 
      ? '103med.taxi - Медицинское такси Кривой Рог'
      : '103med.taxi - Медичне таксі Кривий Ріг',
    telephone: '+380970000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: isRu ? 'Кривой Рог' : 'Кривий Ріг',
      addressCountry: 'UA',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  lang: 'uk' | 'ru';
}

export function ReviewSchema({ lang }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '103med.taxi',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalServiceSchemaProps {
  query: any;
  lang: 'uk' | 'ru';
}

export function MedicalServiceSchema({ query, lang }: MedicalServiceSchemaProps) {
  const isRu = lang === 'ru';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isRu ? query.titleRu : query.titleUk,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{ q: string; a: string }>;
  lang: 'uk' | 'ru';
}

export function FAQSchema({ faqs, lang }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
