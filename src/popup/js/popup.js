document.addEventListener('DOMContentLoaded', async () => {
  const i18n = {
    t: (key) => chrome.i18n.getMessage(key) || key,
    applyToDOM: (root = document) => {
      root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
          if (el.tagName === 'INPUT' && el.type === 'text') {
            el.placeholder = i18n.t(key);
          } else {
            el.textContent = i18n.t(key);
          }
        }
      });
      root.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (key) el.title = i18n.t(key);
      });
    }
  };
  
  i18n.applyToDOM();
  
  // Rotating Promo Slider Banner Logic
  const config = window.JobFilterExt.Constants.CONFIG;
  const promoSliderBanner = document.getElementById('promoSliderBanner');
  const promoInner = document.getElementById('promoInner');
  const promoIcon = document.getElementById('promoIcon');
  const promoTitle = document.getElementById('promoTitle');
  const promoDesc = document.getElementById('promoDesc');
  const promoBtn = document.getElementById('promoBtn');
  const promoDots = document.getElementById('promoDots');

  if (config && config.SHOW_PROMO_SLIDER && config.PROMO_BANNERS && promoSliderBanner) {
    const banners = config.PROMO_BANNERS.filter(b => b.enabled !== false);
    if (banners.length > 0) {
      promoSliderBanner.style.display = 'flex';
      let currentBannerIdx = 0;
      let rotationInterval = null;

    promoDots.innerHTML = '';
    banners.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = 'promo-dot' + (idx === 0 ? ' active' : '');
      promoDots.appendChild(dot);
    });

    const updateBanner = (idx) => {
      const item = banners[idx];
      promoSliderBanner.href = item.url;
      if (item.icon && (item.icon.includes('.svg') || item.icon.includes('.png') || item.icon.includes('.jpg'))) {
        const isWide = item.icon.toLowerCase().includes('logo');
        if (isWide) {
          promoIcon.innerHTML = `<div style="background: white; border-radius: 7px; padding: 3px 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: center; height: 26px;"><img src="${item.icon}" alt="logo" style="width: 40px; height: auto; display: block; object-fit: contain;"></div>`;
        } else {
          promoIcon.innerHTML = `<img src="${item.icon}" alt="logo" style="width: 26px; height: 26px; border-radius: 6px; object-fit: contain; display: block;">`;
        }
      } else {
        promoIcon.textContent = item.icon;
      }
      promoTitle.textContent = i18n.t(item.titleKey);
      promoDesc.textContent = i18n.t(item.descKey);
      promoBtn.textContent = i18n.t(item.btnKey);

      Array.from(promoDots.children).forEach((dot, dIdx) => {
        dot.classList.toggle('active', dIdx === idx);
      });
    };

    updateBanner(0);

    if (banners.length > 1) {
      const startRotation = () => {
        stopRotation();
        rotationInterval = setInterval(() => {
          if (promoInner) promoInner.classList.add('slide-fade');
          setTimeout(() => {
            currentBannerIdx = (currentBannerIdx + 1) % banners.length;
            updateBanner(currentBannerIdx);
            if (promoInner) promoInner.classList.remove('slide-fade');
          }, 250);
        }, config.SLIDER_INTERVAL_MS || 5000);
      };

      const stopRotation = () => {
        if (rotationInterval) clearInterval(rotationInterval);
      };

      startRotation();

      promoSliderBanner.addEventListener('mouseenter', stopRotation);
      promoSliderBanner.addEventListener('mouseleave', startRotation);
    }
  }
}
  
  const enableToggle = document.getElementById('enableToggle');
  const mainToggleStatus = document.getElementById('mainToggleStatus');
  const filterDisabledNotice = document.getElementById('filterDisabledNotice');
  const revealRow = document.getElementById('revealRow');
  const revealToggle = document.getElementById('revealToggle');
  const revealStatusText = document.getElementById('revealStatusText');
  const categoriesList = document.getElementById('categoriesList');
  const keywordInput = document.getElementById('keywordInput');
  const addBtn = document.getElementById('addBtn');
  const keywordsList = document.getElementById('keywordsList');
  const clearAllBtn = document.getElementById('clearAllBtn');
  

  const statTotal = document.getElementById('statTotal');
  const statTime = document.getElementById('statTime');

  window.JobFilterExt.Storage.getStats().then(stats => {
    if (statTotal && statTime) {
      const hidden = stats.totalHidden || 0;
      statTotal.textContent = hidden;
      // Assume 1 ad = 3 seconds saved. Convert to minutes.
      const timeSavedMins = Math.floor((hidden * 3) / 60);
      statTime.textContent = timeSavedMins + ' ' + i18n.t('min_short', 'хв');
    }
  });

  const btnCountryPl = document.getElementById('btnCountryPl');
  const btnCountryUa = document.getElementById('btnCountryUa');

  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => {
        c.style.opacity = '0';
        setTimeout(() => c.classList.remove('active'), 150);
      });
      
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      setTimeout(() => {
        target.classList.add('active');
        setTimeout(() => target.style.opacity = '1', 50);
      }, 150);
    });
  });

  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');

  function customConfirm(title, message, isAlert = false) {
    return new Promise((resolve) => {
      modalTitle.textContent = title;
      if (typeof message === 'string') {
        modalMessage.textContent = message;
      } else {
        modalMessage.textContent = '';
        modalMessage.appendChild(message);
      }
      modalOverlay.classList.add('active');

      if (isAlert) {
        modalCancelBtn.style.display = 'none';
        modalConfirmBtn.textContent = i18n.t('ok');
        modalConfirmBtn.className = 'btn-primary';
      } else {
        modalCancelBtn.style.display = 'block';
        modalConfirmBtn.textContent = i18n.t('delete');
        modalConfirmBtn.className = 'btn-danger';
      }

      const cleanup = () => {
        modalConfirmBtn.removeEventListener('click', onConfirm);
        modalCancelBtn.removeEventListener('click', onCancel);
        modalOverlay.classList.remove('active');
      };

      const onConfirm = () => { cleanup(); resolve(true); };
      const onCancel = () => { cleanup(); resolve(false); };

      modalConfirmBtn.addEventListener('click', onConfirm);
      modalCancelBtn.addEventListener('click', onCancel);
    });
  }

  let settings = await window.JobFilterExt.Storage.getSettings();

  // РОЗУМНЕ АВТОВИЗНАЧЕННЯ: перевіряємо відкриту вкладку і самі ставимо потрібну країну
  await new Promise((resolve) => {
    try {
      if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
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
      } else {
        // Якщо попап всередині iframe: визначаємо домен через ancestorOrigins або реферер
        const ancestor = (window.location.ancestorOrigins && window.location.ancestorOrigins[0]) || document.referrer;
        if (ancestor) {
          try {
            const url = new URL(ancestor);
            let detected = null;
            if (url.hostname.endsWith('.ua')) detected = 'ua';
            else if (url.hostname.endsWith('.pl')) detected = 'pl';
            if (detected && detected !== settings.targetCountry) {
              settings.targetCountry = detected;
              window.JobFilterExt.Storage.saveSettings(settings).then(resolve).catch(resolve);
              return;
            }
          } catch(e) {}
        }
        resolve();
      }
    } catch(e) {
      resolve();
    }
  });


  const updateMainToggleUI = (isEnabled) => {
    enableToggle.checked = isEnabled;
    if (mainToggleStatus) {
      mainToggleStatus.textContent = isEnabled ? i18n.t('on') : i18n.t('off');
      mainToggleStatus.style.color = isEnabled ? '#2563eb' : '#ef4444';
    }
    if (filterDisabledNotice) {
      filterDisabledNotice.style.display = isEnabled ? 'none' : 'block';
    }
  };

  updateMainToggleUI(settings.enabled);
  revealToggle.checked = settings.revealHidden;
  if (revealStatusText) revealStatusText.textContent = settings.revealHidden ? i18n.t('on') : i18n.t('off');

  function updateCountrySegmentUI(country) {
    if (btnCountryPl && btnCountryUa) {
      btnCountryPl.classList.toggle('active', country === 'pl');
      btnCountryUa.classList.toggle('active', country === 'ua');
    }
  }

  updateCountrySegmentUI(settings.targetCountry);
  renderCategories();
  renderCustomKeywords();

  if (btnCountryPl) {
    btnCountryPl.addEventListener('click', async () => {
      if (settings.targetCountry !== 'pl') {
        settings.targetCountry = 'pl';
        updateCountrySegmentUI('pl');
        await window.JobFilterExt.Storage.saveSettings(settings);
        renderCategories();
        renderCustomKeywords();
      }
    });
  }

  if (btnCountryUa) {
    btnCountryUa.addEventListener('click', async () => {
      if (settings.targetCountry !== 'ua') {
        settings.targetCountry = 'ua';
        updateCountrySegmentUI('ua');
        await window.JobFilterExt.Storage.saveSettings(settings);
        renderCategories();
        renderCustomKeywords();
      }
    });
  }

  enableToggle.addEventListener('change', async (e) => {
    settings.enabled = e.target.checked;
    updateMainToggleUI(settings.enabled);
    await window.JobFilterExt.Storage.saveSettings(settings);
  });

  revealRow.addEventListener('click', async () => {
    revealToggle.checked = !revealToggle.checked;
    settings.revealHidden = revealToggle.checked;
    if (revealStatusText) revealStatusText.textContent = revealToggle.checked ? i18n.t('on') : i18n.t('off');
    await window.JobFilterExt.Storage.saveSettings(settings);
  });

  const addKeyword = async () => {
    const word = keywordInput.value.trim().toLowerCase();
    const country = settings.targetCountry;
    if (word && !settings.customKeywords[country].includes(word)) {
      settings.customKeywords[country].push(word);
      await window.JobFilterExt.Storage.saveSettings(settings);
      keywordInput.value = '';
      renderCustomKeywords();
    }
  };

  addBtn.addEventListener('click', addKeyword);
  keywordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addKeyword();
  });

  clearAllBtn.addEventListener('click', async () => {
    const country = settings.targetCountry;
    if (settings.customKeywords[country].length === 0) return;
    const isConfirmed = await customConfirm(i18n.t('confirm_title'), i18n.t('confirm_clear'));
    if (isConfirmed) {
      settings.customKeywords[country] = [];
      await window.JobFilterExt.Storage.saveSettings(settings);
      renderCustomKeywords();
    }
  });

  function renderCategories() {
    categoriesList.innerHTML = '';
    const currentCategories = window.JobFilterExt.Constants.CATEGORIES[settings.targetCountry] || [];

    currentCategories.forEach(cat => {
      const row = document.createElement('div');
      row.className = 'settings-row';
      
      const labelContainer = document.createElement('div');
      labelContainer.className = 'settings-label';
      labelContainer.textContent = i18n.t(cat.nameKey);
      
      const rightSide = document.createElement('div');
      rightSide.className = 'settings-right';

      const infoIcon = document.createElement('div');
      infoIcon.className = 'info-icon';
      infoIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
      
      infoIcon.style.pointerEvents = 'auto';
      infoIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        
        modalTitle.textContent = i18n.t(cat.nameKey);
        
        // Покращений дизайн тегів, безпечний рендер
        const tagsContainer = document.createElement('div');
        tagsContainer.style.display = 'flex';
        tagsContainer.style.flexWrap = 'wrap';
        tagsContainer.style.textAlign = 'left';
        tagsContainer.style.lineHeight = '1.6';
        
        cat.words.forEach(w => {
          const span = document.createElement('span');
          span.className = 'keyword-tag';
          span.style.cssText = 'display:inline-flex; margin:4px 6px 4px 0; padding:6px 14px; font-size:13px; background:#f8fafc; color:#334155; border:1px solid #e2e8f0; font-weight:500; border-radius:8px;';
          span.textContent = w;
          tagsContainer.appendChild(span);
        });
        
        modalMessage.innerHTML = '';
        modalMessage.appendChild(tagsContainer);
        
        modalCancelBtn.style.display = 'none';
        modalConfirmBtn.textContent = i18n.t('ok');
        modalConfirmBtn.className = 'btn-primary';
        
        modalOverlay.classList.add('active');
        
        const cleanup = () => {
          modalConfirmBtn.removeEventListener('click', cleanup);
          modalOverlay.classList.remove('active');
          setTimeout(() => {
             modalMessage.innerHTML = '';
          }, 200);
        };
        modalConfirmBtn.addEventListener('click', cleanup);
      });
      
      const statusText = document.createElement('span');
      statusText.className = 'settings-status';
      const isActive = settings.activeGroups[settings.targetCountry].includes(cat.id);
      statusText.textContent = isActive ? i18n.t('on') : i18n.t('off');
      
      const toggleLabel = document.createElement('label');
      toggleLabel.className = 'toggle-switch';
      toggleLabel.style.pointerEvents = 'none';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isActive;
      
      const slider = document.createElement('span');
      slider.className = 'slider';
      
      toggleLabel.appendChild(checkbox);
      toggleLabel.appendChild(slider);
      
      rightSide.appendChild(infoIcon);
      rightSide.appendChild(statusText);
      rightSide.appendChild(toggleLabel);
      
      row.appendChild(labelContainer);
      row.appendChild(rightSide);
      
      row.addEventListener('click', async () => {
        checkbox.checked = !checkbox.checked;
        const country = settings.targetCountry;
        
        if (checkbox.checked) {
          if (!settings.activeGroups[country].includes(cat.id)) settings.activeGroups[country].push(cat.id);
          statusText.textContent = i18n.t('on');
        } else {
          settings.activeGroups[country] = settings.activeGroups[country].filter(id => id !== cat.id);
          statusText.textContent = i18n.t('off');
        }
        
        await window.JobFilterExt.Storage.saveSettings(settings);
      });
      
      categoriesList.appendChild(row);
    });
  }

  function renderCustomKeywords() {
    keywordsList.innerHTML = '';
    const country = settings.targetCountry;
    
    if (settings.customKeywords[country].length === 0) {
      keywordsList.innerHTML = `<span style="color: #94a3b8; font-size: 13px; font-style: italic;">${i18n.t('empty_list')}</span>`;
      return;
    }

    settings.customKeywords[country].forEach((keyword, index) => {
      const tag = document.createElement('div');
      tag.className = 'keyword-tag';
      
      const text = document.createElement('span');
      text.textContent = keyword;
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.innerHTML = '&times;';
      removeBtn.addEventListener('click', async () => {
        settings.customKeywords[country].splice(index, 1);
        await window.JobFilterExt.Storage.saveSettings(settings);
        renderCustomKeywords();
      });

      tag.appendChild(text);
      tag.appendChild(removeBtn);
      keywordsList.appendChild(tag);
    });
  }
});
