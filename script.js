// an array with all of our cart items
var cart = [];
var addedObjects = [{item: 'keys', price: 20, url: 'http://www.gerritbrands.com/sites/default/files/post-images/keys.jpg'}];

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

var addItemFunc = function () {
  var item_name = $('#item-name').val();
  var item_price = $('#item-price').val();
  var item_url = $('#item-url').val();

  addedObjects.push({
    "item": item_name,
    "price": item_price,
    "url": item_url
  });
};

var updateStore = function () {
  for (i=0; i<addedObjects.length; i++) {
    $('.new-row').append (
        '<div class="col-md-4"> <div class="card-container"> <div class="card item" item data-name="'+addedObjects[i].item+'" data-price="'+addedObjects[i].price+'"> <div class="pricebox"> <p class="price"> $'+addedObjects[i].price+' </p> </div> <div class="buybox"> <p class="add-to-cart"> ADD TO CART </p> </div> <div class="card-inner"> <img src="'+addedObjects[i].url+'" class="proimage"> </div> </div> </div> </div>'
    )
  }
};

// update the cart as soon as the page loads!
updateCart();
updateStore();
