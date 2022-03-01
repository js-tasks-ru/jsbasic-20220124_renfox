import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    
   
    this.open();
  }

  
    open() {
      document.body.classList.toggle('is-modal-open');
      this.modal = document.querySelector('.container');
      this.modal.innerHTML = `
        <div class="modal">
          <!--Прозрачная подложка перекрывающая интерфейс-->
          <div class="modal__overlay"></div>
  
          <div class="modal__inner">
            <div class="modal__header">
              <!--Кнопка закрытия модального окна-->
              <button type="button" class="modal__close">
                <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
  
              <h3 class="modal__title">
                Вот сюда нужно добавлять заголовок
              </h3>
            </div>
  
            <div class="modal__body">
              A сюда нужно дsобавлять содержимое тела модального окна
            </div>
          </div>
  
      </div>
  `;
      
    };
  
}
