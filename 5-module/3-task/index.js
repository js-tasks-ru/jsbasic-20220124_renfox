function initCarousel() {
  // получаем размер блока слайдера offsetWidth
  let wdthSlide = document.querySelector('.carousel__inner').offsetWidth;
  // получаем все имеющиеся слайды
  let listSlide = document.querySelectorAll('.carousel__slide');
  // получаем 1 слайд
  let slide = document.querySelector('.carousel__inner');
  // указываем видимое количество слайдов ( активных)
  let count = 0;
  // Положение прокрутки
  let position = 0;
  let arrRight = document.querySelector('.carousel__arrow_right');
  let arrLeft = document.querySelector('.carousel__arrow_left');
  
 /* мой вариант решения

  arrRight.onclick = function () {
    // сдвиг вправо
    count--;
    position = wdthSlide * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -wdthSlide * - count);
    slide.style.marginLeft = position + 'px';
    
    // условие скрытия/появления стрелок
    if (count == -3) {
      arrRight.style.display = 'none';
    } else {
      arrLeft.style.display = 'flex';
    }
    
  }

  arrLeft.onclick = function () {
    // сдвиг влево
    count++;
    position = +wdthSlide * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    // указываем отступ от позиции прокрутки
    slide.style.marginLeft = position + 'px';

    // условие скрытия/появления стрелок
    if (count == 0) {
      arrLeft.style.display = 'none';
    } else {
      arrRight.style.display = 'flex';
    }
  } 
} */
arrLeft.style.display = 'none';
// второй вариант решения + для тестов
arrLeft .addEventListener('click', function() {
  count--;

  slide.style.transform = "translateX(-" + slide.offsetWidth * count + "px)";

  if (count == 0) {
    arrLeft.style.display = 'none';
  } else {
    arrRight.style.display = 'flex';
  }

});
arrRight.addEventListener('click', function() {
  count++;

  slide.style.transform = "translateX(-" + slide.offsetWidth * count + "px)";

  if (count == 3) {
    arrRight.style.display = 'none';
  } else {
    arrLeft.style.display = 'flex';
  }
  

});

}