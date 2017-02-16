// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  var tmpTotal = 0;
  for (i=0; i<cart.length; i++) {
    $('.cart-list').append('<p>' + cart[i].name + ": $" + cart[i].price + '</p>');
    tmpTotal += cart[i].price;
  }
  //console.log(tmpTotal);
  $('.total').text(tmpTotal);
}


var addItem = function (item) {
  // TODO: finish
  cart.push(item);
  //console.log(cart);
}

var clearCart = function () {
  // TODO: finish
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggle(".show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  //console.log(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
