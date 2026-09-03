const fs = require('fs');
let code = fs.readFileSync('src/content/index.js', 'utf8');

const replacement = `  } else if (hostname.includes('robota.ua')) {
    adapter = new window.JobFilterExt.RobotaUaAdapter();
  } else if (hostname.includes('jooble.org') || hostname.includes('jooble.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('article, [data-test-name="jobCard"], .job-card, .vacancy-card');
  } else if (hostname.includes('gowork.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('.job-item, .g-job-item, [data-job-id]');
  } else if (hostname.includes('praca.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('.listing__item, .offer__item, .p-offer-list__item');
  }`;

code = code.replace(`  } else if (hostname.includes('robota.ua')) {\n    adapter = new window.JobFilterExt.RobotaUaAdapter();\n  }`, replacement);
fs.writeFileSync('src/content/index.js', code);
