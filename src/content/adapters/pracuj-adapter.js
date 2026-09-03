window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.PracujAdapter = class PracujAdapter extends window.JobFilterExt.BaseAdapter {
  getListingElements() {
    return document.querySelectorAll('[data-test="section-offers"] > div, .c1fljie5');
  }

  getListingText(element) {
    return element.innerText;
  }
};
