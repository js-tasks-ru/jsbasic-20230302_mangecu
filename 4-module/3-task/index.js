function highlight(table) {
  let list = table.querySelector('tbody');
  let rows = list.querySelectorAll("tr");

  rows.forEach(el => {
    if(!el.cells[3].hasAttribute('data-available')) {
      el.hidden = true
    } else if (el.cells[3].dataset.available === "true") {
      el.classList.add("available");
    } else {
      el.classList.add("unavailable");
    }

    switch (el.cells[2].textContent) {
      case "m":
        el.classList.add("male")
        break
      case "f":
        el.classList.add("female")
        break
    }

    if (+el.cells[1].textContent < 18) {
      el.style.textDecoration = "line-through"
    }

  });
}
