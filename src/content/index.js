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
  } else if (hostname.includes('work.ua')) {
    adapter = new window.JobFilterExt.WorkUaAdapter();
  } else if (hostname.includes('robota.ua')) {
    adapter = new window.JobFilterExt.RobotaUaAdapter();
  } else if (hostname.includes('jooble.org') || hostname.includes('jooble.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('article, [data-test-name="jobCard"], .job-card, .vacancy-card');
  } else if (hostname.includes('gowork.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('.job-item, .g-job-item, [data-job-id]');
  } else if (hostname.includes('praca.pl')) {
    adapter = new window.JobFilterExt.GenericAdapter('.listing__item, .offer__item, .p-offer-list__item');
  }

  if (adapter) {
    const filterManager = new window.JobFilterExt.FilterManager(adapter);
    await filterManager.init();
  }
})();
