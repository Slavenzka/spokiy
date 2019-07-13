(function () {
  'use strict';

  const triggers = document.querySelectorAll('div:not(.cart-btns-wrapp) > .btn.btn-aniborder');
  const modal = document.querySelector('.popup');
  const ESC_KEY = 27;

  function handleModal (triggers, modal) {
    function closeModal () {
      const closeBtn = modal.querySelector('.popup__close');
      closeBtn.addEventListener('click', evt => {
        modal.classList.remove('popup-opened');
      })
      modal.addEventListener('click', evt => {
        evt.target.classList.value === 'popup popup-opened' && modal.classList.remove('popup-opened');
      })
      document.addEventListener('keydown', evt => {
        if (evt.keyCode === ESC_KEY) {
          modal.classList.remove('popup-opened');
        }
      })
    }
    function modifyModalContent (evt) {
      if (evt.target.dataset.type === 'call') {
        modal.querySelector('.popup__list').style = 'display: none';
        modal.querySelector('.popup__img').src = 'img/modal/image-for-callback.png';
        modal.querySelector('.popup__caption').textContent = 'Заказать обратный звонок'
        modal.querySelector('.popup__descriptor').textContent = 'Хотите, чтобы мы вам' +
          ' перезвонили? Оставьте свой номер телефона и наш менеджер свяжется с Вами в ближайшее время';
        modal.querySelector('.popup__label').style = 'display: none';
        modal.querySelector('.popup__input').style = 'margin-top: 30px';
      } else {
        modal.querySelector('.popup__list').style = 'display: block';
        modal.querySelector('.popup__img').src = 'img/modal/image-for-callback2.png';
        modal.querySelector('.popup__caption').textContent = 'Хотите заказать услугу?';
        modal.querySelector('.popup__descriptor').textContent = 'Перезвоните на один из номеров ниже или оставьте свой номер телефона, чтобы мы перезвонили Вам. Наши номера:';
        modal.querySelector('.popup__label').style = 'display: block';
        modal.querySelector('.popup__input').style = 'margin-top: 0';
      }
    }
    triggers.forEach(item => {
      item.addEventListener('click', evt => {
        modal.classList.add('popup-opened');
        modifyModalContent(evt);
        closeModal();
      })
    })
  }

  handleModal(triggers, modal);
})();
