export interface Product {
  id: string
  article: string
  name: string
  category: string // matches Solution.slug
  price: number | null // null = "Цену уточняйте"
  currency: string
  status: "in_stock" | "coming_soon" | "out_of_stock"
  image: string | null
  brand: string
  description?: string
  specs?: { label: string; value: string }[]
}

// Mock product data — in production this comes from API
export const products: Product[] = [
  // Ультразвуковая диагностика
  {
    id: "1", article: "00000012243", name: "УЗИ аппарат Samsung R20", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "in_stock", image: null, brand: "Samsung",
    description: "Samsung R20 — это универсальный ультразвуковой аппарат премиум-класса с расширенными возможностями визуализации. Оснащён технологиями CrystalLive и S-Vue Transducer для получения высококачественных изображений. Идеально подходит для абдоминальных, кардиологических, акушерских и гинекологических исследований.\n\nАппарат обеспечивает превосходное качество визуализации благодаря передовой платформе обработки сигналов и интуитивно понятному интерфейсу.",
    specs: [
      { label: "Дисплей", value: "21.5\" LED + 13.3\" сенсорный экран" },
      { label: "Процессор", value: "Intel i7, 8 ГБ ОЗУ, 256 ГБ SSD" },
      { label: "Разъёмы для датчиков", value: "4 активных порта" },
      { label: "Режимы сканирования", value: "B, B/B, 4B, M, PW, CW, Duplex/Triplex, Directional PD" },
      { label: "Обработка изображений", value: "3D/4D, TDI, Auto IMT, Эластография, Панорамная визуализация" },
      { label: "Языки интерфейса", value: "Русский, Английский, Казахский" },
      { label: "Вес", value: "≈ 85 кг (с тележкой)" },
      { label: "Питание", value: "220В / 50Гц" },
    ],
  },
  {
    id: "2", article: "00000012244", name: "УЗИ сканер Samsung HS40", category: "ultrazvukovaya-diagnostika", price: 8500000, currency: "₸", status: "in_stock", image: null, brand: "Samsung",
    description: "Samsung HS40 — компактный и экономичный ультразвуковой сканер для ежедневных исследований в клиниках и больницах. Обеспечивает высокое качество изображения при доступной цене. Подходит для общей диагностики, акушерства, гинекологии и педиатрии.",
    specs: [
      { label: "Дисплей", value: "18.5\" LED монитор" },
      { label: "Разъёмы для датчиков", value: "3 активных порта" },
      { label: "Режимы", value: "B, B/B, 4B, M, PW, CW, CFM, PDI" },
      { label: "Измерения", value: "Абдоминальные, акушерские, гинекологические, урологические" },
      { label: "Глубина сканирования", value: "до 30 см" },
      { label: "Языки", value: "Русский, Английский" },
    ],
  },
  {
    id: "3", article: "00000012245", name: "УЗИ аппарат Mindray DC-70", category: "ultrazvukovaya-diagnostika", price: 12000000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Mindray DC-70 — ультразвуковая система экспертного класса с передовыми технологиями визуализации. Высокопроизводительная платформа с технологией формирования луча обеспечивает исключительную чёткость и детализацию изображения во всех режимах работы.\n\nПоддерживает широкий спектр клинических применений: от рутинных обследований до сложных кардиологических и акушерских исследований.",
    specs: [
      { label: "Дисплей", value: "21.5\" LED монитор высокого разрешения" },
      { label: "Процессор", value: "Intel i5, 8 ГБ ОЗУ, 256 ГБ SSD" },
      { label: "Разъёмы для датчиков", value: "4 активных порта с линейным коллектором" },
      { label: "Режимы", value: "B, M, PW, CW, PDI, Directional PD, 3D/4D/5D (HD live)" },
      { label: "Технологии", value: "iClear, iBeam, Auto IMT, эластография сдвиговой волной" },
      { label: "Хранение данных", value: "500 ГБ HDD + USB экспорт" },
      { label: "Размеры (Ш×Г×В)", value: "550 × 850 × 1350 мм" },
      { label: "Вес", value: "≈ 95 кг" },
    ],
  },
  { id: "4", article: "00000012246", name: "Портативный УЗИ Samsung HM70A", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Samsung" },
  {
    id: "5", article: "00000012247", name: "УЗИ аппарат GE Vivid S60N", category: "ultrazvukovaya-diagnostika", price: 15000000, currency: "₸", status: "in_stock", image: null, brand: "GE Healthcare",
    description: "GE Vivid S60N — специализированная ультразвуковая система для кардиологических исследований. Обеспечивает превосходную визуализацию сердечных структур и кровотока благодаря технологиям GE HealthCare.",
    specs: [
      { label: "Дисплей", value: "21.5\" Full HD LED" },
      { label: "Специализация", value: "Кардиология, сосудистые исследования" },
      { label: "Режимы", value: "2D, M-Mode, PW/CW Doppler, Color Flow, TDI, Strain" },
      { label: "Технологии", value: "AFI (Automated Function Imaging), 2D Strain" },
      { label: "Разъёмы для датчиков", value: "3 активных порта" },
      { label: "Языки", value: "Русский, Английский" },
    ],
  },
  { id: "6", article: "00000012248", name: "УЗИ сканер Philips EPIQ 7", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "in_stock", image: null, brand: "Philips" },

  // Кардиология
  {
    id: "10", article: "00000014347", name: "Электрокардиограф ЭК12Т-01-\"Р-Д\" с экраном 141мм", category: "kardiologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Р-Д",
    description: "12-канальный электрокардиограф с термопринтером и цветным LCD-дисплеем 141 мм. Предназначен для регистрации и анализа ЭКГ в покое. Автоматическая интерпретация результатов, встроенная память на 200 записей, экспорт данных через USB.",
    specs: [
      { label: "Количество каналов", value: "12 каналов" },
      { label: "Дисплей", value: "5.6\" цветной LCD (141 мм)" },
      { label: "Термопринтер", value: "Встроенный, ширина бумаги 110 мм" },
      { label: "Режимы записи", value: "Авто, ручной, ритм, R-R анализ" },
      { label: "Память", value: "200 записей ЭКГ" },
      { label: "Интерфейсы", value: "USB, LAN" },
      { label: "Питание", value: "Сеть 220В / встроенный аккумулятор" },
      { label: "Вес", value: "3.2 кг" },
    ],
  },
  {
    id: "11", article: "00000014348", name: "Холтеровская система Schiller Medilog FD12+", category: "kardiologiya", price: 2800000, currency: "₸", status: "in_stock", image: null, brand: "Schiller",
    description: "Система суточного мониторирования ЭКГ по Холтеру. Компактный регистратор с высокой точностью записи для выявления нарушений ритма, ишемии и анализа вариабельности сердечного ритма.",
    specs: [
      { label: "Каналы записи", value: "12 каналов" },
      { label: "Время записи", value: "до 7 суток" },
      { label: "Память", value: "Карта SD до 32 ГБ" },
      { label: "Анализ", value: "Аритмия, ST-сегмент, ВСР, ЧСС" },
      { label: "Вес регистратора", value: "75 г" },
      { label: "Программное обеспечение", value: "Darwin2 Professional" },
    ],
  },
  { id: "12", article: "00000014349", name: "Стресс-тест система BTL CardioPoint", category: "kardiologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "BTL" },
  {
    id: "13", article: "00000014350", name: "Монитор пациента Mindray BeneVision N15", category: "kardiologiya", price: 3200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Прикроватный монитор пациента BeneVision N15 с 15.6\" сенсорным экраном высокого разрешения. Модульная конструкция позволяет расширять функциональность в зависимости от клинических потребностей. Подходит для палат интенсивной терапии, операционных и отделений реанимации.",
    specs: [
      { label: "Дисплей", value: "15.6\" TFT сенсорный, разрешение 1920×1080" },
      { label: "Параметры мониторинга", value: "ЭКГ, SpO2, НИАД, ИАД, температура, дыхание, CO2" },
      { label: "Каналы ЭКГ", value: "3/5/12 отведений" },
      { label: "Тренды", value: "до 120 часов графических и табличных" },
      { label: "Тревоги", value: "Визуальные и звуковые, 3 уровня приоритета" },
      { label: "Интерфейсы", value: "LAN, Wi-Fi, USB, VGA" },
      { label: "Аккумулятор", value: "Литий-ионный, до 4 часов работы" },
      { label: "Размеры", value: "370 × 285 × 165 мм" },
    ],
  },
  { id: "14", article: "00000014351", name: "Дефибриллятор Nihon Kohden TEC-5631", category: "kardiologiya", price: 4500000, currency: "₸", status: "in_stock", image: null, brand: "Nihon Kohden" },

  // Офтальмология
  { id: "20", article: "00000015364", name: "Авторефкератометр URK-900F (Unicos Co.,Ltd., Южная Корея)", category: "oftalmologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Unicos" },
  { id: "21", article: "00000015411", name: "Щелевая лампа BL-88D (Bolan)", category: "oftalmologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Bolan" },
  { id: "22", article: "00000015412", name: "Офтальмоскоп Heine Beta 200", category: "oftalmologiya", price: 450000, currency: "₸", status: "in_stock", image: null, brand: "Heine" },
  { id: "23", article: "00000015413", name: "Периметр компьютерный AP-300 Tomey", category: "oftalmologiya", price: 6800000, currency: "₸", status: "coming_soon", image: null, brand: "Tomey" },

  // Оториноларингология
  { id: "30", article: "00000012370", name: "Лор-комбайн UE-3000 Plus (Medstar Co., Ltd, Южная Корея)", category: "otorinolaringologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Medstar" },
  { id: "31", article: "00000012371", name: "Аудиометр клинический AC-40 (Interacoustics)", category: "otorinolaringologiya", price: 3600000, currency: "₸", status: "in_stock", image: null, brand: "Interacoustics" },
  { id: "32", article: "00000012372", name: "Отоскоп Heine Mini 3000", category: "otorinolaringologiya", price: 85000, currency: "₸", status: "in_stock", image: null, brand: "Heine" },

  // Лаборатория
  {
    id: "40", article: "00000010724", name: "Анализатор гематологический Mindray BC-5000", category: "laboratoriya", price: 5200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Автоматический 5-diff гематологический анализатор для клинических лабораторий средней и высокой производительности. Использует технологию лазерного рассеивания и химического окрашивания для точной дифференциации лейкоцитов.",
    specs: [
      { label: "Тип анализа", value: "5-diff, 25 параметров + 2 гистограммы + 3 скатерограммы" },
      { label: "Производительность", value: "до 60 проб/час" },
      { label: "Объём пробы", value: "15 мкл (венозная) / 15 мкл (капиллярная)" },
      { label: "Подача проб", value: "Открытая / закрытая (автоподача)" },
      { label: "Дисплей", value: "10.4\" цветной сенсорный" },
      { label: "Память", value: "100 000 результатов" },
      { label: "Интерфейсы", value: "LAN, USB, RS-232, HL7/LIS" },
      { label: "Размеры", value: "590 × 530 × 550 мм" },
    ],
  },
  {
    id: "41", article: "00000010725", name: "Биохимический анализатор Mindray BS-240Pro", category: "laboratoriya", price: 8900000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Полностью автоматический биохимический анализатор для проведения широкого спектра исследований. Оптимизирован для лабораторий с умеренным и высоким потоком проб. Надёжная оптическая система и интуитивное программное обеспечение.",
    specs: [
      { label: "Производительность", value: "до 240 тестов/час" },
      { label: "Методы измерения", value: "Фотометрия, турбидиметрия" },
      { label: "Длины волн", value: "8 фиксированных (340–800 нм)" },
      { label: "Позиции реагентов", value: "80 охлаждаемых позиций" },
      { label: "Объём пробы", value: "2–45 мкл" },
      { label: "Ротор проб", value: "40 позиций" },
      { label: "ИСЕ модуль", value: "Опционально (Na+, K+, Cl−)" },
      { label: "Подключение к ЛИС", value: "HL7, RS-232, LAN" },
    ],
  },
  { id: "42", article: "00000010726", name: "Центрифуга лабораторная СМ-6М", category: "laboratoriya", price: 320000, currency: "₸", status: "in_stock", image: null, brand: "ELMI" },
  { id: "43", article: "00000010727", name: "Микроскоп бинокулярный Olympus CX23", category: "laboratoriya", price: 1100000, currency: "₸", status: "coming_soon", image: null, brand: "Olympus" },

  // Рентгенология
  {
    id: "50", article: "00000009001", name: "Рентген-аппарат Samsung GC85A", category: "rentgenologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Samsung",
    description: "Цифровая рентгенографическая система Samsung GC85A напольного типа. Высокочастотный генератор обеспечивает стабильное качество изображений при низкой дозе облучения. Современная система обработки изображений с функцией автоматического определения экспозиции.",
    specs: [
      { label: "Тип", value: "Напольная цифровая рентгенографическая система" },
      { label: "Генератор", value: "Высокочастотный, 80 кВт" },
      { label: "Диапазон кВ", value: "40–150 кВ" },
      { label: "Диапазон мА", value: "10–800 мА" },
      { label: "Детектор", value: "Плоскопанельный, 17\"×17\", беспроводной" },
      { label: "Разрешение детектора", value: "3072 × 3072 пикселей" },
      { label: "AED", value: "Автоматическое определение экспозиции (стандарт)" },
      { label: "Рабочая станция", value: "Samsung S-Vue" },
    ],
  },
  { id: "51", article: "00000009002", name: "Маммограф цифровой GE Senographe Pristina", category: "rentgenologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "GE Healthcare" },
  { id: "52", article: "00000009003", name: "С-дуга мобильная Ziehm Vision RFD", category: "rentgenologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Ziehm" },

  // Стерилизация
  { id: "60", article: "00000000738", name: "Облучатель бактерицидный ОБНП 2Х15-01 Генерис", category: "sterilizaciya", price: 19300, currency: "₸", status: "in_stock", image: null, brand: "Генерис" },
  {
    id: "61", article: "00000000226", name: "Стерилизатор паровой ГК-25-2 (ТЗМОИ)", category: "sterilizaciya", price: 850000, currency: "₸", status: "in_stock", image: null, brand: "ТЗМОИ",
    description: "Горизонтальный паровой стерилизатор для обработки медицинских инструментов, перевязочных материалов и лабораторной посуды. Полностью автоматический цикл стерилизации с электронным управлением и контролем параметров.",
    specs: [
      { label: "Объём камеры", value: "25 литров" },
      { label: "Тип загрузки", value: "Горизонтальный" },
      { label: "Температура стерилизации", value: "120°C / 132°C" },
      { label: "Давление", value: "до 0.21 МПа" },
      { label: "Управление", value: "Электронное, автоматический цикл" },
      { label: "Материал камеры", value: "Нержавеющая сталь AISI 316" },
      { label: "Питание", value: "220В / 50Гц, 2.5 кВт" },
      { label: "Размеры", value: "700 × 430 × 470 мм" },
    ],
  },
  { id: "62", article: "00000000227", name: "Облучатель-рециркулятор ДЕЗАР-4 (КРОНТ)", category: "sterilizaciya", price: 165000, currency: "₸", status: "in_stock", image: null, brand: "КРОНТ" },

  // Хирургия
  { id: "70", article: "00000008001", name: "Электрокоагулятор ЭХВЧ-80-03-«ФОТЕК»", category: "hirurgiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "ФОТЕК" },
  {
    id: "71", article: "00000008002", name: "Операционный стол Mindray HyBase 6100", category: "hirurgiya", price: 7500000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Электрогидравлический операционный стол для широкого спектра хирургических вмешательств. Модульная конструкция столешницы, точная регулировка положений и высокая грузоподъёмность обеспечивают комфорт пациенту и удобство хирургической бригаде.",
    specs: [
      { label: "Тип привода", value: "Электрогидравлический" },
      { label: "Размеры столешницы", value: "2100 × 520 мм" },
      { label: "Диапазон высоты", value: "680–1000 мм" },
      { label: "Наклон спинки", value: "0–80°" },
      { label: "Тренделенбург", value: "±30°" },
      { label: "Боковой наклон", value: "±20°" },
      { label: "Грузоподъёмность", value: "до 320 кг" },
      { label: "Аккумулятор", value: "Встроенный, до 50 операций на одном заряде" },
    ],
  },
  {
    id: "72", article: "00000008003", name: "Светильник хирургический Mindray HyLED 9700", category: "hirurgiya", price: 5200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Потолочный хирургический LED-светильник с высокой освещённостью и точной цветопередачей. Бестеневая конструкция обеспечивает равномерное освещение операционного поля. Интуитивное управление с панели и стерильной рукоятки.",
    specs: [
      { label: "Тип", value: "Потолочный LED (двухкупольный)" },
      { label: "Освещённость", value: "160 000 люкс" },
      { label: "Цветовая температура", value: "3700–5000 K (регулируемая)" },
      { label: "Индекс цветопередачи (Ra)", value: "≥ 97" },
      { label: "Глубина освещения", value: "≥ 700 мм" },
      { label: "Диаметр светового поля", value: "150–300 мм" },
      { label: "Срок службы LED", value: "60 000 часов" },
    ],
  },

  // Эндоскопия
  { id: "80", article: "00000007001", name: "Видеоэндоскопическая система Olympus EVIS X1", category: "endoskopiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Olympus" },
  { id: "81", article: "00000007002", name: "Видеогастроскоп Pentax EG-2990i", category: "endoskopiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Pentax" },

  // Анестезиология и реанимация
  {
    id: "90", article: "00000006001", name: "Аппарат ИВЛ Mindray SV800", category: "anesteziologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Высокопроизводительный аппарат искусственной вентиляции лёгких для взрослых, детей и новорожденных. Интуитивный интерфейс с 15\" сенсорным экраном, расширенные режимы вентиляции и встроенный мониторинг механики дыхания.",
    specs: [
      { label: "Дисплей", value: "15\" TFT сенсорный, разрешение 1024×768" },
      { label: "Категории пациентов", value: "Взрослые, дети, новорожденные" },
      { label: "Режимы вентиляции", value: "VCV, PCV, PRVC, SIMV, PSV, CPAP, BiLevel, APRV" },
      { label: "Дыхательный объём", value: "20–2500 мл" },
      { label: "Частота дыхания", value: "1–100 вдохов/мин" },
      { label: "FiO2", value: "21–100%" },
      { label: "Мониторинг", value: "Давление, поток, объём, петли, тренды, утечки" },
      { label: "Аккумулятор", value: "Встроенный, до 3 часов" },
    ],
  },
  {
    id: "91", article: "00000006002", name: "Наркозный аппарат Mindray A7", category: "anesteziologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Mindray",
    description: "Наркозно-дыхательный аппарат премиум-класса для проведения ингаляционной и внутривенной анестезии. Высокоточные электронные расходомеры и встроенный газовый анализатор обеспечивают безопасность и контроль во время операции.",
    specs: [
      { label: "Дисплей", value: "15\" TFT сенсорный" },
      { label: "Испарители", value: "2 слота (Sevoflurane, Isoflurane, Desflurane)" },
      { label: "Расходомер", value: "Электронный, O2 + N2O / Air" },
      { label: "Режимы вентиляции", value: "VCV, PCV, SIMV, PSV, Manual/Spont" },
      { label: "Дыхательный контур", value: "Циркуляционный с абсорбером CO2" },
      { label: "Газоанализатор", value: "Встроенный (O2, CO2, N2O, агенты)" },
      { label: "Мониторинг", value: "Давление, объём, поток, MAC, комплаенс" },
      { label: "Аккумулятор", value: "Встроенный, до 2 часов" },
    ],
  },
  { id: "92", article: "00000006003", name: "Монитор пациента Philips IntelliVue MX450", category: "anesteziologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Philips" },

  // Акушерство и гинекология
  { id: "100", article: "00000005001", name: "Видеокольпоскоп C6 Edan с тележкой", category: "akusherstvo-i-ginekologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Edan" },
  { id: "101", article: "00000005002", name: "Кресло гинекологическое КГ-06.П2", category: "akusherstvo-i-ginekologiya", price: 680000, currency: "₸", status: "in_stock", image: null, brand: "КМИЗ" },
  { id: "102", article: "00000005003", name: "Фетальный монитор Edan F9 Express", category: "akusherstvo-i-ginekologiya", price: 2100000, currency: "₸", status: "in_stock", image: null, brand: "Edan" },

  // Функциональная диагностика
  { id: "110", article: "00000004001", name: "Электроэнцефалограф Нейрон-Спектр-4/ВПМ", category: "funkcionalnaya-diagnostika", price: 4800000, currency: "₸", status: "in_stock", image: null, brand: "Нейрософт" },
  { id: "111", article: "00000004002", name: "Спирограф SpiroLab III (MIR)", category: "funkcionalnaya-diagnostika", price: 1200000, currency: "₸", status: "in_stock", image: null, brand: "MIR" },

  // Стоматология
  { id: "120", article: "00000003001", name: "Стоматологическая установка WOD 730", category: "stomatologiya", price: 3500000, currency: "₸", status: "in_stock", image: null, brand: "WOD" },
  { id: "121", article: "00000003002", name: "Радиовизиограф Vatech EzSensor HD", category: "stomatologiya", price: 2100000, currency: "₸", status: "in_stock", image: null, brand: "Vatech" },

  // Неонатология
  {
    id: "130", article: "00000002001", name: "Инкубатор для новорожденных YP-100 (Ningbo David)", category: "neonatologiya", price: 3200000, currency: "₸", status: "in_stock", image: null, brand: "David",
    description: "Инкубатор интенсивной терапии для выхаживания недоношенных и маловесных новорожденных. Система сервоуправления поддерживает стабильную температуру и влажность. Двойные стенки обеспечивают минимальные теплопотери.",
    specs: [
      { label: "Режимы управления", value: "По температуре воздуха / по температуре кожи (серво)" },
      { label: "Диапазон температуры", value: "25–37°C (±0.1°C)" },
      { label: "Влажность", value: "40–95% (с модулем увлажнения)" },
      { label: "Стенки купола", value: "Двойные, прозрачные" },
      { label: "Доступ к ребёнку", value: "4 боковых окна + 2 ирисовых порта" },
      { label: "Дисплей", value: "LCD с отображением параметров и тревог" },
      { label: "Матрас", value: "Регулируемый наклон (Тренделенбург)" },
      { label: "Вес", value: "≈ 85 кг" },
    ],
  },
  { id: "131", article: "00000002002", name: "Лампа фототерапии для новорожденных BT-400", category: "neonatologiya", price: 890000, currency: "₸", status: "in_stock", image: null, brand: "Ningbo David" },

  // Физиотерапия
  { id: "140", article: "00000001001", name: "Аппарат УВЧ-терапии УВЧ-80-04 (Новоанэма)", category: "fizioterapiya", price: 420000, currency: "₸", status: "in_stock", image: null, brand: "Новоанэма" },
  { id: "141", article: "00000001002", name: "Аппарат магнитотерапии АМТ-2 АГС", category: "fizioterapiya", price: 380000, currency: "₸", status: "in_stock", image: null, brand: "АГС" },

  // Косметология
  { id: "150", article: "00000016001", name: "Лазер косметологический Deka SmartXide DOT", category: "kosmetologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Deka" },
  { id: "151", article: "00000016002", name: "Аппарат RF-лифтинга Thermage FLX", category: "kosmetologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Solta Medical" },

  // Онкология
  { id: "160", article: "00000017001", name: "Система биопсии Bard Magnum", category: "onkologiya", price: 2400000, currency: "₸", status: "in_stock", image: null, brand: "Bard" },

  // Урология
  { id: "170", article: "00000018001", name: "Уродинамическая система MMS Solar Gold", category: "urologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "MMS" },
  { id: "171", article: "00000018002", name: "Литотриптер Dornier Compact Sigma", category: "urologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Dornier" },
]
