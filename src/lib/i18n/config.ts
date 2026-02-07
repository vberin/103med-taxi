export const locales = ['uk', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uk';

export const localeNames: Record<Locale, string> = {
  uk: 'Українська',
  ru: 'Русский',
};
