function sumSalary(salaries) {
  let sum = 0;
  for (let item in salaries) {
    if(salaries[item] !== Infinity && salaries[item] !== -Infinity && !isNaN(salaries[item])){
      sum += salaries[item];
    }
  }
  return sum
}
