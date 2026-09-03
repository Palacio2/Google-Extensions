window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.Widget = (function() {
  let badgeEl = null;
  let toggleBtnEl = null;

  return {
    init() {
      toggleBtnEl = document.createElement('button');
      toggleBtnEl.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`;
      toggleBtnEl.title = "Фільтр вакансій (Приховано: 0)"; // Початковий тултип
      Object.assign(toggleBtnEl.style, {
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        zIndex: '2147483646',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        boxShadow: '0 6px 16px rgba(37, 99, 235, 0.4)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
      });

      badgeEl = document.createElement('div');
      Object.assign(badgeEl.style, {
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontSize: '11px',
        fontWeight: 'bold',
        minWidth: '20px',
        height: '20px',
        borderRadius: '10px',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        border: '2px solid white'
      });
      toggleBtnEl.appendChild(badgeEl);

      toggleBtnEl.addEventListener('mouseenter', () => {
        toggleBtnEl.style.transform = 'translateY(-4px) scale(1.05)';
        toggleBtnEl.style.boxShadow = '0 10px 24px rgba(37, 99, 235, 0.5)';
      });
      toggleBtnEl.addEventListener('mouseleave', () => {
        toggleBtnEl.style.transform = 'translateY(0) scale(1)';
        toggleBtnEl.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
      });

      const iframeContainer = document.createElement('div');
      Object.assign(iframeContainer.style, {
        position: 'fixed',
        bottom: '95px',
        right: '25px',
        width: '350px',
        height: '580px',
        zIndex: '2147483647',
        borderRadius: '16px',
        boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
        overflow: 'hidden',
        backgroundColor: 'white',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        opacity: '0',
        transform: 'translateY(20px) scale(0.95)',
        pointerEvents: 'none',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        transformOrigin: 'bottom right'
      });

      const iframe = document.createElement('iframe');
      iframe.src = chrome.runtime.getURL('src/popup/popup.html') + '?injected=true';
      Object.assign(iframe.style, {
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block'
      });

      iframeContainer.appendChild(iframe);
      document.body.appendChild(toggleBtnEl);
      document.body.appendChild(iframeContainer);

      let isOpen = false;
      toggleBtnEl.addEventListener('click', () => {
        isOpen = !isOpen;
        if(isOpen) {
          iframeContainer.style.opacity = '1';
          iframeContainer.style.transform = 'translateY(0) scale(1)';
          iframeContainer.style.pointerEvents = 'auto';
          toggleBtnEl.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
          toggleBtnEl.appendChild(badgeEl);
          toggleBtnEl.style.backgroundColor = '#475569';
          toggleBtnEl.style.boxShadow = '0 6px 16px rgba(71, 85, 105, 0.4)';
        } else {
          iframeContainer.style.opacity = '0';
          iframeContainer.style.transform = 'translateY(20px) scale(0.95)';
          iframeContainer.style.pointerEvents = 'none';
          toggleBtnEl.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`;
          toggleBtnEl.appendChild(badgeEl);
          toggleBtnEl.style.backgroundColor = '#2563eb';
          toggleBtnEl.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
        }
      });
    },

    updateBadge(count) {
      if (!badgeEl || !toggleBtnEl) return;
      
      // Оновлюємо нативний тултип кнопки
      toggleBtnEl.title = `Фільтр вакансій (Приховано: ${count})`;
      
      if (count > 0) {
        badgeEl.textContent = count > 99 ? '99+' : count;
        badgeEl.style.display = 'flex';
      } else {
        badgeEl.style.display = 'none';
      }
    }
  };
})();
