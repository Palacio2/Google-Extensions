const fs = require('fs');
let code = fs.readFileSync('src/content/core/filter.js', 'utf8');

code = code.replace(
/elementsArray\.slice\(i, i \+ BATCH\)\.forEach\(element => \{([\s\S]*?)const shouldHide = keywords\.some\(keyword => text\.includes\(keyword\)\);([\s\S]*?)if \(shouldHide\) \{([\s\S]*?)this\.adapter\.hideElement\(element, this\.settings\.revealHidden\);([\s\S]*?)\} else \{([\s\S]*?)\}\);/gm,
`let newHiddenCount = 0;
        elementsArray.slice(i, i + BATCH).forEach(element => {$1const shouldHide = keywords.some(keyword => text.includes(keyword));$2if (shouldHide) {$3if (!element.hasAttribute('data-jf-counted')) {
              element.setAttribute('data-jf-counted', 'true');
              newHiddenCount++;
            }
            this.adapter.hideElement(element, this.settings.revealHidden);$4} else {$5});
        if (newHiddenCount > 0) {
          window.JobFilterExt.Storage.incrementStats(newHiddenCount);
        }`);

fs.writeFileSync('src/content/core/filter.js', code);
