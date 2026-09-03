window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.BaseAdapter = class BaseAdapter {
  getListingElements() {
    throw new Error('getListingElements must be implemented');
  }

  getListingText(element) {
    throw new Error('getListingText must be implemented');
  }

  hideElement(element, revealHidden, reason) {
    if (reason) {
      const prefix = chrome.i18n.getMessage('hidden_badge') || 'HIDDEN';
      element.setAttribute('data-jf-reason', `${prefix} (${reason})`);
    }
    if (revealHidden) {
      element.classList.remove('job-filter-hidden');
      element.classList.add('job-filter-revealed');
    } else {
      element.classList.remove('job-filter-revealed');
      element.classList.add('job-filter-hidden');
    }
  }

  showElement(element) {
    element.classList.remove('job-filter-hidden', 'job-filter-revealed');
  }
};
