import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAccordions} from './vendor/accordion/init-accordion';
import {CustomSelect} from './vendor/select/custom-select';
import {Form} from './modules/form-validate/form';
import {addHeroSlider} from './modules/actions/hero-slider';
import {addToggleMenu} from './modules/actions/header-menu';
import {addProgramsSlider} from './modules/actions/programs';
import {addTabHandler} from './modules/actions/tabs';
import {addNewsSlider} from './modules/actions/news';
import {addReviewsSlider} from './modules/actions/reviews';

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  addHeroSlider();
  addToggleMenu();
  initAccordions();
  addProgramsSlider();
  addTabHandler();
  addNewsSlider();
  addReviewsSlider();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    addHeroSlider();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
