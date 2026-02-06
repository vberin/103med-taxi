export const DISTRICTS = [
  { slug: 'saksahanskyi', name: 'Саксаганський', nameRu: 'Саксаганский', priceMod: 1.0 },
  { slug: 'pokrovskyi', name: 'Покровський', nameRu: 'Покровский', priceMod: 1.1 },
  { slug: 'central-city', name: 'Центрально-Міський', nameRu: 'Центрально-Городской', priceMod: 1.05 },
  { slug: 'metallurgical', name: 'Металургійний', nameRu: 'Металлургический', priceMod: 1.0 },
  { slug: 'ternivskyi', name: 'Тернівський', nameRu: 'Терновской', priceMod: 1.4 }, // Far North
  { slug: 'inguletskyi', name: 'Інгулецький', nameRu: 'Ингулецкий', priceMod: 1.5 }, // Far South
  { slug: 'dolgintsevskyi', name: 'Довгинцівський', nameRu: 'Долгинцевский', priceMod: 1.1 }, // Train Station area
];

export const HOSPITALS = [
  { slug: 'tysyachka', name: 'Міська лікарня №2 ("Тисячка")', address: 'майдан 30-річчя Перемоги, 2' },
  { slug: 'onco', name: 'Онкологічний диспансер', address: 'Дніпровське шосе, 41' },
  { slug: 'trauma-1', name: 'Міська лікарня №1', address: 'вул. Святогеоргіївська' },
  { slug: 'hospital-16', name: 'Міська лікарня №16 (Мусоргського)', address: 'вул. Мусоргського, 32', district: 'Покровський' },
  { slug: 'damansky', name: 'Міська лікарня №8 (Даманський)', address: 'вул. Сергія Параджанова, 2', district: 'Тернівський' },
];

export type District = typeof DISTRICTS[0];
export type Hospital = typeof HOSPITALS[0];