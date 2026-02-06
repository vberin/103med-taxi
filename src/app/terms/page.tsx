import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Умови використання | 103med.taxi',
  description: 'Правила користування сервісом медичного таксі.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Умови використання</h1>
        <div className="prose prose-slate lg:prose-lg bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <h3>1. Предмет угоди</h3>
          <p>
            Сайт надає інформаційні послуги та можливість замовлення спеціалізованого транспорту для перевезення хворих.
          </p>
          
          <h3>2. Відмова від відповідальності</h3>
          <p>
            Ми не є службою швидкої медичної допомоги. У екстрених випадках, що загрожують життю, телефонуйте 103. Наші послуги є плановими.
          </p>

          <h3>3. Вартість послуг</h3>
          <p>
            Розрахунок вартості на сайті є орієнтовним. Остаточна ціна узгоджується з диспетчером та залежить від стану пацієнта, поверху, наявності ліфта та інших факторів.
          </p>
        </div>
      </div>
    </main>
  );
}