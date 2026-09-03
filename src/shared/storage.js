window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.Storage = {
  DEFAULT_SETTINGS: {
    enabled: true,
    targetCountry: 'pl',
    revealHidden: false,
    activeGroups: { pl: [], ua: [] },
    customKeywords: { pl: [], ua: [] }
  },

  async getSettings() {
    return new Promise((resolve) => {
      chrome.storage.local.get('settings', (data) => {
        let settings = data.settings ? { ...this.DEFAULT_SETTINGS, ...data.settings } : { ...this.DEFAULT_SETTINGS };
        
        // Ensure legacy targetCountry fallback
        if (!settings.targetCountry) settings.targetCountry = 'pl';
        if (typeof settings.revealHidden === 'undefined') settings.revealHidden = false;

        // Migration for activeGroups (Array -> Object)
        if (Array.isArray(settings.activeGroups)) {
          const oldGroups = settings.activeGroups;
          settings.activeGroups = { pl: [], ua: [] };
          oldGroups.forEach(g => {
            if (g.endsWith('_pl')) settings.activeGroups.pl.push(g);
            else if (g.endsWith('_ua')) settings.activeGroups.ua.push(g);
            else {
              if (settings.activeGroups[settings.targetCountry]) {
                 settings.activeGroups[settings.targetCountry].push(g);
              }
            }
          });
        }
        
        // Migration for customKeywords (Array -> Object)
        if (Array.isArray(settings.customKeywords)) {
          const oldKeywords = settings.customKeywords;
          settings.customKeywords = { pl: [], ua: [] };
          if (settings.customKeywords[settings.targetCountry]) {
             settings.customKeywords[settings.targetCountry] = oldKeywords;
          }
        }
        
        // Fallbacks if somehow missing for a specific country
        if (!settings.activeGroups.pl) settings.activeGroups.pl = [];
        if (!settings.activeGroups.ua) settings.activeGroups.ua = [];
        if (!settings.customKeywords.pl) settings.customKeywords.pl = [];
        if (!settings.customKeywords.ua) settings.customKeywords.ua = [];

        resolve(settings);
      });
    });
  },

  async saveSettings(settings) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ settings }, () => {
        resolve();
      });
    });
  },

  onChange(callback) {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && changes.settings) {
        callback(changes.settings.newValue);
      }
    });
  }
};
