const initModals = () => {
  const modalContainer = document.querySelector('.modal__wrapper');
  const modalPin = modalContainer.querySelector('.modal__close');
  const modalTemplate = document.querySelector('.feedback__form');
  const modalElement = modalTemplate.cloneNode(true);
  modalContainer.insertBefore(modalElement, modalPin);
};

const addModalOpen = () => {
  initModals(document.querySelector('.modal'));
  document.querySelector('.btn--modal').addEventListener('click', () => {
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

export {addModalOpen};
