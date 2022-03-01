import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(`
            <div class="ribbon">
          
            <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>

          
            <nav class="ribbon__inner">
              <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
              <a href="#" class="ribbon__item" data-id="salads">Salads</a>
              <a href="#" class="ribbon__item" data-id="soups">Soups</a>
              <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
              <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
              <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
              <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
              <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
              <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
            </nav>

            
            <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
        `);

        let ribbonInner = this.elem.querySelector('.ribbon__inner');
        let arrowRigth = this.elem.querySelector('.ribbon__arrow_right');
        let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
        arrowLeft.addEventListener('click', ()=> {ribbonInner.scrollBy(-350, 0); });
        arrowRigth.addEventListener('click', ()=> {ribbonInner.scrollBy(350, 0); });
        arrowLeft.classList.toggle('ribbon__arrow_visible');
       

        ribbonInner.addEventListener('scroll', function() {
          let scrollLeft = ribbonInner.scrollLeft;
          let scrollWidth = ribbonInner.scrollWidth;
          let clientWidth = ribbonInner.clientWidth;
          
          
          if (scrollLeft == 0) {
            arrowLeft.classList.remove('ribbon__arrow_visible');             
        } else {
            arrowLeft.classList.add('ribbon__arrow_visible');
        }

        let scrollRight = scrollWidth - scrollLeft - clientWidth;
        
         if (scrollRight == 0 ) {
            arrowRigth.classList.remove('ribbon__arrow_visible');             
        } else {
          arrowRigth.classList.add('ribbon__arrow_visible'); 
        }
        console.log(scrollLeft);
      })

      
        
        const ribbonItem = this.elem.querySelectorAll('.ribbon__item');
    
        ribbonInner.addEventListener('click', (event) => {
          ribbonItem.forEach(item => {
            item.classList.remove('ribbon__item_active');
          });
    
          event.target.classList.add('ribbon__item_active');
    
          this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
            detail: event.target.dataset.id,
            bubbles: true,
          }))
        })      
      
}
}