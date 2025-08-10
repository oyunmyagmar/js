let numberInput = document.getElementById("num-input");
let sumButton = document.getElementById("sum-btn");

sumButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let digit = 0;
  let sum = 0;

  if (number == 0) {
    digit = 0;
  } else {
    while (number >= 1) {
      digit = Math.floor(number % 10);
      console.log(digit);
      number = number / 10;
      // console.log(number);
      sum = sum + digit;
    }
  }
  console.log(sum);
});
