const addTabHandler = () => {
  if (document.querySelector('.news__tabs')) {
    const ACTIVE__CLASS = 'is-active';
    const root = document.querySelector('.news__tabs');
    // const news = document.querySelector('.news__list');
    const tabs = root.querySelectorAll('.news__btn');

    root.addEventListener('click', (evt) => {
      tabs.forEach((tab) => {
        if (evt.target.matches('.news__btn')) {
          tab.classList.remove(ACTIVE__CLASS);
          evt.target.classList.add(ACTIVE__CLASS);
        }
      });
      const theme = evt.target.getAttribute('data-sort');
      if (theme === 'general') { // если all
        document.querySelectorAll('.news__item').forEach.style.setProperty('visibility', 'visible'); // отображаем все позиции
      } else { // если не all
        document.querySelectorAll('.news__item').setProperty('visibility', 'hidden'); // скрываем все позиции
        document.querySelector('.news__item[data-sort="' + theme + '"]').setProperty('visibility', 'visible'); // и отображаем позиции из соответствующей категории
      }
    });
  }
  return null;
};

export {addTabHandler};
