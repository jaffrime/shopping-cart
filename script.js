// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  var tmpTotal = 0;
  for (i=0; i<cart.length; i++) {
    $('.cart-list').append('<p>' + cart[i].name + ": $" + cart[i].price  + '<button class="btn btn-danger btn-xs remove-item">Remove Item</button>' + '</p>');
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

var removeItem = function (item) {
    var index = item.index();
    cart.splice(index, 1);
    item.remove();
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

$('.cart-list').on('click', '.remove-item', function () {
  var item = $(this).closest("p");
  removeItem(item);
});

// update the cart as soon as the page loads!
updateCart();
