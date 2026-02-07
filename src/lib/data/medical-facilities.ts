export interface MedicalFacility {
  slug: string;
  type: 'hospital' | 'clinic' | 'diagnostic' | 'private';
  nameUk: string;
  nameRu: string;
  district: string; // slug району
  address: string;
  phone?: string;
  descriptionUk: string;
  descriptionRu: string;
  services: string[]; // МРТ, КТ, рентген, УЗД, аналізи
  workingHours: string;
  priceFrom: number;
  seoKeywordsUk: string[];
  seoKeywordsRu: string[];
  coordinates?: { lat: number; lng: number };
}

export const MEDICAL_FACILITIES: MedicalFacility[] = [
  // САКСАГАНСЬКИЙ РАЙОН
  {
    slug: 'mkl-2-saksaganskyi',
    type: 'hospital',
    nameUk: 'КНП "МКЛ №2"',
    nameRu: 'КНП "МГБ №2"',
    district: 'saksaganskyi',
    address: 'вул. Сталеварів, 37',
    phone: '+380564071234',
    descriptionUk: 'Медичне таксі до МКЛ №2 у Саксаганському районі. Швидке перевезення лежачих хворих з дому до лікарні та назад.',
    descriptionRu: 'Медицинское такси в МГБ №2 в Саксаганском районе. Быстрая перевозка лежачих больных.',
    services: ['Стаціонар', 'Приймальне відділення', 'Терапія', 'Хірургія'],
    workingHours: '24/7',
    priceFrom: 850,
    seoKeywordsUk: [
      'медтаксі мкл 2',
      'таксі до мкл 2 кривий ріг',
      'перевезення хворих мкл 2',
      'виписка з мкл 2',
    ],
    seoKeywordsRu: [
      'медтакси мгб 2',
      'такси в мгб 2 кривой рог',
      'перевозка больных мгб 2',
    ],
  },
  {
    slug: 'mkl-8-saksaganskyi',
    type: 'hospital',
    nameUk: 'КНП "МКЛ №8"',
    nameRu: 'КНП "МГБ №8"',
    district: 'saksaganskyi',
    address: 'вул. Дмитрія Яворницького, 41',
    phone: '+380564072345',
    descriptionUk: 'Медичне таксі до МКЛ №8. Перевезення лежачих хворих до пологового будинку, хірургічного та терапевтичного відділень.',
    descriptionRu: 'Медтакси в МГБ №8. Перевозка лежачих больных в роддом, хирургию.',
    services: ['Пологове відділення', 'Хірургія', 'Гінекологія', 'Реанімація'],
    workingHours: '24/7',
    priceFrom: 850,
    seoKeywordsUk: [
      'таксі до мкл 8',
      'медтаксі пологовий будинок',
      'перевезення вагітних кривий ріг',
    ],
    seoKeywordsRu: [
      'такси в мгб 8',
      'медтакси роддом кривой рог',
    ],
  },
  {
    slug: 'ozon-mrt-saksaganskyi',
    type: 'diagnostic',
    nameUk: 'МРТ центр "Озон"',
    nameRu: 'МРТ центр "Озон"',
    district: 'saksaganskyi',
    address: 'ТРЦ "Озон", просп. Гагаріна',
    phone: '+380564073456',
    descriptionUk: 'Медичне таксі на МРТ до центру "Озон". Супровід на дослідження, очікування, повернення додому.',
    descriptionRu: 'Медтакси на МРТ в центр "Озон". Сопровождение на обследование.',
    services: ['МРТ головного мозку', 'МРТ хребта', 'МРТ суглобів', 'МРТ органів'],
    workingHours: '08:00 - 20:00',
    priceFrom: 1000,
    seoKeywordsUk: [
      'таксі на мрт озон',
      'перевезення на мрт кривий ріг',
      'медтаксі мрт',
    ],
    seoKeywordsRu: [
      'такси на мрт озон',
      'перевозка на мрт кривой рог',
    ],
  },

  // ЦЕНТРАЛЬНО-МІСЬКИЙ РАЙОН
  {
    slug: 'mkl-1-tsentralnyi',
    type: 'hospital',
    nameUk: 'КНП "МКЛ №1"',
    nameRu: 'КНП "МГБ №1"',
    district: 'tsentralno-miskyi',
    address: 'пл. Радянська, 3',
    phone: '+380564074567',
    descriptionUk: 'Медичне таксі до МКЛ №1 у центрі міста. Перевезення лежачих хворих до найбільшої лікарні Кривого Рогу.',
    descriptionRu: 'Медтакси в МГБ №1 в центре города. Перевозка в крупнейшую больницу.',
    services: ['Травматологія', 'Кардіологія', 'Неврологія', 'Реанімація', 'ВІТ'],
    workingHours: '24/7',
    priceFrom: 850,
    seoKeywordsUk: [
      'таксі до мкл 1',
      'медтаксі центральна лікарня',
      'перевезення хворих мкл 1',
    ],
    seoKeywordsRu: [
      'такси в мгб 1',
      'медтакси центральная больница',
    ],
  },
  {
    slug: 'mkl-5-tsentralnyi',
    type: 'hospital',
    nameUk: 'КНП "МКЛ №5"',
    nameRu: 'КНП "МГБ №5"',
    district: 'tsentralno-miskyi',
    address: 'вул. Пушкіна, 25',
    phone: '+380564075678',
    descriptionUk: 'Медичне таксі до МКЛ №5. Перевезення до інфекційного відділення, туберкульозного диспансеру.',
    descriptionRu: 'Медтакси в МГБ №5. Перевозка в инфекционное отделение.',
    services: ['Інфекційне відділення', 'Туберкульоз', 'Пульмонологія'],
    workingHours: '24/7',
    priceFrom: 850,
    seoKeywordsUk: [
      'таксі до мкл 5',
      'медтаксі інфекційна лікарня',
    ],
    seoKeywordsRu: [
      'такси в мгб 5',
      'медтакси инфекционная больница',
    ],
  },
  {
    slug: 'lotos-kt-tsentralnyi',
    type: 'diagnostic',
    nameUk: 'Клініка "Лотос" - КТ центр',
    nameRu: 'Клиника "Лотос" - КТ центр',
    district: 'tsentralno-miskyi',
    address: 'вул. Володимира Великого, 2',
    phone: '+380564076789',
    descriptionUk: 'Медтаксі на КТ до клініки "Лотос". Комп\'ютерна томографія з медичним супроводом.',
    descriptionRu: 'Медтакси на КТ в клинику "Лотос". Компьютерная томография с сопровождением.',
    services: ['КТ органів грудної клітки', 'КТ черевної порожнини', 'КТ головного мозку', 'КТ з контрастом'],
    workingHours: '08:00 - 18:00',
    priceFrom: 1000,
    seoKeywordsUk: [
      'таксі на кт лотос',
      'перевезення на комп\'ютерну томографію',
      'медтаксі кт кривий ріг',
    ],
    seoKeywordsRu: [
      'такси на кт лотос',
      'перевозка на компьютерную томографию',
    ],
  },

  // ДОВГИНЦІВСЬКИЙ РАЙОН
  {
    slug: 'mkl-7-dovhyntsivskyi',
    type: 'hospital',
    nameUk: 'КНП "МКЛ №7"',
    nameRu: 'КНП "МГБ №7"',
    district: 'dovhyntsivskyi',
    address: 'вул. Будівельників, 2',
    phone: '+380564077890',
    descriptionUk: 'Медичне таксі до МКЛ №7 у Довгинцеві. Перевезення з Довгинцівського району до лікарні.',
    descriptionRu: 'Медтакси в МГБ №7 в Долгинцево. Перевозка из Долгинцевского района.',
    services: ['Терапія', 'Хірургія', 'Стаціонар'],
    workingHours: '24/7',
    priceFrom: 900,
    seoKeywordsUk: [
      'таксі до мкл 7 довгинцево',
      'медтаксі довгинцівська лікарня',
    ],
    seoKeywordsRu: [
      'такси в мгб 7 долгинцево',
      'медтакси долгинцевская больница',
    ],
  },
  {
    slug: 'katran-medcenter-dovhyntsivskyi',
    type: 'clinic',
    nameUk: 'Медичний центр "Катран"',
    nameRu: 'Медицинский центр "Катран"',
    district: 'dovhyntsivskyi',
    address: 'ТРЦ "Катран", просп. Миру',
    phone: '+380564078901',
    descriptionUk: 'Медтаксі до медцентру "Катран". УЗД, аналізи, консультації спеціалістів.',
    descriptionRu: 'Медтакси в медцентр "Катран". УЗИ, анализы, консультации.',
    services: ['УЗД', 'Аналізи', 'Консультації', 'ЕКГ'],
    workingHours: '09:00 - 19:00',
    priceFrom: 900,
    seoKeywordsUk: [
      'таксі до катран медцентр',
      'перевезення на узд довгинцево',
    ],
    seoKeywordsRu: [
      'такси в катран медцентр',
    ],
  },

  // ТЕРНІВСЬКИЙ РАЙОН
  {
    slug: 'ternivska-likarniya',
    type: 'hospital',
    nameUk: 'Тернівська лікарня',
    nameRu: 'Терновская больница',
    district: 'ternivskyi',
    address: 'вул. Металургів, 52',
    phone: '+380564079012',
    descriptionUk: 'Медичне таксі до Тернівської лікарні. Перевезення з Тернівки до стаціонару.',
    descriptionRu: 'Медтакси в Терновскую больницу. Перевозка из Терновки.',
    services: ['Стаціонар', 'Приймальне відділення', 'Поліклініка'],
    workingHours: '24/7',
    priceFrom: 950,
    seoKeywordsUk: [
      'таксі тернівська лікарня',
      'медтаксі тернівка',
    ],
    seoKeywordsRu: [
      'такси терновская больница',
    ],
  },

  // ІНГУЛЕЦЬКИЙ РАЙОН
  {
    slug: 'inhuletska-rayon-likarniya',
    type: 'hospital',
    nameUk: 'Інгулецька районна лікарня',
    nameRu: 'Ингулецкая районная больница',
    district: 'inhuletskyi',
    address: 'вул. Криворізька, 103',
    phone: '+380564080123',
    descriptionUk: 'Медтаксі до Інгулецької лікарні. Перевезення з Інгульця до медзакладу.',
    descriptionRu: 'Медтакси в Ингулецкую больницу. Перевозка из Ингульца.',
    services: ['Стаціонар', 'Поліклініка', 'Швидка допомога'],
    workingHours: '24/7',
    priceFrom: 900,
    seoKeywordsUk: [
      'таксі інгулецька лікарня',
      'медтаксі інгулець',
    ],
    seoKeywordsRu: [
      'такси ингулецкая больница',
    ],
  },

  // Приватні клініки та діагностичні центри
  {
    slug: 'suchasni-tehnologii-mrt',
    type: 'diagnostic',
    nameUk: 'МРТ центр "Сучасні технології"',
    nameRu: 'МРТ центр "Современные технологии"',
    district: 'saksaganskyi',
    address: 'просп. Соборності, 14',
    phone: '+380564081234',
    descriptionUk: 'Медтаксі на МРТ до центру "Сучасні технології". Найсучасніше обладнання 3 Тесла.',
    descriptionRu: 'Медтакси на МРТ в центр "Современные технологии". Современное оборудование.',
    services: ['МРТ 3 Тесла', 'МРТ відкритого типу', 'МРТ з контрастом'],
    workingHours: '08:00 - 20:00',
    priceFrom: 1000,
    seoKeywordsUk: [
      'таксі на мрт сучасні технології',
      'перевезення на мрт 3 тесла',
    ],
    seoKeywordsRu: [
      'такси на мрт современные технологии',
    ],
  },
  {
    slug: 'avicenna-private-clinic',
    type: 'private',
    nameUk: 'Приватна клініка "Авіценна"',
    nameRu: 'Частная клиника "Авиценна"',
    district: 'tsentralno-miskyi',
    address: 'вул. Пушкіна, 44',
    phone: '+380564082345',
    descriptionUk: 'Медтаксі до клініки "Авіценна". Консультації, обстеження, стаціонар.',
    descriptionRu: 'Медтакси в клинику "Авиценна". Консультации, обследования.',
    services: ['Консультації', 'УЗД', 'Аналізи', 'Стаціонар', 'Операції'],
    workingHours: '08:00 - 20:00',
    priceFrom: 850,
    seoKeywordsUk: [
      'таксі клініка авіценна',
      'медтаксі приватна клініка',
    ],
    seoKeywordsRu: [
      'такси клиника авиценна',
    ],
  },
];
