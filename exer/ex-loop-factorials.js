let numberInput = document.getElementById("num-input");
let calculateButton = document.getElementById("calc-btn");

calculateButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let i = 0;
  let factorial = 1;

  while (i < number) {
    i = i + 1;
    factorial = factorial * i;

    console.log(i);
  }
  console.log(number + "! is " + factorial);
});
