function makeDiagonalRed(table) {
  
    let rowsLength = table.rows.length;
    let rows = table.rows;
  
    for (let i = 0; i < rowsLength; i++) {
      let row = rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
  }



// Моё решение.
/*
function makeDiagonalRed(table) {
  let trows = document.querySelector("table");

  for (let i = 0; i < trows.rows.length; i++) {
    let row = trows.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
 
  }
  */
// Не понимаю почему не проходят тесты, по сути, всё тоже самое что 
// и в решении преподавателя, но ни один тест не прошел
