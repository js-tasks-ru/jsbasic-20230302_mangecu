function getMinMax(str) {
  const arr = str
    .split(' ')
    .filter(el => !isNaN(el))
  return  {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr)
  }
}

