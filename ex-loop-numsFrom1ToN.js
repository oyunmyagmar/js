let numNInput = document.getElementById("numNLimit-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let n = parseInt(numNInput.value);
  let index = 0;

  document.getElementById("answer").innerText = "";

  while (index < n) {
    index = index + 1;
    console.log(index);

    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText + "\n" + index;
  }
});
