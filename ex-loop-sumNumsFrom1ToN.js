let numLimitInput = document.getElementById("numLimit-input");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numLimit = parseInt(numLimitInput.value);
  let index = 0;
  let sum = 0;

  while (index < numLimit) {
    index = index + 1;
    sum = sum + index;
  }
  console.log(sum);
});
