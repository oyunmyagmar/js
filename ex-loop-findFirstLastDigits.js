let numberInput = document.getElementById("num-input");
let findButton = document.getElementById("find-btn");

findButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let i = 0;
  let firstDigit = 0;
  let lastDigit = 0;

  lastDigit = number % 10;
  console.log(lastDigit + " is the LAST digit");

  while (number >= 1) {
    i = i + 1;
    number = number / 10;
    // console.log(i);
    // console.log(number);
  }
  firstDigit = Math.floor(number * 10);
  console.log(firstDigit + " is the FIRST digit");
});
