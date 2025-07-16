let numNLimitInput = document.getElementById("numberN-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let n = parseInt(numNLimitInput.value);
  let i = 0;
  let sum = 0;

  while (i < n) {
    i = i + 1;
    if (i % 2 == 1) {
      // console.log(i);
      sum = sum + i;
    }
  }
  console.log(sum);
});
