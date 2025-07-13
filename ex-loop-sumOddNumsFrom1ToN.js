let numLimitInput = document.getElementById("numLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let n = parseInt(numLimitInput.value);
  let i = 0;
  let sum = 0;

  while (i < n) {
    i = i + 1;
    if (i % 2 == 1) {
      sum = sum + i;
    }
  }
  console.log(sum);
});
