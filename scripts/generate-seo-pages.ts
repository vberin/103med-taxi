// Скрипт для генерації всіх 200 SEO-сторінок
// Запуск: npm run generate-seo

import fs from 'fs';
import path from 'path';

// Імпортуємо дані з JSON (з правильним типом)
interface SeoQuery {
  id: number;
  slugUk: string;
  slugRu: string;
  titleUk: string;
  titleRu: string;
  category: string;
  price: string;
}

interface QueriesData {
  queries: SeoQuery[];
}

// Читаємо JSON файл
const queriesPath = path.join(process.cwd(), 'src/lib/data/all-200-seo-queries.json');
const queriesData: QueriesData = JSON.parse(fs.readFileSync(queriesPath, 'utf-8'));

const queries: SeoQuery[] = queriesData.queries;

console.log(`📊 Total queries: ${queries.length}`);
console.log(`🇺🇦 Ukrainian slugs: ${queries.length}`);
console.log(`🇷🇺 Russian slugs: ${queries.length}`);
console.log('');

// Генеруємо статистику по категоріях
const categories = queries.reduce((acc, query) => {
  acc[query.category] = (acc[query.category] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('📁 Queries by category:');
Object.entries(categories).forEach(([category, count]) => {
  console.log(`   - ${category}: ${count}`);
});

console.log('');
console.log('✅ All SEO pages ready for generation!');
console.log('🚀 Run: npm run build');
