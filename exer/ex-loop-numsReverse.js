let numberInput = document.getElementById("num-input");
let reverseButton = document.getElementById("reverse-btn");

reverseButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let digit = 0;

  let i = 0;
  let reverse = 0;

  //   if (number == 0) {
  //     digit = 0;
  //     console.log(digit);
  //   } else {

  while (number >= 1) {
    digit = number % 10;
    // console.log(digit);
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
    // console.log(reverse);
  }
  console.log(reverse);
});
