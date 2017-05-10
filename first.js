


var choosedProduct = {totalPrice: 0};

var firstButtons = [
  {id: "t-shirt", price: 10},
  {id: "tote", price: 15}
];

$("button").click(function(event){

    var buttonClicked = event.currentTarget;

    firstButtons.forEach(function(button){
      if(buttonClicked.id === button.id){
        console.log(button.id);
      }
    });





    // firstButtons.forEach(function(button){

      // if(button.id === id){
      //   choosedProduct.name = button.id;
      //   choosedProduct.totalPrice+= button.price;
      // }

    // });

});
//
// $(".second").click(function(event){
//
//   var id = event.currentTarget.attributes.id.nodeValue;
//
//   firstButtons
//
// })
