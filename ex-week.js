let inputday = document.getElementById("day-input");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let day = (parseInt = inputday.value);
  if (day == 1) {
    console.log("Monday");
  }
  if (day == 2) {
    console.log("Tuesday");
  }
  if (day == 3) {
    console.log("Wednesday");
  }
  if (day == 4) {
    console.log("Thursday");
  }
  if (day == 5) {
    console.log("Friday");
  }
  if (day == 6) {
    console.log("Saturday");
  }
  if (day == 7) {
    console.log("Sunday");
  }
});
