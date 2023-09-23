import {Modals} from './modals';
import {Form} from '../form-validate/form';

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('#modal');
  const modalContainer = document.querySelector('.modal__wrapper');
  const modalPin = modalContainer.querySelector('.modal__close');
  const modalTemplate = document.querySelector('.feedback__form');
  const modalElement = modalTemplate.cloneNode(true);
  modalContainer.insertBefore(modalElement, modalPin);

  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;


};

export {modals, initModals};
