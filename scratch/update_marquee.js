const fs = require('fs');
let code = fs.readFileSync('src/popup/popup.html', 'utf8');

const marqueeItems = `<span>OLX.ua</span> <span class="dot">•</span>
              <span>OLX.pl</span> <span class="dot">•</span>
              <span>Pracuj.pl</span> <span class="dot">•</span>
              <span>Work.ua</span> <span class="dot">•</span>
              <span>Robota.ua</span> <span class="dot">•</span>
              <span>Jooble</span> <span class="dot">•</span>
              <span>GoWork.pl</span> <span class="dot">•</span>
              <span>Praca.pl</span> <span class="dot">•</span>`;

code = code.replace(/<div class="marquee-half">[\s\S]*?<\/div>/g, `<div class="marquee-half">\n              ${marqueeItems}\n            </div>`);

fs.writeFileSync('src/popup/popup.html', code);
