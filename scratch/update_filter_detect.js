const fs = require('fs');
let code = fs.readFileSync('src/content/core/filter.js', 'utf8');

code = code.replace(
  'const country = this.settings.targetCountry;',
  `let country = this.settings.targetCountry;
    const hostname = window.location.hostname;
    if (hostname.endsWith('.ua')) {
      country = 'ua';
    } else if (hostname.endsWith('.pl')) {
      country = 'pl';
    }`
);

fs.writeFileSync('src/content/core/filter.js', code);
