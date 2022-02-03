function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if ( typeof salaries[key] == 'number' && salaries[key] > 0 && salaries[key] != Infinity  ) {
       sum += salaries[key];
    }
  }
  
  return sum;

}


