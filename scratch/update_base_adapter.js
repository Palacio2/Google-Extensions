const fs = require('fs');
let code = fs.readFileSync('src/content/adapters/base-adapter.js', 'utf8');

code = code.replace(
  'hideElement(element, revealHidden) {',
  `hideElement(element, revealHidden, reason) {
    if (reason) {
      element.setAttribute('data-jf-reason', reason);
    }`
);

fs.writeFileSync('src/content/adapters/base-adapter.js', code);
