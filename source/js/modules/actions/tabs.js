const addTabHandler = () => {
  if (document.querySelector('.news__tabs')) {
    const ACTIVE__CLASS = 'is-active';
    const root = document.querySelector('.news__tabs');
    const news = document.querySelectorAll('.news__list .news__item');
    const tabs = root.querySelectorAll('.news__btn');

    root.addEventListener('click', (evt) => {
      tabs.forEach((tab) => {
        if (evt.target.matches('.news__btn')) {
          tab.classList.remove(ACTIVE__CLASS);
          evt.target.classList.add(ACTIVE__CLASS);
        }
      });
      const theme = evt.target.getAttribute('data-sort');
      if (theme === 'general') {
        news.forEach((el) => {
          el.style.display = 'flex';
        });
      } else {
        news.forEach((el) => {
          const attr = el.getAttribute('data-sort');
          if (attr === theme) {
            el.style.display = 'flex';
          } else {
            el.style.display = 'none';
          }
        });
      }
    });
  }
  return null;
};

export {addTabHandler};
