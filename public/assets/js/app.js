



$.ajax({
      url: "http://localhost:3000/spaces",
      method: "GET"
    }).done(function(response) {
      for(var i=0;i<response.length;i++){
var titleHost=response[i].title;
var rateHost=response[i].rate;
var rented="Renting";
var empty="Empty";
var statusHost=response[i].status;

var addressHost=response[i].street+","+response[i].state+","+response[i].zip;
if(statusHost===true){
    parkConstruct(titleHost,addressHost,rateHost,rented,i);
  }else{
      parkConstruct(titleHost,addressHost,rateHost,empty,i);
  }
}
    });



function parkConstruct(title,address,rate,status,i){

var containerF = $("<div>").addClass("garage col-xs-4 garage"+i+" "+status).appendTo(".parkingGarage");
var titleF = $("<h3>").addClass("title").appendTo(".garage"+i).text(title);
var iconF = $("<img>").addClass("icon").appendTo(".garage"+i).attr("src","parking.png");
var addressF = $("<h3>").addClass("address").appendTo(".garage"+i).text("Address: "+address);
var rateF = $("<h3>").addClass("rate").appendTo(".garage"+i).text("Rate: "+"$"+rate+"/Day");
var statusF = $("<h3>").addClass("status").appendTo(".garage"+i).text("Status: "+status);


}
