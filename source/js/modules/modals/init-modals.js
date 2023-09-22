import '../../utils/scroll-lock';
import '../../utils/focus-lock';

const initModals = () => {
  const modalContainer = document.querySelector('.modal__wrapper');
  const modalPin = modalContainer.querySelector('.modal__close');
  const modalTemplate = document.querySelector('.feedback__form');
  const modalElement = modalTemplate.cloneNode(true);
  modalContainer.insertBefore(modalElement, modalPin);
};

const onDocumentKeydown = (evt) => {
  return evt.key === 'Escape' ? document.body.classList.remove('scroll-lock') : null;
};


const addModalOpen = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  initModals(document.querySelector('.modal'));
  document.querySelector('.btn--modal').addEventListener('click', () => {
    window.modal.showModal();
    document.body.classList.add('scroll-lock');
    window.focusLock.lock('#modal');
  });
  document.querySelector('.modal__close').addEventListener('click', () => {
    window.modal.close();
    document.body.classList.remove('scroll-lock');
    window.focusLock.unlock('#modal');
  });
  document.querySelector('.modal').addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({currentTarget, target}) {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement;
    if (isClickedOnBackDrop) {
      dialogElement.close();
      document.body.classList.remove('scroll-lock');
      window.focusLock.unlock('#modal');
    }
  }
};

export {addModalOpen};
