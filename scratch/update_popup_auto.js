const fs = require('fs');
let code = fs.readFileSync('src/popup/js/popup.js', 'utf8');

const replacement = `  let settings = await window.JobFilterExt.Storage.getSettings();

  // РОЗУМНЕ АВТОВИЗНАЧЕННЯ: перевіряємо відкриту вкладку і самі ставимо потрібну країну
  await new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        try {
          const url = new URL(tabs[0].url);
          const hostname = url.hostname;
          let detected = null;
          if (hostname.endsWith('.ua')) detected = 'ua';
          else if (hostname.endsWith('.pl')) detected = 'pl';
          
          if (detected && detected !== settings.targetCountry) {
            settings.targetCountry = detected;
            await window.JobFilterExt.Storage.saveSettings(settings);
          }
        } catch(e) {}
      }
      resolve();
    });
  });
`;

code = code.replace('  let settings = await window.JobFilterExt.Storage.getSettings();', replacement);
fs.writeFileSync('src/popup/js/popup.js', code);
