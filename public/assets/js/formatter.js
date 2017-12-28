

$(".driver").on("click",function(){
  $(".formatter").removeClass("invisible");

var email = $(".emails").attr("name","driverEmail").attr("person","driver");
var password = $(".emails").attr("name","driverPassword").attr("person","driver");
});
$(".owner").on("click",function(){
  $(".formatter").removeClass("invisible");
var email = $(".emails").attr("name","driverOwner").attr("person","owner");
var password = $(".emails").attr("name","driverOwner").attr("person","owner");
});
