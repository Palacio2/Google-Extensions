const fs = require('fs');
let code = fs.readFileSync('src/content/style.css', 'utf8');
code = code.replace(
  "content: 'ПРИХОВАНО ФІЛЬТРОМ' !important;",
  "content: 'ПРИХОВАНО (' attr(data-jf-reason) ')' !important;"
);
fs.writeFileSync('src/content/style.css', code);
