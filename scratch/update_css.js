const fs = require('fs');
let code = fs.readFileSync('src/popup/css/main.css', 'utf8');

const statsCss = `
/* --- STATS BANNER --- */
.stats-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}
.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-color);
}
.stat-item span {
  font-weight: 500;
}
.stat-item strong {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary-color);
}
.stat-divider {
  width: 1px;
  height: 20px;
  background: var(--border-color);
}
`;

code += statsCss;
fs.writeFileSync('src/popup/css/main.css', code);
