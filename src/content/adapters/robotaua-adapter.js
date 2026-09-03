window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.RobotaUaAdapter = class RobotaUaAdapter extends window.JobFilterExt.BaseAdapter {
  getListingElements() {
    // Основні селектори карток вакансій на robota.ua
    return document.querySelectorAll('alliance-job-card, .card');
  }

  getListingText(element) {
    const allText = element.innerText || element.textContent || '';
    return allText.replace(/\s+/g, ' ');
  }

  hideElement(element, revealHidden, reason) {
    super.hideElement(element, revealHidden, reason);
    if (!revealHidden) {
      element.style.opacity = '0.1';
      element.style.pointerEvents = 'none';
      element.style.display = 'none'; // Повністю ховаємо
    } else {
      element.style.opacity = '0.5';
      element.style.pointerEvents = 'auto';
      element.style.display = '';
    }
  }

  showElement(element) {
    super.showElement(element);
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
    element.style.display = '';
  }
};
