let timesTableInput = document.getElementById("multiplicationTable-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let timesTable = parseInt(timesTableInput.value);
  let range = 10;
  let index = 0;
  let X = "x";

  document.getElementById("answer").innerText = "";

  while (index < range) {
    index = index + 1;
    console.log(index + X + timesTable + "=" + timesTable * index);

    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText +
      "\n" +
      index +
      X +
      timesTable +
      "=" +
      timesTable * index;
  }
});
