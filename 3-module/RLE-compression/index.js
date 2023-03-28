/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let newStr = '';
  for (let i = 0, count = 1; i < value.length; i++) {
    if (value.charAt(i) === value.charAt(i + 1)) {
      count++
    } else if (count === 1){
      newStr = newStr + value.charAt(i);
      count = 1;
    } else {
      newStr = newStr + value.charAt(i) + count;
      count = 1;
    }
  }
  return newStr
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
