// let n = "mosh";
// console.log(n);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let isApproved = false;
// console.log(isApproved);

// console.log("Hello World");

// let hour = 19;
// if (hour >= 6 && hour < 12) console.log("Good morning!");
// else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
// else console.log("Good evening!");

let age = 0;
// let hasLisence = false;

// if (age >= 16) {
//   console.log("you are old enough to drive");
//   if (hasLisence) {
//     console.log("You have your licence");
//   } else {
//     console.log("You do not have a license yet");
//   }
// } else {
//   console.log("you must be 16+ to drive");
// }
if (age >= 100) {
  console.log("You are TOO OLD to enter this site");
} else if (age == 0) {
  console.log("You can not enter. You were just born");
} else if (age >= 18) {
  console.log("You are old enough to enter this site");
} else if (age < 0) {
  console.log("Your age cannot be below 0");
} else {
  console.log("You must be 18+ to enter this site");
}

let temp = 60;

if (temp < 0 || temp >= 30) {
  console.log("The weather is BAD");
} else {
  console.log("The weather is GOOD");
}

let isSunny = true;
if (!isSunny) {
  console.log("It is Cloudy");
} else {
  console.log("It is Sunny");
}

for (let i = 0; i < 5; i++) {
  console.log("hello world!" + i);
}
