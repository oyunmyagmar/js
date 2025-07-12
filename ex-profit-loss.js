let costUnitInput = document.getElementById("costOfPerUnit-input");
let totalQuantInput = document.getElementById("totalQuantity-input");
let sellingPriceInput = document.getElementById("sellingPriceOfPerUnit-input");
let soldQuantInput = document.getElementById("soldedQuantity-input");
let button = document.getElementById("calc-btn");

button.addEventListener("click", () => {
  let costUnit = parseInt(costUnitInput.value);
  let totalQuant = parseInt(totalQuantInput.value);
  let sellingPrice = parseInt(sellingPriceInput.value);
  let soldQuant = parseInt(soldQuantInput.value);

  if (sellingPrice * soldQuant - costUnit * totalQuant > 0) {
    console.log(sellingPrice * soldQuant - costUnit * totalQuant + " Profit");
  }
  if (sellingPrice * soldQuant - costUnit * totalQuant < 0) {
    console.log(sellingPrice * soldQuant - costUnit * totalQuant + " Loss");
  }
  if (sellingPrice * soldQuant - costUnit * totalQuant == 0) {
    console.log("Break-even Product");
  }
});
// input-iin urd cost price, total quantity, selling price, sold quantity bichgeer oruulah
