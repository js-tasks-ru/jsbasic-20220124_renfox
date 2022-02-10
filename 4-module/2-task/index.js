/*
function makeDiagonalRed(table) {
  
    let rowsLength = table.rows.length;
    let rows = table.rows;
  
    for (let i = 0; i < rowsLength; i++) {
      let row = rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
  }
  */


// Моё решение.

function makeDiagonalRed(table) {
  let trows = table;

  for (let i = 0; i < trows.rows.length; i++) {
    let row = trows.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
 
  }
  
// посмотрел решение т.к. тестам не нравился вариант получения таблицы через Селектор, сейчас понял что есть атрибут функции, который уже берет таблицу.

 
