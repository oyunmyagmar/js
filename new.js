let input = document.getElementById("name-input");
let button = document.getElementById("namebtn-input");
let hello = "Hello! ";

button.addEventListener("click", () => {
  console.log(hello + input.value);
});
