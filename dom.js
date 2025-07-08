let input1 = document.getElementById("age-input");
let input2 = document.getElementById("education-input");
let button = document.getElementById("submit");

button.addEventListener("click", () => {
  console.log(input1.value + input2.value);
});
