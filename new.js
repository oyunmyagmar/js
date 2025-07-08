let input = document.getElementById("name-input");
let button = document.getElementById("namebtn-input");
let hello = "Hello! ";

button.addEventListener("click", () => {
  console.log(hello + input.value);
});

let num1 = document.getElementById("num1-input");
let num2 = document.getElementById("num2-input");
let plusbutton = document.getElementById("plus");
let minusbutton = document.getElementById("minus");
let multiplybutton = document.getElementById("multiply");
let dividebutton = document.getElementById("divide");

plusbutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) + parseInt(num2.value));
});
minusbutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) - parseInt(num2.value));
});
multiplybutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) * parseInt(num2.value));
});
dividebutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) / parseInt(num2.value));
});

let num11input = document.getElementById("num11-input");
let num12input = document.getElementById("num12-input");
let num13input = document.getElementById("num13-input");
let submitbutton = document.getElementById("submit-button");
let avgbutton = document.getElementById("average-button");

submitbutton.addEventListener("click", () => {
  let num11 = parseInt(num11input.value);
  let num12 = parseInt(num12input.value);
  let num13 = parseInt(num13input.value);
  if (num11 > num12) {
    if (num11 > num13) {
      console.log(num11);
    } else {
      console.log(num13);
    }
  } else {
    if (num12 > num13) {
      console.log(num12);
    } else {
      console.log(num13);
    }
  }
});
avgbutton.addEventListener("click", () => {
  let num11 = parseInt(num11input.value);
  let num12 = parseInt(num12input.value);
  let num13 = parseInt(num13input.value);
  console.log((num11 + num12 + num13) / 3);
});
