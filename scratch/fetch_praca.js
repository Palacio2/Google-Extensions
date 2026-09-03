const https = require('https');
https.get('https://www.praca.pl/s-kurier,m-bydgoszcz.html', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/class="[^"]*"/g) || [];
    const counts = {};
    matches.forEach(m => counts[m] = (counts[m]||0)+1);
    Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0, 30).forEach(x=>console.log(x[0], x[1]));
  });
}).on('error', console.error);
