// + - * / calculator
let num1 = document.getElementById("num1-input");
let num2 = document.getElementById("num2-input");
let plusbutton = document.getElementById("plus-btn");
let minusbutton = document.getElementById("minus-btn");
let multiplybutton = document.getElementById("multiply-btn");
let dividebutton = document.getElementById("divide-btn");

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
let inputnum11 = document.getElementById("num11-input");
let inputnum12 = document.getElementById("num12-input");
let inputnum13 = document.getElementById("num13-input");
let submitbigbtn = document.getElementById("submit-biggest-btn");

submitbigbtn.addEventListener("click", () => {
  let num11 = parseInt(inputnum11.value);
  let num12 = parseInt(inputnum12.value);
  let num13 = parseInt(inputnum13.value);
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
let inputnum21 = document.getElementById("num21-input");
let inputnum22 = document.getElementById("num22-input");
let inputnum23 = document.getElementById("num23-input");
let submitsmallbtn = document.getElementById("submit-smallest-btn");

submitsmallbtn.addEventListener("click", () => {
  let num21 = parseInt(inputnum21.value);
  let num22 = parseInt(inputnum22.value);
  let num23 = parseInt(inputnum23.value);
  if (num21 < num22) {
    if (num21 < num23) {
      console.log(num21);
    } else {
      console.log(num22);
    }
  } else {
    if (num22 < num23) {
      console.log(num22);
    } else {
      console.log(num23);
    }
  }
});

//average calcultor
let inputnum31 = document.getElementById("num31-input");
let inputnum32 = document.getElementById("num32-input");
let inputnum33 = document.getElementById("num33-input");
let averagebutton = document.getElementById("average-btn");

averagebutton.addEventListener("click", () => {
  let num31 = parseInt(inputnum31.value);
  let num32 = parseInt(inputnum32.value);
  let num33 = parseInt(inputnum33.value);
  console.log((num31 + num32 + num33) / 3);
});
