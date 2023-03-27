function filterRange(arr, a = 0, b = 0) {
  if (a === 0 && b === 0) {
    return arr
  } else {
    return arr.filter(char => char <= Math.max(a, b) && char >= Math.min(a, b))
  }
}

