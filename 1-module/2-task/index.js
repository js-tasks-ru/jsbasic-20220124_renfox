function print(text) {
  console.log(text);
}

function isValid(name) {

  if ( !!name && name.length >= 4 &&  !name.includes(' ')) {
    return true;
  } else {
    return false;
  }
  
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
