// Entry point
(async function init() {
  if (window.self !== window.top) return; 



  // Initialize Widget
  if (window.JobFilterExt.Widget) {
    window.JobFilterExt.Widget.init();
  }

  const hostname = window.location.hostname;
  let adapter = null;

  if (hostname.includes('olx.ua') || hostname.includes('olx.pl')) {
    adapter = new window.JobFilterExt.OlxAdapter();
  } else if (hostname.includes('pracuj.pl')) {
    adapter = new window.JobFilterExt.PracujAdapter();
  }

  if (adapter) {
    const filterManager = new window.JobFilterExt.FilterManager(adapter);
    await filterManager.init();
  }
})();
