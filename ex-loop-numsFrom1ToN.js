let numInput = document.getElementById("numLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let n = parseInt(numInput.value);
  let index = 0;

  while (index < n) {
    index = index + 1;
    console.log(index);
  }
});
