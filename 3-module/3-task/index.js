function camelize(str) {
  return str
    .split('-')
    .map((el,index) => {
      if (index === 0) {
        return el
      } else {
        return el.slice(0,1).toLocaleUpperCase() + el.slice(1, el.length)
      }
    })
    .join('')
}



