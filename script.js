// an array with all of our cart items
var cart = [];
var tmpTotal;

var updateCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  tmpTotal=0;
  for (i=0; i<cart.length; i++) {
        $('.cart-list').append('<p>' + cart[i].name + "(" + cart[i].occurence + ")" + ": $" + cart[i].price  + '<button class="btn btn-danger btn-xs remove-item">Remove Item</button>' + '</p>');
        tmpTotal += (cart[i].price * cart[i].occurence); 
  
  //console.log(tmpTotal);
  $('.total').text(tmpTotal);
}
}

var addItem = function (item) {
  // TODO: finish
  cart.push(item);
} 



var clearCart = function () {
  // TODO: finish
  tmpTotal = 0;
  cart = [];
  updateCart();
  $('.total').text(tmpTotal);
}

var removeItem = function (item) {
    var index = item.index();
    $('.total').text(tmpTotal-=cart[index].price);
    cart.splice(index, 1);
    $(item).empty();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggle(".show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  //console.log(item);
  item.occurence ++;
  if (item.occurence <=1) {
  addItem(item);
  updateCart();
} else {
  updateCart();

}

});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click', '.remove-item', function () {
  var item = $(this).closest('p');
  var item2 = $('.add-to-cart').closest('p').data().occurence;
  if (item2 > 1) {
    item2 --;
  } else {
  removeItem(item);
  };
});

// update the cart as soon as the page loads!
updateCart();
