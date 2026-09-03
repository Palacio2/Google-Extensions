window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.FilterManager = class FilterManager {
  constructor(adapter) {
    this.adapter = adapter;
    this.settings = null;
    this.observer = null;
    this.debounceTimer = null;
  }

  async init() {
    this.settings = await window.JobFilterExt.Storage.getSettings();
    
    window.JobFilterExt.Storage.onChange((newSettings) => {
      this.settings = newSettings;
      this.applyFilter();
    });

    this.applyFilter();
    this.startObserver();
  }

  applyFilter() {
    const elements = this.adapter.getListingElements();
    this.processElements(elements);
  }

  processElements(elements) {
    if (!this.settings.enabled) {
      elements.forEach(el => this.adapter.showElement(el));
      this.updateBadge();
      return;
    }

    let country = this.settings.targetCountry;
    const hostname = window.location.hostname;
    if (hostname.endsWith('.ua')) {
      country = 'ua';
    } else if (hostname.endsWith('.pl')) {
      country = 'pl';
    }
    let allKeywords = [...(this.settings.customKeywords[country] || [])];
    
    if (this.settings.activeGroups && this.settings.activeGroups[country]) {
      const countryCategories = window.JobFilterExt.Constants.CATEGORIES[country] || [];
      
      this.settings.activeGroups[country].forEach(groupId => {
        const group = countryCategories.find(p => p.id === groupId);
        if (group) {
          allKeywords.push(...group.words);
        }
      });
    }

    const keywords = allKeywords.map(k => k.toLowerCase().trim()).filter(k => k);
    this.batchProcess(Array.from(elements), keywords);
  }

  async batchProcess(elementsArray, keywords) {
    if (keywords.length === 0) {
      elementsArray.forEach(el => this.adapter.showElement(el));
      this.updateBadge();
      return;
    }

    const BATCH = 30; // Збільшено розмір батчу для швидкості
    for (let i = 0; i < elementsArray.length; i += BATCH) {
      await new Promise(r => requestAnimationFrame(() => {
        let newHiddenCount = 0;
        elementsArray.slice(i, i + BATCH).forEach(element => {
          // Кешування тексту: читаємо DOM тільки 1 раз для кожної картки
          let text = element.getAttribute('data-cached-text');
          if (!text) {
            text = this.adapter.getListingText(element).toLowerCase();
            element.setAttribute('data-cached-text', text);
          }
          
          const matchedKeyword = keywords.find(keyword => text.includes(keyword));
          if (matchedKeyword) {
            if (!element.hasAttribute('data-jf-counted')) {
              element.setAttribute('data-jf-counted', 'true');
              newHiddenCount++;
            }
            this.adapter.hideElement(element, this.settings.revealHidden, matchedKeyword);
          } else {
            this.adapter.showElement(element);
          }
        });
        if (newHiddenCount > 0) {
          window.JobFilterExt.Storage.incrementStats(newHiddenCount);
        }
        r();
      }));
      if (globalThis.scheduler?.yield) await scheduler.yield();
    }
    
    this.updateBadge();
  }
  
  updateBadge() {
    const hiddenCount = document.querySelectorAll('.job-filter-hidden, .job-filter-revealed').length;
    if (window.JobFilterExt.Widget) {
      window.JobFilterExt.Widget.updateBadge(hiddenCount);
    }
  }

  startObserver() {
    this.observer = new MutationObserver((mutations) => {
      let shouldFilter = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldFilter = true;
          break;
        }
      }
      
      if (shouldFilter) {
        // ОПТИМІЗАЦІЯ: Дебаунсінг. Чекаємо поки DOM перестане змінюватися, замість того щоб запускати фільтр 100 разів на секунду.
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.applyFilter();
        }, 300);
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
