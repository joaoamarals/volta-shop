var choosedProduct = {totalPrice: 0};

var productButtons = [
  {id: "t-shirt", price: 10},
  {id: "tote", price: 15}
];

var firstPhaseConfirmation;
var secondPhaseConfirmation;
var thirdPhaseConfirmation;

var colourButtons = [
  {id: "colour-white"},
  {id: "colour-black"},
  {id: "colour-blue"}
]

$("button").click(function(event){

    var buttonClicked = event.currentTarget;

    productButtons.forEach(function(button){
      if(buttonClicked.id === button.id){

        firstPhaseConfirmation = true;
        choosedProduct.name = button.id;
        choosedProduct.totalPrice = button.price;
        console.log(choosedProduct);
      }
    });

    if(firstPhaseConfirmation){
      colourButtons.forEach(function(button){
        if(buttonClicked.id === button.id){

          secondPhaseConfirmation = true;
          choosedProduct.colour = button.id;
          console.log(choosedProduct);
        }
      });
    }

});

$(document).ready(function(){
  $("form").submit(function(event){

    if(secondPhaseConfirmation){

      event.preventDefault(); //don´t understand why only with this line the info about the event appeared in the console

      //array with info about input fields
      var infoEvent = Array.from(event.currentTarget.elements).filter(function(element){
        if(element.id.includes("colours")){
          return element;
        }
      });

      //assignment of input values to choosedProduct object
      infoEvent.forEach(function(element){
        if(element.id === "colours-front"){
          choosedProduct.coloursFront = element.value;
        }
        else if(element.id === "colours-back"){
          choosedProduct.coloursBack = element.value;
        }
        else{
          console.log("Something went wrong!")
        }
      });

      thirdPhaseConfirmation = true;
      console.log(choosedProduct);
    }
  });
});

$("#cancel").click(function(button){
  choosedProduct = {totalPrice: 0};
  firstPhaseConfirmation = false;
  secondPhaseConfirmation = false;
  thirdPhaseConfirmation = false;
  console.log(choosedProduct);
});
