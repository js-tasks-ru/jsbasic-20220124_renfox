import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    
   this.render();
    this.close();
  }
  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
}
  
    open() {
      document.body.classList.add('is-modal-open');
      document.body.append(this.elem);
    };
    setTitle(title) {
      this.elem.querySelector('.modal__title').textContent = title;
  }
  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = node.outerHTML;
  }
  close() {
    this.elem.querySelector('.modal__close').addEventListener('click', function() {
      document.body.classList.remove('is-modal-open');
      document.querySelector('.modal').remove();
    });
  }
}
