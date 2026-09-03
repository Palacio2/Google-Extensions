const fs = require('fs');
let code = fs.readFileSync('src/content/adapters/base-adapter.js', 'utf8');

code = code.replace(
  `element.setAttribute('data-jf-reason', reason);`,
  `const prefix = chrome.i18n.getMessage('hidden_badge') || 'HIDDEN';\n      element.setAttribute('data-jf-reason', \`\${prefix} (\${reason})\`);`
);

fs.writeFileSync('src/content/adapters/base-adapter.js', code);
