const addNewsFilter = () => {
  document.querySelector('.news__tabs').addEventListener('click', (evt) => {
    document.querySelectorAll('.news__tabs').classList.remove('is-active');
    evt.target.classList.add('is-active'); // выделяем выбранную категорию

    let visibleNews = evt.target.attr('data-sort'); // определяем категорию

    if (visibleNews === 'general') { // если all
      document.querySelectorAll('.news__item').forEach.style.setProperty('visibility', 'visible'); // отображаем все позиции
    } else { // если не all
      document.querySelector('.news__item').setProperty('visibility', 'hidden'); // скрываем все позиции
      document.querySelector('.news__item[data-sort="' + visibleNews + '"]').setProperty('visibility', 'visible'); // и отображаем позиции из соответствующей категории
    }
  });
};

export {addNewsFilter};
