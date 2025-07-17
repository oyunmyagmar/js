let numberInput = document.getElementById("num-input");
let countButton = document.getElementById("count-btn");

countButton.addEventListener("click", () => {
  let number = parseInt(numberInput.value);
  let i = 0;

  if (number == 0) {
    i = 1;
    console.log(i);
  } else {
    while (number >= 1 || number <= -1) {
      number = number / 10;
      i = i + 1;
    }
    console.log(i);
  }
});
