const fs = require('fs');
let code = fs.readFileSync('src/shared/storage.js', 'utf8');

const statsCode = `
  async getStats() {
    return new Promise((resolve) => {
      chrome.storage.local.get('stats', (data) => {
        resolve(data.stats || { totalHidden: 0 });
      });
    });
  },

  async incrementStats(hiddenCount) {
    if (hiddenCount <= 0) return;
    return new Promise((resolve) => {
      chrome.storage.local.get('stats', (data) => {
        const stats = data.stats || { totalHidden: 0 };
        stats.totalHidden += hiddenCount;
        chrome.storage.local.set({ stats }, () => resolve(stats));
      });
    });
  },
`;

code = code.replace('async getSettings() {', statsCode + '\n  async getSettings() {');
fs.writeFileSync('src/shared/storage.js', code);
