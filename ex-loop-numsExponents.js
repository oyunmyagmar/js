let baseInput = document.getElementById("base-input");
let exponentInput = document.getElementById("exponent-input");
let calculateButton = document.getElementById("calc-btn");

calculateButton.addEventListener("click", () => {
  let base = parseInt(baseInput.value);
  let exponent = parseInt(exponentInput.value);
  let power = 1;
  let i = 0;

  if (exponent == 0) {
    power = 1;
    console.log(power);
  } else {
    while (i < exponent) {
      base = base * 1;
      power = power * base;
      i = i + 1;
    }
  }
  console.log(power);
});
