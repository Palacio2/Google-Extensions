window.JobFilterExt = window.JobFilterExt || {};

window.JobFilterExt.WorkUaAdapter = class WorkUaAdapter extends window.JobFilterExt.BaseAdapter {
  getListingElements() {
    // Основні селектори карток вакансій на work.ua
    return document.querySelectorAll('.card.card-hover, .job-link');
  }

  getListingText(element) {
    // Шукаємо заголовок, опис, компанію
    const title = element.querySelector('h2');
    const desc = element.querySelector('p');
    const allText = element.innerText || element.textContent || '';
    return allText.replace(/\s+/g, ' ');
  }

  hideElement(element, revealHidden, reason) {
    super.hideElement(element, revealHidden, reason);
    if (!revealHidden) {
      element.style.opacity = '0.1';
      element.style.pointerEvents = 'none';
      element.style.display = 'none'; // Повністю ховаємо для Work.ua
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
