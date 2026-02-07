import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Пропускаємо статичні файли
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Визначаємо мову з куки або accept-language
  const cookieLang = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLanguage = request.headers.get('accept-language');
  
  // Якщо вже є /ru або /uk в URL - пропускаємо
  if (pathname.startsWith('/ru') || pathname.startsWith('/uk')) {
    return NextResponse.next();
  }

  // Визначаємо мову за замовчуванням
  let lang = 'uk';
  if (cookieLang === 'ru' || acceptLanguage?.includes('ru')) {
    lang = 'ru';
  }

  // Редирект на версію з мовою (окрім головної UK)
  if (lang === 'ru' && !pathname.startsWith('/ru')) {
    const url = request.nextUrl.clone();
    url.pathname = `/ru${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
