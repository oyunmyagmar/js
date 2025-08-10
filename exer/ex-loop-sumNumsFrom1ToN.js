let numNLimitInput = document.getElementById("numNLimit-input");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numN = parseInt(numNLimitInput.value);
  let index = 0;
  let sum = 0;

  document.getElementById("answer").innerText = "";

  while (index < numN) {
    index = index + 1;
    // console.log(index);
    sum = sum + index;
  }
  console.log(sum);
  document.getElementById("answer").innerText =
    document.getElementById("answer").innerText + "\n" + sum;
});
