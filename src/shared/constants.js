window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.Constants = {
  COUNTRIES: [
    { id: 'pl', nameKey: 'country_pl' },
    { id: 'ua', nameKey: 'country_ua' }
  ],
  
  CONFIG: {
    SHOW_PROMO_SLIDER: false,
    SLIDER_INTERVAL_MS: 5000,
    PROMO_BANNERS: [
      {
        id: 'transfergo',
        enabled: true,
        icon: '../assets/transfergo.svg',
        url: 'https://trgo.co/uk/r/0Sz87j',
        titleKey: 'promo_transfergo_title',
        descKey: 'promo_transfergo_desc',
        btnKey: 'promo_transfergo_btn'
      },
      {
        id: 'omio',
        enabled: true,
        icon: '../assets/Omio Logo.png',
        url: 'https://go-refer.omio.com/85xBMH',
        titleKey: 'promo_omio_title',
        descKey: 'promo_omio_desc',
        btnKey: 'promo_omio_btn'
      },
      {
        id: 'district_explorer',
        enabled: false, // Тимчасово приховано (зміни на true, коли твій проект буде готовий!)
        icon: '🗺️',
        url: 'https://districtexplorer.pl/?utm_source=chrome_ext&utm_medium=popup_banner&utm_campaign=launch',
        titleKey: 'promo_district_title',
        descKey: 'promo_district_desc',
        btnKey: 'promo_district_btn'
      }
    ]
  },
  
  CATEGORIES: {
    'pl': [
      { id: 'taxi_pl', nameKey: 'cat_taxi', words: ['taxi', 'bolt', 'uber', 'freenow', 'opti', 'taksówkarz', 'taxify', 'kierowca taxi'] },
      { id: 'courier_pl', nameKey: 'cat_courier', words: ['kurier', 'dostawc', 'glovo', 'wolt', 'pyszne', 'stuart', 'ubereats', 'rozwoziciel', 'dostawy', 'kurierski'] },
      { id: 'driver_b_pl', nameKey: 'cat_driver_b', words: ['kierowca kat. b', 'prawo jazdy kat. b', 'kierowca b', 'kategoria b', 'kat. b', 'kat b', 'kierowca kat b'] },
      { id: 'driver_ce_pl', nameKey: 'cat_driver_ce', words: ['c+e', 'c/e', 'kierowca ce', 'kierowca c ', 'kierowca c,', 'kierowca międzynarodow', 'kategoria c ', 'kat. c ', 'tir', 'truck', 'ciągnik siodłowy', 'naczep'] },
      { id: 'sales_pl', nameKey: 'cat_sales', words: ['sprzedawc', 'kasjer', 'doradca klienta', 'obsługa klienta', 'ekspedient', 'przedstawiciel handlowy', 'b2b', 'b2c', 'telesprzedaż'] },
      { id: 'warehouse_pl', nameKey: 'cat_warehouse', words: ['magazynier', 'pracownik magazyn', 'kompletow', 'pakowacz', 'wózk', 'logistyk', 'rozładun', 'załadun', 'picker', 'sortowacz'] },
      { id: 'production_pl', nameKey: 'cat_production', words: ['pracownik produkcj', 'fabryc', 'montaż', 'operator maszyn', 'tokarz', 'frezarz', 'spawacz', 'ślusarz', 'pakowanie', 'linia produkcyjna'] },
      { id: 'callcenter_pl', nameKey: 'cat_callcenter', words: ['call center', 'konsultant telefoniczn', 'infolini', 'obsługa klienta telefoniczna', 'telemarketing', 'telemarketer', 'helpdesk'] },
      { id: 'construction_pl', nameKey: 'cat_construction', words: ['pracownik budowlan', 'budowlaniec', 'murarz', 'tynkarz', 'zbrojarz', 'cieśla', 'dekarz', 'hydraulik', 'elektryk', 'brukarz', 'malarz', 'wykończeni'] },
      { id: 'gastronomy_pl', nameKey: 'cat_gastronomy', words: ['kelner', 'kucharz', 'barman', 'pizzerman', 'barista', 'pomoc kuchenna', 'zmywak', 'szef kuchni', 'gastronomi', 'fast food'] },
      { id: 'cleaning_pl', nameKey: 'cat_cleaning', words: ['sprzątani', 'sprzątaczk', 'pokojówk', 'utrzymanie czystości', 'serwis sprzątający'] },
      { id: 'security_pl', nameKey: 'cat_security', words: ['pracownik ochrony', 'ochroniarz', 'stróż', 'dozorca', 'ochrona', 'portier'] },
      { id: 'mechanic_pl', nameKey: 'cat_mechanic', words: ['mechanik', 'lakiernik', 'blacharz', 'wulkanizator', 'elektromechanik', 'warsztat', 'diagnosta'] }
    ],
    'ua': [
      { id: 'taxi_ua', nameKey: 'cat_taxi', words: ['такс', 'taxi', 'bolt', 'uber', 'уклон', 'uklon', 'opti', 'водій таксі'] },
      { id: 'courier_ua', nameKey: 'cat_courier', words: ['курєр', 'кур\'єр', 'курʼєр', 'доставк', 'доставщ', 'glovo', 'wolt', 'кур\'єрська', 'курєрська', 'піший кур\'єр', 'мотокур\'єр', 'велокур\'єр'] },
      { id: 'driver_ua', nameKey: 'cat_driver_b', words: ['водій кат. b', 'водій кат. б', 'водій кат. в', 'категорія b', 'категорія б', 'категорія в', 'кат. b', 'кат. в', 'кат. б', 'водій b', 'водій в', 'водій б', 'водій легкового', 'особистий водій'] },
      { id: 'driver_ce_ua', nameKey: 'cat_driver_ce', words: ['c+e', 'с+е', 'далекобійник', 'тір', 'tir', 'категорія c', 'категорія с', 'кат. с', 'кат. c', 'кат. ce', 'кат. се', 'водій міжнародник', 'напівпричіп', 'зерновоз'] },
      { id: 'sales_ua', nameKey: 'cat_sales', words: ['продав', 'касир', 'консультант', 'торгов. пред', 'торговий пред', 'торгового пред', 'sales', 'b2b', 'b2c', 'менеджер з продажу', 'продажник', 'телемаркетинг'] },
      { id: 'warehouse_ua', nameKey: 'cat_warehouse', words: ['вантажник', 'пакувальн', 'комплектувальн', 'карщик', 'комірник', 'працівник складу', 'робітник складу', 'штабелер', 'сортувальник', 'логіст', 'маркувальник'] },
      { id: 'production_ua', nameKey: 'cat_production', words: ['завод', 'цех', 'оператор ліні', 'працівник виробництва', 'робітник виробництва', 'зварювальник', 'токар', 'фрезерувальник', 'слюсар', 'пакувальник', 'швачка'] },
      { id: 'callcenter_ua', nameKey: 'cat_callcenter', words: ['call center', 'call-center', 'колл-центр', 'кол-центр', 'оператор пк', 'диспетчер', 'телефонних продажів', 'телефонні продажі', 'телемаркетолог', 'сапорт', 'support', 'служба підтримки'] },
      { id: 'construction_ua', nameKey: 'cat_construction', words: ['муляр', 'штукатур', 'різноробоч', 'арматурник', 'бетонщик', 'будівельник', 'монтажник', 'електрик', 'сантехнік', 'плиточник', 'маляр', 'оздоблювальник', 'фасадщик'] },
      { id: 'gastronomy_ua', nameKey: 'cat_gastronomy', words: ['кухар', 'офіціант', 'бармен', 'піцайоло', 'бариста', 'мийник посуду', 'шеф-кухар', 'су-шеф', 'кулінар', 'пекар', 'кондитер', 'мангальщик', 'шаурміст'] },
      { id: 'cleaning_ua', nameKey: 'cat_cleaning', words: ['прибиральн', 'клінінг', 'покоївк', 'мийник', 'двірник', 'прибирання'] },
      { id: 'security_ua', nameKey: 'cat_security', words: ['охоронник', 'охоронець', 'сторож', 'вартівник', 'охорона', 'консьєрж'] },
      { id: 'mechanic_ua', nameKey: 'cat_mechanic', words: ['механік', 'слюсар', 'автомаляр', 'шиномонтаж', 'автосервіс', 'автослюсар', 'моторист', 'електрик-діагност', 'рихтувальник'] }
    ]
  }
};
