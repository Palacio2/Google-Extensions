const fs = require('fs');
let code = fs.readFileSync('src/shared/constants.js', 'utf8');

// Fix sales_ua
code = code.replace(
  /'продав', 'касир', 'консультант', 'торгов'/g,
  `'продав', 'касир', 'консультант', 'торгов. пред', 'торговий пред', 'торгового пред', 'sales', 'b2b'`
);

// Fix driver_ua
code = code.replace(
  /'водій кат\. b', 'водій кат\. б', 'водій категорії', 'категорія b', 'категорія б'/g,
  `'водій кат. b', 'водій кат. б', 'водій кат. в', 'категорія b', 'категорія б', 'категорія в', 'кат. b', 'кат. в', 'кат. б', 'водій b', 'водій в', 'водій б'`
);

fs.writeFileSync('src/shared/constants.js', code);
