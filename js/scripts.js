function getSizeCost() {
  var selectedSize = document.getElementById("size").Val;
  console.log(selectedSize)
  return parseInt(selectedSize)
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").Val;
  console.log(selectedCrust)
  return parseInt(selectedCrust)
}

function getToppingCost() {
  var selectedTopping = document.getElementById("topping").Val;
  console.log(selectedTopping)
  return parseInt(selectedTopping)
}

function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").Val;
  console.log(selectedNumber)
  return parseInt(selectedNumber)
}

function topping() {
  var topping = 0;
  var addTopping = document.getElementById("topping");
  if (addTopping.select === true) {
    topping = 100;
  }
  return parseInt(topping)
}

function calcTotalPrice(event) {
  event.preventDefault();
}

var totalPrice = (getSizeCost() + getCrustCost() + getToppingCost()) * (getNumber());

console.log(getSizeCost() + getCrustCost() + getToppingCost()) * (getNumber());
alert("Your order of " + getNumber() + " pizza has been received and will be processed shortly. Your total amount payable is " + totalPrice + ".")

$(document).ready(function () {
  $("#delivery").submit(function () {
    var name = $("input#name").val();
    var location = $("input#location").val();
    var number = $("input#number").val();

    alert("Hello " + name + ". Your order has been received and will be delivered to " + location + " within an hour. The delivery cost is sh.300. Thank you for choosing Pizza Deli and have a delightful experience!");
  });
});