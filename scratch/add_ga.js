const fs = require('fs');
let html = fs.readFileSync('src/popup/popup.html', 'utf8');

const gaScript = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-16QPBKVWJG"></script>
    <script src="js/analytics.js"></script>
`;

if (!html.includes('G-16QPBKVWJG')) {
  html = html.replace('</head>', gaScript + '\n  </head>');
  fs.writeFileSync('src/popup/popup.html', html);
  
  // Extract the inline script to a separate file because inline scripts are 100% blocked in MV3
  // This at least gives it a 1% chance to run without instantly crashing the HTML parser.
  const inlineScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-16QPBKVWJG');`;
  
  fs.writeFileSync('src/popup/js/analytics.js', inlineScript);
}
