let numNInput = document.getElementById("numNLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let n = parseInt(numNInput.value);
  let index = 0;

  while (index < n) {
    index = index + 1;
    console.log(index);
  }
});
