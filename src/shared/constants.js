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
      { id: 'courier_pl', nameKey: 'cat_courier', words: ['kurier', 'dostawc', 'glovo', 'wolt', 'pyszne', 'stuart', 'ubereats', 'szoper'] },
      { id: 'driver_b_pl', nameKey: 'cat_driver_b', words: ['kierowca kat', 'prawo jazdy kat. b', 'kierowca b'] },
      { id: 'driver_ce_pl', nameKey: 'cat_driver_ce', words: ['c+e', 'c/e', 'kierowca ce', 'międzynarodow', 'kierowca c'] },
      { id: 'sales_pl', nameKey: 'cat_sales', words: ['sprzedawc', 'kasjer', 'doradc', 'obsługa klienta w sklepie'] },
      { id: 'warehouse_pl', nameKey: 'cat_warehouse', words: ['magazyn', 'kompletow', 'pakowacz', 'wózk'] },
      { id: 'production_pl', nameKey: 'cat_production', words: ['produkcj', 'fabryc', 'montaż', 'operator maszyn'] },
      { id: 'callcenter_pl', nameKey: 'cat_callcenter', words: ['call center', 'telefoniczn', 'infolini', 'obsługa klienta telefoniczna'] },
      { id: 'construction_pl', nameKey: 'cat_construction', words: ['budowlan', 'murarz', 'tynkarz', 'zbrojarz', 'cieśla'] },
      { id: 'gastronomy_pl', nameKey: 'cat_gastronomy', words: ['gastronomi', 'kelner', 'kucharz', 'barman', 'pizzerman'] },
      { id: 'cleaning_pl', nameKey: 'cat_cleaning', words: ['sprzątani', 'sprzątaczk', 'pokojówk'] },
      { id: 'security_pl', nameKey: 'cat_security', words: ['ochron', 'stróż'] },
      { id: 'mechanic_pl', nameKey: 'cat_mechanic', words: ['mechanik', 'lakiernik', 'blacharz', 'wulkanizator'] }
    ],
    'ua': [
      { id: 'taxi_ua', nameKey: 'cat_taxi', words: ['такс', 'taxi', 'bolt', 'uber', 'уклон', 'uklon', 'opti'] },
      { id: 'courier_ua', nameKey: 'cat_courier', words: ['курєр', 'кур\'єр', 'курʼєр', 'доставк', 'доставщ', 'glovo', 'wolt', 'silpo', 'сільпо'] },
      { id: 'driver_ua', nameKey: 'cat_driver_b', words: ['водій кат. b', 'водій кат. б', 'водій категорії', 'категорія b', 'категорія б'] },
      { id: 'driver_ce_ua', nameKey: 'cat_driver_ce', words: ['c+e', 'далекобійник', 'міжнародн', 'тір', 'tir', 'категорія c', 'категорія с'] },
      { id: 'sales_ua', nameKey: 'cat_sales', words: ['продав', 'касир', 'консультант', 'торгов'] },
      { id: 'warehouse_ua', nameKey: 'cat_warehouse', words: ['склад', 'вантажник', 'пакувальн', 'комплектувальн', 'карщик'] },
      { id: 'production_ua', nameKey: 'cat_production', words: ['виробництв', 'завод', 'цех', 'оператор ліні'] },
      { id: 'callcenter_ua', nameKey: 'cat_callcenter', words: ['колл', 'call center', 'call-center', 'оператор пк', 'диспетчер', 'телефонн'] },
      { id: 'construction_ua', nameKey: 'cat_construction', words: ['будівельн', 'муляр', 'штукатур', 'різноробоч', 'арматурник', 'бетонщик'] },
      { id: 'gastronomy_ua', nameKey: 'cat_gastronomy', words: ['кухар', 'офіціант', 'бармен', 'піцайоло', 'ресторан', 'кафе'] },
      { id: 'cleaning_ua', nameKey: 'cat_cleaning', words: ['прибиральн', 'клінінг', 'покоївк', 'мийник'] },
      { id: 'security_ua', nameKey: 'cat_security', words: ['охорон', 'сторож', 'вартівник'] },
      { id: 'mechanic_ua', nameKey: 'cat_mechanic', words: ['механік', 'слюсар', 'автомаляр', 'шиномонтаж', 'сто'] }
    ]
  }
};



