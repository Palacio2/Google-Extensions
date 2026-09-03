const fs = require('fs');
['workua-adapter.js', 'robotaua-adapter.js'].forEach(file => {
  const p = 'src/content/adapters/' + file;
  let code = fs.readFileSync(p, 'utf8');
  if (code.includes(`element.setAttribute('data-jf-reason', reason);`)) {
    code = code.replace(
      `element.setAttribute('data-jf-reason', reason);`,
      `const prefix = chrome.i18n.getMessage('hidden_badge') || 'HIDDEN';\n      element.setAttribute('data-jf-reason', \`\${prefix} (\${reason})\`);`
    );
    fs.writeFileSync(p, code);
  }
});
