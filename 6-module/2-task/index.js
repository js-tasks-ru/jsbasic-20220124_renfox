
 export default class ProductCard {
  constructor(product) {
    let toFixeds = product.price.toFixed(2); // указание 00 после цены
    let prodid = product.id; // получение product.id из объекта в html
    this.elem = document.createElement('div') // не понятно зачем, но иначе не работает
    this.elem.innerHTML = `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${toFixeds}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`;
// создание разметки в html через class => constructor
this.elem.addEventListener('click', () => {
  const productaddEvent = new CustomEvent('product-add', {
		detail: prodid,
    bubbles: true
	}); // создание функции клика и создание кастомного события, передача
  // detail с prodid
  // передача флага bubbles:true, иначе наше событие не будет всплывать.
  this.elem.dispatchEvent(productaddEvent);
/*   После того, как объект события создан, мы должны запустить его на элементе, вызвав метод elem.dispatchEvent(event).

Затем обработчики отреагируют на него, как будто это обычное браузерное событие. Если при создании указан флаг bubbles, то оно будет всплывать. */
});
this.elem.addEventListener('product-add', (event) => {
  
});
// вызов самого кастомного события
  }
 
} 
