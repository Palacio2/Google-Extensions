window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.BaseAdapter = class BaseAdapter {
  getListingElements() {
    throw new Error('getListingElements must be implemented');
  }

  getListingText(element) {
    throw new Error('getListingText must be implemented');
  }

  hideElement(element, revealHidden) {
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
