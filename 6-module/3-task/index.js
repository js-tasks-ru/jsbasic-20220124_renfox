import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    
    this.elem = createElement(`
    <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
    `);
    this.render();
    this.scroll();
    // вызов функций в классе
    this.elem.addEventListener('click', (event) => {
      let button = event.target.closest('.carousel__button');

      if (button) {
        let id = event.target.closest('[data-id]').dataset.id;

        const productaddEvent = new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }); // создание функции клика и создание кастомного события, передача
        // detail с prodid
        // передача флага bubbles:true, иначе наше событие не будет всплывать.
        this.elem.dispatchEvent(productaddEvent);
      }

      

    /*   После того, как объект события создан, мы должны запустить его на элементе, вызвав метод elem.dispatchEvent(event).
    
    Затем обработчики отреагируют на него, как будто это обычное браузерное событие. Если при создании указан флаг bubbles, то оно будет всплывать. */
    });
    this.elem.addEventListener('product-add', (event) => {
  
    });
  }
  
  render() {
    let inner = this.elem.querySelector('.carousel__inner');
    for (let slide of this.slides) {
      
      inner.insertAdjacentHTML('beforeend', `
            <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
      `);
         
    }
    
  }

// указание функций в классе происходит таким образом
scroll() {
  let currentSlideNumber = 0; 
  let carouselInnerElem = this.elem.querySelector('.carousel__inner');
              let arrowRigth = this.elem.querySelector('.carousel__arrow_right');
              let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
              let left = arrowLeft.addEventListener('click', leftWay);
              let rigth = arrowRigth.addEventListener('click', rigthWay);
              arrowLeft.style.display = 'none';
 function update() {
                if (currentSlideNumber == 2) {
                    arrowRigth.style.display = 'none';
                } else {
                  arrowRigth.style.display = '';
                }
            
                if (currentSlideNumber == 0) {
                  arrowLeft.style.display = 'none';
                } else {
                  arrowLeft.style.display = '';
                }
              }
             

              function rigthWay() {
                currentSlideNumber += 1; 
                let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
                  carouselInnerElem.style.transform = `translateX(${offset}px)`;
            
                  update();
                  
                }
              
              function leftWay() {
                  currentSlideNumber -= 1; 
                  let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
                  carouselInnerElem.style.transform = `translateX(${offset}px)`;
                  
                  update();
              }
              
              
              
}


}