let numberInput = document.getElementById("num-input");
let countButton = document.getElementById("count-btn");

countButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let i = 0;

  while (i < (number % 10 > 1)) {
    number = number / 10;
    i = i + 1;
    console.log(number);
  }
  // if (number % 10 !== 0) {
  //   number = number / 10;
  //   console.log(number);
  // }
});
