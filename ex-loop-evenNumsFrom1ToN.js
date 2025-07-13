let numInput = document.getElementById("numLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let num = parseInt(numInput.value);
  let index = 0;

  while (index < num) {
    index = index + 1;
    if (index % 2 == 0) {
      console.log(index);
    }
  }
});
