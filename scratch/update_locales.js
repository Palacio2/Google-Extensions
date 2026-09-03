const fs = require('fs');
const locales = ['en', 'pl', 'uk', 'ru'];
locales.forEach(loc => {
  const p = `_locales/${loc}/messages.json`;
  const m = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (loc === 'en') m.hidden_badge = { message: 'HIDDEN' };
  if (loc === 'pl') m.hidden_badge = { message: 'UKRYTO' };
  if (loc === 'uk') m.hidden_badge = { message: 'ПРИХОВАНО' };
  if (loc === 'ru') m.hidden_badge = { message: 'СКРЫТО' };
  fs.writeFileSync(p, JSON.stringify(m, null, 2));
});
