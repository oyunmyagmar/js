let inputyear = document.getElementById("year-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  if ((year = parseInt(inputyear.value)) % 4 == 0) {
    console.log(year + " is a Leap Year!");
  } else {
    console.log(year + " is not a Leap Year!");
  }

  //   if (num % 4 == 0) {
  //     console.log("Leap Year");
  //   }
});
