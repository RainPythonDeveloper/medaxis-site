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
  { id: "1", article: "00000012243", name: "УЗИ аппарат Samsung R20", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "in_stock", image: null, brand: "Samsung" },
  { id: "2", article: "00000012244", name: "УЗИ сканер Samsung HS40", category: "ultrazvukovaya-diagnostika", price: 8500000, currency: "₸", status: "in_stock", image: null, brand: "Samsung" },
  { id: "3", article: "00000012245", name: "УЗИ аппарат Mindray DC-70", category: "ultrazvukovaya-diagnostika", price: 12000000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
  { id: "4", article: "00000012246", name: "Портативный УЗИ Samsung HM70A", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Samsung" },
  { id: "5", article: "00000012247", name: "УЗИ аппарат GE Vivid S60N", category: "ultrazvukovaya-diagnostika", price: 15000000, currency: "₸", status: "in_stock", image: null, brand: "GE Healthcare" },
  { id: "6", article: "00000012248", name: "УЗИ сканер Philips EPIQ 7", category: "ultrazvukovaya-diagnostika", price: null, currency: "₸", status: "in_stock", image: null, brand: "Philips" },

  // Кардиология
  { id: "10", article: "00000014347", name: "Электрокардиограф ЭК12Т-01-\"Р-Д\" с экраном 141мм", category: "kardiologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Р-Д" },
  { id: "11", article: "00000014348", name: "Холтеровская система Schiller Medilog FD12+", category: "kardiologiya", price: 2800000, currency: "₸", status: "in_stock", image: null, brand: "Schiller" },
  { id: "12", article: "00000014349", name: "Стресс-тест система BTL CardioPoint", category: "kardiologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "BTL" },
  { id: "13", article: "00000014350", name: "Монитор пациента Mindray BeneVision N15", category: "kardiologiya", price: 3200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
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
  { id: "40", article: "00000010724", name: "Анализатор гематологический Mindray BC-5000", category: "laboratoriya", price: 5200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
  { id: "41", article: "00000010725", name: "Биохимический анализатор Mindray BS-240Pro", category: "laboratoriya", price: 8900000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
  { id: "42", article: "00000010726", name: "Центрифуга лабораторная СМ-6М", category: "laboratoriya", price: 320000, currency: "₸", status: "in_stock", image: null, brand: "ELMI" },
  { id: "43", article: "00000010727", name: "Микроскоп бинокулярный Olympus CX23", category: "laboratoriya", price: 1100000, currency: "₸", status: "coming_soon", image: null, brand: "Olympus" },

  // Рентгенология
  { id: "50", article: "00000009001", name: "Рентген-аппарат Samsung GC85A", category: "rentgenologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Samsung" },
  { id: "51", article: "00000009002", name: "Маммограф цифровой GE Senographe Pristina", category: "rentgenologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "GE Healthcare" },
  { id: "52", article: "00000009003", name: "С-дуга мобильная Ziehm Vision RFD", category: "rentgenologiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Ziehm" },

  // Стерилизация
  { id: "60", article: "00000000738", name: "Облучатель бактерицидный ОБНП 2Х15-01 Генерис", category: "sterilizaciya", price: 19300, currency: "₸", status: "in_stock", image: null, brand: "Генерис" },
  { id: "61", article: "00000000226", name: "Стерилизатор паровой ГК-25-2 (ТЗМОИ)", category: "sterilizaciya", price: 850000, currency: "₸", status: "in_stock", image: null, brand: "ТЗМОИ" },
  { id: "62", article: "00000000227", name: "Облучатель-рециркулятор ДЕЗАР-4 (КРОНТ)", category: "sterilizaciya", price: 165000, currency: "₸", status: "in_stock", image: null, brand: "КРОНТ" },

  // Хирургия
  { id: "70", article: "00000008001", name: "Электрокоагулятор ЭХВЧ-80-03-«ФОТЕК»", category: "hirurgiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "ФОТЕК" },
  { id: "71", article: "00000008002", name: "Операционный стол Mindray HyBase 6100", category: "hirurgiya", price: 7500000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
  { id: "72", article: "00000008003", name: "Светильник хирургический Mindray HyLED 9700", category: "hirurgiya", price: 5200000, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },

  // Эндоскопия
  { id: "80", article: "00000007001", name: "Видеоэндоскопическая система Olympus EVIS X1", category: "endoskopiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Olympus" },
  { id: "81", article: "00000007002", name: "Видеогастроскоп Pentax EG-2990i", category: "endoskopiya", price: null, currency: "₸", status: "coming_soon", image: null, brand: "Pentax" },

  // Анестезиология и реанимация
  { id: "90", article: "00000006001", name: "Аппарат ИВЛ Mindray SV800", category: "anesteziologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
  { id: "91", article: "00000006002", name: "Наркозный аппарат Mindray A7", category: "anesteziologiya", price: null, currency: "₸", status: "in_stock", image: null, brand: "Mindray" },
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
  { id: "130", article: "00000002001", name: "Инкубатор для новорожденных YP-100 (Ningbo David)", category: "neonatologiya", price: 3200000, currency: "₸", status: "in_stock", image: null, brand: "David" },
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
