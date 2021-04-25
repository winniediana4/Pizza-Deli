$(document).ready(function(){
  $("#delivery").submit(function(){
    var name = $("input#name").val();
    var location = $("input#location").val();
    var number = $("input#number").val();

    alert("Hello " + name + ". Your order has been received and will be delivered to " + location + " within an hour. The delivery cost is sh.200. Thank you for choosing Pizza Deli and have a delightful experience!");
  });
});