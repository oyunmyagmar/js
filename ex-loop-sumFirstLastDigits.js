let numberInput = document.getElementById("num-input");
let sumButton = document.getElementById("sum-btn");

sumButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let sum = 0;
  let firstDigit = 0;
  let lastDigit = number % 10;
  // console.log(lastDigit);

  while (number >= 10) {
    number = number / 10;
    firstDigit = Math.floor(number);
  }
  // console.log(firstDigit);
  sum = firstDigit + lastDigit;
  console.log(
    "The SUM of the first and last digit of the given number is " + sum
  );
});
