window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.OlxAdapter = class OlxAdapter extends window.JobFilterExt.BaseAdapter {
  getListingElements() {
    return document.querySelectorAll(`
      [data-cy="l-card"], 
      [data-testid*="l-card"], 
      [data-testid*="adCard"], 
      [data-testid*="listing-card"],
      [data-testid="listing-grid"] > div, 
      [data-testid="listing-grid"] > li,
      [data-testid="listing-grid"] article,
      div[data-cy*="listing"]
    `);
  }

  getListingText(element) {
    // textContent працює в 100 разів швидше за innerText, оскільки не викликає перерахунку макета (reflow)
    return element.textContent || '';
  }
};
