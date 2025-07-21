let numberInput = document.getElementById("num-input");
let swapButton = document.getElementById("swap-btn");

swapButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let digit = 0;
  let firstDigit = 0;
  let lastDigit = 0;
  let count = 0;
  let reverse = 0;

  while (number >= 1) {
    digit = number % 10;
    console.log(digit);
    reverse = digit * 10 + digit;
    number = Math.floor(number / 10);
    console.log(reverse);
  }
});
// let count = 0;
// let firstDigit = 0;
// let lastDigit = number % 10;
// console.log(lastDigit + " is the Last digit");

// while (number >= 1) {
//   number = number / 10;
//   count = count + 1;
// }
// console.log(count);

// firstDigit = Math.floor(number * 10);
// console.log(firstDigit + " is the First digit");
