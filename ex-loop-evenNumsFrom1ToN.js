let numNInput = document.getElementById("numNLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let numN = parseInt(numNInput.value);
  let index = 0;

  while (index < numN) {
    index = index + 1;
    if (index % 2 == 0) {
      console.log(index);
    }
  }
});
