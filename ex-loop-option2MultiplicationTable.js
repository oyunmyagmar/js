let timesTableInput = document.getElementById("multiplicationTable-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let timesTable = parseInt(timesTableInput.value);
  let range = 10;
  let index = 0;
  let X = "x";

  while (index < range) {
    index = index + 1;
    console.log(index + X + timesTable + "=" + timesTable * index);
  }
});
