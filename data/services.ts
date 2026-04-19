import type { Locale } from "@/lib/i18n";

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  img: string;
  faq: {
    ru: ServiceFaqItem[];
    uz: ServiceFaqItem[];
  };
  translations: {
    ru: ServiceTranslation;
    uz: ServiceTranslation;
  };
}

export interface ServiceTranslation {
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  price: string;
  metaTitle: string;
  metaDesc: string;
}

export const servicesData: Service[] = [
  {
    id: "professionalnaya-uborka",
    img: "/images/service-apartment.png",
    translations: {
      ru: {
        title: "Профессиональная уборка",
        category: "Помещения",
        shortDesc:
          "Регулярная и разовая уборка жилых и коммерческих помещений.",
        fullDesc:
          "Мы предоставляем профессиональные услуги уборки квартир, домов и офисов. Наши специалисты используют премиальную гипоаллергенную химию и оборудование Karcher, чтобы ваше пространство сияло чистотой. Работаем быстро, качественно и с гарантией результата.",
        includes: [
          "Удаление пыли и грязи",
          "Влажная и сухая уборка",
          "Чистка санузлов",
          "Вынос мусора",
        ],
        price: "от 25.000 за 1 Кв М",
        metaTitle: "Уборка квартир и офисов в Ташкенте — GrandClean",
        metaDesc:
          "Профессиональная уборка квартир, домов и офисов в Ташкенте. Оборудование Karcher, гипоаллергенная химия. Цена от 25 000 за м². Звоните: +998 93 571 21 51.",
      },
      uz: {
        title: "Professional tozalash",
        category: "Xonalar",
        shortDesc:
          "Turar-joy va tijorat binolarini muntazam va bir martalik tozalash.",
        fullDesc:
          "Kvartira, uy va ofislarni professional tozalash xizmatlarini ko'rsatamiz. Mutaxassislarimiz premium gipoallergen kimyo va Karcher jihozlaridan foydalanadi. Tez, sifatli va kafolat bilan ishlaymiz.",
        includes: [
          "Chang va kirlni yo'q qilish",
          "Ho'l va quruq tozalash",
          "Sanitariya tugunini tozalash",
          "Axlatni olib chiqish",
        ],
        price: "25 000 so'mdan 1 m² uchun",
        metaTitle: "Toshkentda kvartira va ofislarni tozalash — GrandClean",
        metaDesc:
          "Toshkentda kvartira, uy va ofislarni professional tozalash. Karcher jihozlari, gipoallergen kimyo. Narx 25 000 so'mdan m². Qo'ng'iroq: +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Сколько времени занимает уборка квартиры в Ташкенте?",
          answer:
            "Стандартная уборка квартиры площадью 50–70 м² занимает 2–3 часа. Генеральная уборка той же площади — от 4 до 6 часов.",
        },
        {
          question: "Нужно ли предоставлять свою химию и оборудование?",
          answer:
            "Нет, GrandClean приедет со всем необходимым: профессиональным оборудованием Karcher и сертифицированными эко-средствами.",
        },
        {
          question: "Делаете ли вы уборку после ремонта?",
          answer:
            "Да, уборка после ремонта — одна из наших специализаций. Удаляем строительную пыль, цементные разводы, клей с покрытий.",
        },
        {
          question: "Гарантируете ли вы качество уборки?",
          answer:
            "Да. Если в течение 24 часов после работы вы найдёте недочёты, мы вернёмся и всё исправим бесплатно.",
        },
      ],
      uz: [
        {
          question: "Toshkentda kvartira tozalash qancha vaqt oladi?",
          answer:
            "50–70 m² kvartira standart tozalash 2–3 soat. Bosh tozalash — 4 dan 6 soatgacha.",
        },
        {
          question: "O'z kimyoni va jihozlarni taqdim etish kerakmi?",
          answer:
            "Yo'q, GrandClean barcha kerakli narsa bilan keladi: Karcher jihozlari va sertifikatlangan eko-vositalar.",
        },
        {
          question: "Ta'mirdan keyin tozalash xizmatini ko'rsatasizmi?",
          answer:
            "Ha, ta'mirdan keyin tozalash — bizning ixtisoslarimizdan biri. Qurilish changini, tsement izlarini, yapishqoqni olib tashlaymiz.",
        },
        {
          question: "Tozalash sifatini kafolatlaysizmi?",
          answer:
            "Ha. Ishdan keyin 24 soat ichida kamchilik topilsa, bepul qayta kelib tuzatamiz.",
        },
      ],
    },
  },
  {
    id: "stirka-kovrov",
    img: "/images/service-carpet.png",
    translations: {
      ru: {
        title: "Стирка ковров",
        category: "Специальные",
        shortDesc: "Профессиональная стирка ковров с вывозом и доставкой.",
        fullDesc:
          "Фабричная стирка ковров по турецкой технологии. Мы сами заберём ваш ковёр, постираем его с использованием роторных машин и специализированных шампуней, высушим в специальной камере и привезём обратно свежим и чистым.",
        includes: [
          "Вывоз и бесплатная доставка",
          "Глубокая стирка ротором",
          "Удаление стойких пятен",
          "Сушка в спецкамере",
        ],
        price: "от 15.000 сум",
        metaTitle: "Стирка ковров в Ташкенте с доставкой — GrandClean",
        metaDesc:
          "Фабричная стирка ковров в Ташкенте по турецкой технологии. Бесплатный вывоз и доставка. Цена от 15 000 сум. ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Gilam yuvish",
        category: "Maxsus",
        shortDesc:
          "Olib ketish va yetkazib berish bilan professional gilam yuvish.",
        fullDesc:
          "Turk texnologiyasi bo'yicha fabrika usulida gilam yuvish. Gilamingizni o'zimiz olib ketamiz, rotor mashinalar va maxsus shampunlar bilan yuvik, maxsus kamerada quritib, yangi va toza holda qaytarib olib kelamiz.",
        includes: [
          "Olib ketish va bepul yetkazib berish",
          "Rotor bilan chuqur yuvish",
          "Qo'shni dog'larni olib tashlash",
          "Maxsus kamerada quritish",
        ],
        price: "15 000 so'mdan",
        metaTitle: "Toshkentda gilam yuvish yetkazib berish bilan — GrandClean",
        metaDesc:
          "Toshkentda turk texnologiyasi bo'yicha fabrika usulida gilam yuvish. Bepul olib ketish va yetkazib berish. Narx 15 000 so'mdan. ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Как долго стираете ковёр?",
          answer:
            "Полный цикл — приемка, стирка, сушка и доставка — занимает от 3 до 5 рабочих дней.",
        },
        {
          question: "Выводите ли вы застарелые пятна и запахи?",
          answer:
            "Да, используем ферментные шампуни, которые расщепляют пятна от мочи животных, вина, еды.",
        },
        {
          question: "Бесплатна ли доставка ковра обратно?",
          answer: "Вывоз и доставка в пределах Ташкента бесплатны.",
        },
        {
          question: "Стираете ли вы ковры из натуральной шерсти и шёлка?",
          answer:
            "Да, работаем со всеми видами материалов — синтетика, шерсть, вискоза, шёлк.",
        },
      ],
      uz: [
        {
          question: "Gilamni necha kunda yuvib berasiz?",
          answer:
            "To'liq tsikl — qabul, yuvish, quritish va yetkazib berish — 3 dan 5 ish kunigacha davom etadi.",
        },
        {
          question: "Eski dog'lar va hidlarni olib tashlaysizmi?",
          answer:
            "Ha, hayvon siydigi, vino, oziq-ovqat dog'larini parchalovchi ferment shampunlardan foydalanamiz.",
        },
        {
          question: "Gilamni qaytarib yetkazib berish bepulmi?",
          answer: "Toshkent doirasida olib ketish va yetkazib berish bepul.",
        },
        {
          question: "Tabiiy jun va ipak gilamlarni yuvasizmi?",
          answer:
            "Ha, barcha turdagi materiallar — sintetika, jun, viskoza, ipak bilan ishlaymiz.",
        },
      ],
    },
  },
  {
    id: "himchistka-mebeli",
    img: "/images/service-sofa.png",
    translations: {
      ru: {
        title: "Химчистка мебели",
        category: "Специальные",
        shortDesc: "Глубокая химчистка диванов, кресел, матрасов и ковров.",
        fullDesc:
          "Профессиональная химчистка вернет вашей мебели первоначальный вид. Удаляем сложные пятна, засаленности, запахи домашних животных и пылевых клещей. Используем мощные экстракторы и безопасную химию.",
        includes: [
          "Диваны и кресла",
          "Матрасы",
          "Ковры и ковролин",
          "Удаление пятен и запахов",
        ],
        price: "от 50.000 сум",
        metaTitle: "Химчистка дивана и мебели в Ташкенте — GrandClean",
        metaDesc:
          "Профессиональная химчистка диванов, кресел, матрасов в Ташкенте. Удаляем любые пятна и запахи. Цена от 50 000 сум. ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Mebel kimyoviy tozalash",
        category: "Maxsus",
        shortDesc:
          "Divan, kreslo, matras va gilamlarni chuqur kimyoviy tozalash.",
        fullDesc:
          "Professional kimyoviy tozalash mebelingizni dastlabki ko'rinishiga qaytaradi. Murakkab dog'lar, yog'li izlar, uy hayvonlari hidlari va chang kanalarini yo'q qilamiz.",
        includes: [
          "Divan va kreslolar",
          "Matraslar",
          "Gilam va gilamcha",
          "Dog' va hidlarni olib tashlash",
        ],
        price: "50 000 so'mdan",
        metaTitle: "Toshkentda divan va mebel kimyoviy tozalash — GrandClean",
        metaDesc:
          "Toshkentda divan, kreslo, matraslarni professional kimyoviy tozalash. Har qanday dog' va hidlarni olib tashlaymiz. Narx 50 000 so'mdan. ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Сколько сохнет диван после химчистки?",
          answer: "В среднем 4–6 часов при хорошей вентиляции.",
        },
        {
          question: "Химчистка безопасна для детей и аллергиков?",
          answer:
            "Абсолютно. Работаем только с гипоаллергенными препаратами серии Chemspec и HG.",
        },
        {
          question: "Можно ли заказать химчистку на дому?",
          answer:
            "Да, приезжаем со всем необходимым оборудованием прямо к вам.",
        },
        {
          question: "Удалите ли вы запах животных из матраса?",
          answer:
            "Да. Используем ферментные нейтрализаторы запаха, которые разрушают молекулы запаха.",
        },
      ],
      uz: [
        {
          question: "Kimyoviy tozalashdan keyin divan qancha qurishadi?",
          answer: "Yaxshi shamollatilgan xonada o'rtacha 4–6 soat.",
        },
        {
          question: "Kimyoviy tozalash bolalar va allergiklar uchun xavfsizmi?",
          answer:
            "Mutlaqo. Faqat Chemspec va HG seriyali gipoallergen preparatlar bilan ishlaymiz.",
        },
        {
          question: "Uyda kimyoviy tozalashni buyurtma qilish mumkinmi?",
          answer:
            "Ha, barcha kerakli jihozlar bilan to'g'ridan-to'g'ri sizning uyingizga kelamiz.",
        },
        {
          question: "Matrasdan hayvon hidini olib tashlaysizmi?",
          answer:
            "Ha. Hid molekulalarini yo'q qiluvchi ferment neytralizatorlaridan foydalanamiz.",
        },
      ],
    },
  },
  {
    id: "moyka-okon",
    img: "/images/moyka-okon.png",
    translations: {
      ru: {
        title: "Мойка окон",
        category: "Фасады и экстерьер",
        shortDesc: "Профессиональное мытьё окон на любой высоте без разводов.",
        fullDesc:
          "Обеспечиваем кристальную чистоту ваших окон. Моем стеклопакеты с обеих сторон, очищаем рамы, подоконники и москитные сетки. Возможна работа на высоких этажах с применением спецснаряжения.",
        includes: [
          "Мытьё рам и подоконников",
          "Очистка стеклопакетов",
          "Удаление разводов",
          "Работа на высоте",
        ],
        price: "от 20.000 за 1 Кв М",
        metaTitle: "Мойка окон в Ташкенте — GrandClean, без разводов",
        metaDesc:
          "Профессиональная мойка окон в Ташкенте без разводов. Работа на любой высоте. Цена от 20 000 за м². ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Oyna yuvish",
        category: "Fasadlar va tashqi ko'rinish",
        shortDesc: "Har qanday balandlikda izlarsiz professional oyna yuvish.",
        fullDesc:
          "Oynalaringizning kristal tozaligini ta'minlaymiz. Shisha paketlarni ikki tomondan, ramalar, deraza tokchalari va pashshaxonalarni tozalaymiz. Maxsus uskunalar bilan baland qavatlarda ishlash mumkin.",
        includes: [
          "Rama va deraza tokchasini yuvish",
          "Shisha paketlarni tozalash",
          "Izlarni olib tashlash",
          "Balandda ishlash",
        ],
        price: "20 000 so'mdan 1 m² uchun",
        metaTitle: "Toshkentda oyna yuvish — GrandClean, izsiz",
        metaDesc:
          "Toshkentda izsiz professional oyna yuvish. Har qanday balandlikda ishlash. Narx 20 000 so'mdan m². ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Как часто нужно мыть окна в Ташкенте?",
          answer:
            "В условиях ташкентской пыли рекомендуем мыть окна 2–3 раза в год.",
        },
        {
          question: "Можете ли вы мыть окна на высоких этажах?",
          answer:
            "Да, наши специалисты имеют удостоверения промышленных альпинистов.",
        },
        {
          question: "Останутся ли разводы после мытья?",
          answer:
            "Нет. Используем дистиллированную воду и профессиональные скребки-сгонки.",
        },
        {
          question: "Входит ли уборка подоконников в стоимость?",
          answer:
            "Да, в стандартный пакет входит мытьё стёкол, очистка рам, подоконников и москитных сеток.",
        },
      ],
      uz: [
        {
          question:
            "Toshkentda oynalarni qancha vaqtda bir marta yuvish kerak?",
          answer:
            "Toshkent changi sharoitida yiliga 2–3 marta oyna yuvish tavsiya etiladi.",
        },
        {
          question: "Baland qavatlarda oyna yuva olasizmi?",
          answer:
            "Ha, mutaxassislarimiz sanoat alpinistlari guvohnomasiga ega.",
        },
        {
          question: "Yuvishdan keyin izlar qoladimi?",
          answer:
            "Yo'q. Distillangan suv va professional squeegeelardan foydalanamiz.",
        },
        {
          question: "Deraza tokchasini tozalash narxga kiradimi?",
          answer:
            "Ha, standart paketga shisha, rama, deraza tochkasi va pashshaxonani yuvish kiradi.",
        },
      ],
    },
  },
  {
    id: "mytyo-fasadov",
    img: "/images/klining-fasadov.png",
    translations: {
      ru: {
        title: "Мытьё фасадов",
        category: "Фасады и экстерьер",
        shortDesc: "Очистка фасадов от загрязнений, пыли и копоти.",
        fullDesc:
          "Предлагаем услуги промышленного альпинизма для мойки и очистки фасадов коммерческих и жилых зданий. Убираем атмосферные загрязнения, высолы и строительную пыль с любых материалов.",
        includes: [
          "Очистка стен и облицовки",
          "Удаление копоти и грязи",
          "Промышленное оборудование",
          "Работа на любой высоте",
        ],
        price: "от 20.000 за 1 Кв М",
        metaTitle: "Мытьё фасадов зданий в Ташкенте — GrandClean",
        metaDesc:
          "Профессиональная очистка фасадов зданий в Ташкенте промышленными альпинистами. Любая высота. Цена от 20 000 за м². ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Fasadlarni yuvish",
        category: "Fasadlar va tashqi ko'rinish",
        shortDesc:
          "Fasadlarni ifloslanish, chang va qoralik chiqindilaridan tozalash.",
        fullDesc:
          "Tijorat va turar-joy binolarining fasadlarini yuvish va tozalash uchun sanoat alpinizmi xizmatlarini ko'rsatamiz.",
        includes: [
          "Devor va qoplama tozalash",
          "Qoralik va kirni olib tashlash",
          "Sanoat jihozlari",
          "Har qanday balandlikda ishlash",
        ],
        price: "20 000 so'mdan 1 m² uchun",
        metaTitle: "Toshkentda bino fasadlarini yuvish — GrandClean",
        metaDesc:
          "Toshkentda sanoat alpinistlari tomonidan professional fasad tozalash. Har qanday balandlik. Narx 20 000 so'mdan m². ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Как часто нужно мыть фасад здания?",
          answer:
            "Для жилых зданий — раз в 2–3 года. Для коммерческих объектов — ежегодно.",
        },
        {
          question: "Какие материалы фасадов вы очищаете?",
          answer:
            "Работаем с любыми типами: штукатурка, кирпич, бетон, стекло, алюминиевые панели, натуральный камень.",
        },
        {
          question: "Нужно ли предупреждать жильцов?",
          answer:
            "Мы курируем этот процесс: предупредим о необходимости закрыть окна и согласуем удобное время.",
        },
        {
          question: "Безопасна ли химия для окружающей среды?",
          answer:
            "Да, все препараты биоразлагаемые и сертифицированы для наружного применения.",
        },
      ],
      uz: [
        {
          question: "Bino fasadini necha yilda bir marta yuvish kerak?",
          answer:
            "Turar-joy binolari uchun 2–3 yilda bir marta. Tijorat ob'ektlari uchun har yili.",
        },
        {
          question: "Qanday fasad materiallarini tozalaysiz?",
          answer:
            "Har qanday turdagi materiallar bilan ishlaymiz: gips, g'isht, beton, shisha, alyuminiy panellar, tabiiy tosh.",
        },
        {
          question: "Aholini ogohlantirishga to'g'ri keladimi?",
          answer:
            "Ha, biz bu jarayonni nazorat qilamiz: oynalarni yopish zarurligini oldindan aytamiz.",
        },
        {
          question: "Kimyo atrof-muhit uchun xavfsizmi?",
          answer:
            "Ha, barcha preparatlar biodegradable va tashqi foydalanish uchun sertifikatlangan.",
        },
      ],
    },
  },
  {
    id: "chistka-bruschatki",
    img: "/images/chistka-bruschatki.png",
    translations: {
      ru: {
        title: "Чистка брусчатки",
        category: "Фасады и экстерьер",
        shortDesc:
          "Удаление мха, грязи и пятен с тротуарной плитки и брусчатки.",
        fullDesc:
          "С помощью аппаратов высокого давления (АВД) мы эффективно очищаем дворовые покрытия, брусчатку и бетон от въевшейся грязи, машинного масла, мха и сорняков.",
        includes: [
          "Удаление мха и грибка",
          "Очистка от грязи",
          "Мойка под давлением",
          "Обработка защитным составом",
        ],
        price: "от 15.000 сум",
        metaTitle: "Чистка брусчатки в Ташкенте — GrandClean",
        metaDesc:
          "Профессиональная чистка тротуарной плитки и брусчатки аппаратами высокого давления. Удаление мха, масла, грязи. Цена от 15 000 сум. ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Trotuar plitasini tozalash",
        category: "Fasadlar va tashqi ko'rinish",
        shortDesc:
          "Trotuar plitasi va tashlaoqlardan yo'sin, kir va dog'larni olib tashlash.",
        fullDesc:
          "Yuqori bosimli apparatlar (YBA) yordamida hovli qoplamalar, trotuar va betonni kirib ketgan kirdan, mashinalar moyidan, yo'sindan tozalaymiz.",
        includes: [
          "Yo'sin va zamburug'ni olib tashlash",
          "Kirdan tozalash",
          "Bosim ostida yuvish",
          "Himoya tarkibi bilan qayta ishlash",
        ],
        price: "15 000 so'mdan",
        metaTitle: "Toshkentda trotuar plitasini tozalash — GrandClean",
        metaDesc:
          "Yuqori bosimli apparatlar bilan professional trotuar plitasi va toshloq tozalash. Yo'sin, moy, kirni olib tashlash. Narx 15 000 so'mdan. ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question: "Можно ли чистить брусчатку АВД без повреждений?",
          answer: "Да, при правильной настройке давления и угла подачи воды.",
        },
        {
          question: "Убираете ли вы нефтяные и масляные пятна?",
          answer:
            "Да. Предварительно обрабатываем пятна нефтепродуктов обезжиривающим составом, затем смываем АВД.",
        },
        {
          question: "Какой защитный состав вы наносите?",
          answer:
            "Водоотталкивающую пропитку на акриловой или силиконовой основе на 1–2 года.",
        },
        {
          question: "Как быстро можно ходить по брусчатке после очистки?",
          answer:
            "Сразу. Если наносился защитный состав — рекомендуем не нагружать поверхность 2–4 часа.",
        },
      ],
      uz: [
        {
          question: "YBA bilan trotuar plitasini zararsiz tozalash mumkinmi?",
          answer:
            "Ha, bosim va suvni uzatish burchagini to'g'ri sozlash bilan.",
        },
        {
          question: "Neft va moy dog'larini olib tashlaysizmi?",
          answer:
            "Ha. Dog'larni avval yog'sizlantiruvchi tarkib bilan ishlab, keyin YBA bilan yuvamiz.",
        },
        {
          question: "Qanday himoya tarkibi qo'llaysiz?",
          answer:
            "1–2 yilga mo'ljallangan akril yoki silikonli suv itolatuvchi impregnatsiya.",
        },
        {
          question:
            "Tozalashdan keyin trotuar plitasida necha vaqtdan keyin yurish mumkin?",
          answer:
            "Darhol. Himoya tarkibi qo'llanilgan bo'lsa, 2–4 soat yuklamaslik tavsiya etiladi.",
        },
      ],
    },
  },
  {
    id: "dezinfekciya",
    img: "/images/dezinfekciya.png",
    translations: {
      ru: {
        title: "Дезинфекция",
        category: "Специальные",
        shortDesc:
          "Уничтожение бактерий, вирусов и аллергенов. Безопасно для людей.",
        fullDesc:
          "Проводим профилактическую и очаговую дезинфекцию помещений методом холодного тумана. Препарат проникает во все щели, гарантированно уничтожая 99.9% патогенной микрофлоры.",
        includes: [
          "Обработка всех поверхностей",
          "Уничтожение бактерий и вирусов",
          "Генератор холодного тумана",
          "Сертифицированные препараты",
        ],
        price: "от 500.000 за комнату",
        metaTitle: "Дезинфекция помещений в Ташкенте — GrandClean",
        metaDesc:
          "Профессиональная дезинфекция помещений холодным туманом в Ташкенте. Уничтожение 99.9% бактерий и вирусов. Цена от 500 000. ☎ +998 93 571 21 51.",
      },
      uz: {
        title: "Dezinfeksiya",
        category: "Maxsus",
        shortDesc:
          "Bakteriyalar, viruslar va allergenlarni yo'q qilish. Odamlar uchun xavfsiz.",
        fullDesc:
          "Sovuq tuman usuli bilan profilaktik va o'choqli dezinfeksiya o'tkazamiz. Preparat barcha teshik va yoriqqa kiradi, 99.9% patogen mikroorganizmlarni kafolatli yo'q qiladi.",
        includes: [
          "Barcha yuzalarni qayta ishlash",
          "Bakteriya va viruslarni yo'q qilish",
          "Sovuq tuman generatori",
          "Sertifikatlangan preparatlar",
        ],
        price: "500 000 so'mdan xona uchun",
        metaTitle: "Toshkentda xonalarni dezinfeksiya qilish — GrandClean",
        metaDesc:
          "Toshkentda sovuq tuman bilan professional dezinfeksiya. 99.9% bakteriya va viruslarni yo'q qilish. Narx 500 000 dan. ☎ +998 93 571 21 51.",
      },
    },
    faq: {
      ru: [
        {
          question:
            "Как долго нельзя находиться в помещении после дезинфекции?",
          answer:
            "Необходимо проветрить в течение 1–2 часов. Затем помещение полностью безопасно.",
        },
        {
          question: "Убивает ли ваша дезинфекция плесень и грибок?",
          answer: "Да. Используем препараты с фунгицидным действием.",
        },
        {
          question: "Нужна ли дезинфекция после болезни в квартире?",
          answer: "Да, особенно если кто-то переболел вирусной инфекцией.",
        },
        {
          question: "Какие документы вы предоставляете после дезинфекции?",
          answer:
            "Выдаём акт выполненных работ. Для юрлиц — полный пакет документов.",
        },
      ],
      uz: [
        {
          question:
            "Dezinfeksiyadan keyin xonada qancha vaqt bo'lmagan ma'qul?",
          answer:
            "1–2 soat shamollatish kerak. Keyin xona odamlar uchun mutlaqo xavfsiz.",
        },
        {
          question: "Dezinfeksiya mog'or va zamburug'ni o'ldiradi??",
          answer: "Ha. Fungitsid ta'sirli preparatlardan foydalanamiz.",
        },
        {
          question: "Kasallikdan keyin kvartiraga dezinfeksiya kerakmi?",
          answer:
            "Ha, ayniqsa uy kishilaridan biri viral infeksiya bilan kasallangan bo'lsa.",
        },
        {
          question: "Dezinfeksiyadan keyin qanday hujjatlar berasiz?",
          answer:
            "Bajarilgan ishlar dalolatnomasi beriladi. Yuridik shaxslar uchun — to'liq hujjat paketi.",
        },
      ],
    },
  },
];

export function getService(id: string) {
  return servicesData.find((s) => s.id === id) ?? null;
}

export function getServiceTranslation(
  service: Service,
  lang: Locale,
): ServiceTranslation {
  return service.translations[lang] ?? service.translations.ru;
}
