

$(".driver").on("click",function(){
    formatter(".owner",".driver","driverEmail","driverPassword","driver");
});
$(".owner").on("click",function(){
  formatter(".driver",".owner","ownerEmail","driverPassword","owner");
});


function formatter(driver,owner,email,password,person){
    $(".formatter").removeClass("invisible");
    $(driver).removeClass("invisible");
    $(owner).addClass("invisible");
    var email = $(".emails").attr("name",email).attr("person",person);
    var password = $(".emails").attr("name",password).attr("person",person);

}
