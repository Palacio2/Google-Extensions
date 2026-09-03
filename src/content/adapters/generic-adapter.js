window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.GenericAdapter = class GenericAdapter extends window.JobFilterExt.BaseAdapter {
  constructor(selectors) {
    super();
    this.selectors = selectors;
  }

  getListingElements() {
    return document.querySelectorAll(this.selectors);
  }

  getListingText(element) {
    return element.textContent || element.innerText || '';
  }
};
