const fs = require('fs');
let code = fs.readFileSync('src/content/core/filter.js', 'utf8');

code = code.replace(
  'const shouldHide = keywords.some(keyword => text.includes(keyword));',
  'const matchedKeyword = keywords.find(keyword => text.includes(keyword));'
);

code = code.replace(
  'if (shouldHide) {',
  'if (matchedKeyword) {'
);

code = code.replace(
  'this.adapter.hideElement(element, this.settings.revealHidden);',
  'this.adapter.hideElement(element, this.settings.revealHidden, matchedKeyword);'
);

fs.writeFileSync('src/content/core/filter.js', code);
