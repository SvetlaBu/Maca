import {Modals} from './modals';

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
  const modalContainer = document.querySelector('.modal__wrapper');
  const modalPin = modalContainer.querySelector('.modal__close');
  const modalTemplate = document.querySelector('.feedback__form');
  const modalElement = modalTemplate.cloneNode(true);
  modalContainer.insertBefore(modalElement, modalPin);
  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

const addModalOpen = () => {
  initModals(document.querySelector('.modal'));
  document.querySelector('.btn__modal').addEventListener('click', () => {
    window.modal.showModal();
  });
  document.querySelector('.modal__close').addEventListener('click', () => {
    window.modal.close();
  });

  document.querySelector('.modal').addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({currentTarget, target}) {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement;
    if (isClickedOnBackDrop) {
      dialogElement.close();
    }
  }
};

export {modals, addModalOpen};
