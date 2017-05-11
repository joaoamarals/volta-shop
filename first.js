


var choosedProduct = {totalPrice: 0};

var productButtons = [
  {id: "t-shirt", price: 10},
  {id: "tote", price: 15}
];

var firstPhaseConfirmation;
var secondPhaseConfirmation;

var colourButtons = [
  {id: "colour-white"},
  {id: "colour-black"},
  {id: "colour-blue"}
]

/*$("button").click(function(event){

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

});*/

$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault(); //don´t understand why only with this line the info about the event appeared in the console
      var infoEvent = event.currentTarget.childNodes;
      var arr = Object.keys(infoEvent).map(function(key){
        return infoEvent[key];
      });
      console.log(arr);
      var a = arr.filter(function(element){
        return element.nodeValue;
      });
      console.log(a);
    });
});

$("#cancel").click(function(button){
  choosedProduct = {totalPrice: 0};
  console.log(choosedProduct);
});
