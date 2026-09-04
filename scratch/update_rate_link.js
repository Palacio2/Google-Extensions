const fs = require('fs');
let html = fs.readFileSync('src/popup/popup.html', 'utf8');
html = html.replace('href="#" target="_blank" id="rateBtn"', 'href="https://chromewebstore.google.com/detail/knhehjbjfifinnhngibfmpgpbmpedmlj/reviews" target="_blank" id="rateBtn"');
fs.writeFileSync('src/popup/popup.html', html);
