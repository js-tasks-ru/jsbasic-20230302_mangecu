function makeDiagonalRed(table) {
  table.querySelectorAll("td").forEach(el => {
    if (el.parentElement.rowIndex === el.cellIndex) {
      el.style.backgroundColor = "red"
    }
  })
}
