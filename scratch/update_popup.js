const fs = require('fs');
let code = fs.readFileSync('src/popup/popup.html', 'utf8');

const statsHtml = `
    <div class="stats-banner">
      <div class="stat-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
        <span data-i18n="stats_hidden">Приховано спаму:</span>
        <strong id="statTotal">0</strong>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span data-i18n="stats_saved">Заощаджено:</span>
        <strong id="statTime">0 хв</strong>
      </div>
    </div>
`;

// Insert after header
code = code.replace('</header>', '</header>\n' + statsHtml);

// Update marquee
const marqueeItems = `<span>OLX.ua</span> <span class="dot">•</span>
              <span>OLX.pl</span> <span class="dot">•</span>
              <span>Pracuj.pl</span> <span class="dot">•</span>
              <span>Work.ua</span> <span class="dot">•</span>
              <span>Robota.ua</span> <span class="dot">•</span>`;

code = code.replace(/<div class="marquee-half">[\s\S]*?<\/div>/g, `<div class="marquee-half">\n              ${marqueeItems}\n            </div>`);

// I noticed the aria-hidden marquee-half is identical in the regex replacement above, so both will be updated!

fs.writeFileSync('src/popup/popup.html', code);
