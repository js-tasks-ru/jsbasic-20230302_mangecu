function factorial(n) {
  let result = n;
  if (n == 0 || n == 1) {
    result = 1;
    return result;
  } else {
    for (let m = 1; m <= n - 1; m++) {
      result = result * (n - (n - m));
    }
      return result
  }
}



