function toggleText() {
<<<<<<< HEAD
  // ваш код...
=======
>>>>>>> 3e67c8bba6370da056995e6fdbb0e71c8c4a3ddd
  let toggleButton = document.querySelector('.toggle-text-button');
  let textElement = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    let isTextElementHidden = textElement.hidden;
    textElement.hidden = !isTextElementHidden;
  });
}
