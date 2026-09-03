const fs = require('fs');
let code = fs.readFileSync('src/popup/js/popup.js', 'utf8');

const injectCode = `
  const statTotal = document.getElementById('statTotal');
  const statTime = document.getElementById('statTime');

  window.JobFilterExt.Storage.getStats().then(stats => {
    if (statTotal && statTime) {
      const hidden = stats.totalHidden || 0;
      statTotal.textContent = hidden;
      // Assume 1 ad = 3 seconds saved. Convert to minutes.
      const timeSavedMins = Math.floor((hidden * 3) / 60);
      statTime.textContent = timeSavedMins + ' ' + i18n.t('min_short', 'хв');
    }
  });

  const customCountrySelect =`;

code = code.replace('  const customCountrySelect =', injectCode);
fs.writeFileSync('src/popup/js/popup.js', code);
