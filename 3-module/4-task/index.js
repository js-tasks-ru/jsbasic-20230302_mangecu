function showSalary(users, age) {
  let result = users
    .filter(el => el.age <= age)
    .map(el => `${el.name}, ${el.balance}`)
    .join('\n')
  return result.toString()
}

