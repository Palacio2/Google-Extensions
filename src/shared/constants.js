window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.Constants = {
  COUNTRIES: [
    { id: 'pl', nameKey: 'country_pl' },
    { id: 'ua', nameKey: 'country_ua' }
  ],
  
  CONFIG: {
    SHOW_DISTRICT_PROMO: false,
    DISTRICT_PROMO_URL: "https://districtexplorer.pl/?utm_source=chrome_ext&utm_medium=popup_banner&utm_campaign=launch"
  },
  
  CATEGORIES: {
    'pl': [
      { id: 'taxi_pl', nameKey: 'cat_taxi', words: ['taxi', 'bolt', 'uber', 'freenow', 'opti'] },
      { id: 'courier_pl', nameKey: 'cat_courier', words: ['kurier', 'dostawc', 'glovo', 'wolt', 'pyszne', 'stuart', 'ubereats'] },
      { id: 'driver_b_pl', nameKey: 'cat_driver_b', words: ['kierowca kat. b', 'prawo jazdy kat. b', 'kierowca b', 'kategoria b', 'kat. b'] },
      { id: 'driver_ce_pl', nameKey: 'cat_driver_ce', words: ['c+e', 'c/e', 'kierowca ce', 'kierowca c ', 'kierowca c,', 'kierowca międzynarodow', 'kategoria c ', 'kat. c '] },
      { id: 'sales_pl', nameKey: 'cat_sales', words: ['sprzedawc', 'kasjer', 'doradca klienta', 'obsługa klienta'] },
      { id: 'warehouse_pl', nameKey: 'cat_warehouse', words: ['magazynier', 'pracownik magazyn', 'kompletow', 'pakowacz', 'wózk'] },
      { id: 'production_pl', nameKey: 'cat_production', words: ['pracownik produkcj', 'fabryc', 'montaż', 'operator maszyn'] },
      { id: 'callcenter_pl', nameKey: 'cat_callcenter', words: ['call center', 'konsultant telefoniczn', 'infolini', 'obsługa klienta telefoniczna'] },
      { id: 'construction_pl', nameKey: 'cat_construction', words: ['pracownik budowlan', 'budowlaniec', 'murarz', 'tynkarz', 'zbrojarz', 'cieśla'] },
      { id: 'gastronomy_pl', nameKey: 'cat_gastronomy', words: ['kelner', 'kucharz', 'barman', 'pizzerman', 'barista', 'pomoc kuchenna'] },
      { id: 'cleaning_pl', nameKey: 'cat_cleaning', words: ['sprzątani', 'sprzątaczk', 'pokojówk'] },
      { id: 'security_pl', nameKey: 'cat_security', words: ['pracownik ochrony', 'ochroniarz', 'stróż'] },
      { id: 'mechanic_pl', nameKey: 'cat_mechanic', words: ['mechanik', 'lakiernik', 'blacharz', 'wulkanizator'] }
    ],
    'ua': [
      { id: 'taxi_ua', nameKey: 'cat_taxi', words: ['такс', 'taxi', 'bolt', 'uber', 'уклон', 'uklon', 'opti'] },
      { id: 'courier_ua', nameKey: 'cat_courier', words: ['курєр', 'кур\'єр', 'курʼєр', 'доставк', 'доставщ', 'glovo', 'wolt'] },
      { id: 'driver_ua', nameKey: 'cat_driver_b', words: ['водій кат. b', 'водій кат. б', 'водій кат. в', 'категорія b', 'категорія б', 'категорія в', 'кат. b', 'кат. в', 'кат. б', 'водій b', 'водій в', 'водій б'] },
      { id: 'driver_ce_ua', nameKey: 'cat_driver_ce', words: ['c+e', 'с+е', 'далекобійник', 'тір', 'tir', 'категорія c', 'категорія с', 'кат. с', 'кат. c', 'кат. ce', 'кат. се'] },
      { id: 'sales_ua', nameKey: 'cat_sales', words: ['продав', 'касир', 'консультант', 'торгов. пред', 'торговий пред', 'торгового пред', 'sales', 'b2b'] },
      { id: 'warehouse_ua', nameKey: 'cat_warehouse', words: ['вантажник', 'пакувальн', 'комплектувальн', 'карщик', 'комірник', 'працівник складу', 'робітник складу'] },
      { id: 'production_ua', nameKey: 'cat_production', words: ['завод', 'цех', 'оператор ліні', 'працівник виробництва', 'робітник виробництва'] },
      { id: 'callcenter_ua', nameKey: 'cat_callcenter', words: ['call center', 'call-center', 'колл-центр', 'кол-центр', 'оператор пк', 'диспетчер', 'телефонних продажів', 'телефонні продажі'] },
      { id: 'construction_ua', nameKey: 'cat_construction', words: ['муляр', 'штукатур', 'різноробоч', 'арматурник', 'бетонщик', 'будівельник', 'монтажник'] },
      { id: 'gastronomy_ua', nameKey: 'cat_gastronomy', words: ['кухар', 'офіціант', 'бармен', 'піцайоло', 'бариста', 'мийник посуду', 'шеф-кухар'] },
      { id: 'cleaning_ua', nameKey: 'cat_cleaning', words: ['прибиральн', 'клінінг', 'покоївк'] },
      { id: 'security_ua', nameKey: 'cat_security', words: ['охоронник', 'охоронець', 'сторож', 'вартівник'] },
      { id: 'mechanic_ua', nameKey: 'cat_mechanic', words: ['механік', 'слюсар', 'автомаляр', 'шиномонтаж', 'автосервіс', 'автослюсар'] }
    ]
  }
};
