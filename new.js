//name
let input = document.getElementById("name-input");
let button = document.getElementById("namebtn-input");
let hello = "Hello! ";

button.addEventListener("click", () => {
  console.log(hello + input.value);
});
// + - * / calculator
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

//Biggest value calculator
let num11input = document.getElementById("num11-input");
let num12input = document.getElementById("num12-input");
let num13input = document.getElementById("num13-input");
let submitbutton = document.getElementById("submit-button");

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
//lowest value calculator

//average calcultor
let num31input = document.getElementById("num31-input");
let num32input = document.getElementById("num32-input");
let num33input = document.getElementById("num33-input");
let averagebutton = document.getElementById("average-button");

averagebutton.addEventListener("click", () => {
  let num31 = parseInt(num31input.value);
  let num32 = parseInt(num32input.value);
  let num33 = parseInt(num33input.value);
  console.log((num31 + num32 + num33) / 3);
});
