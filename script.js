// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  var tmpTotal = 0;
  for (i=0; i<cart.length; i++) {
    $('.cart-list').append('<p>' + cart[i].name + ': $' + cart[i].price + ' (x' + cart[i].occurrence + ') = $' + (cart[i].price*cart[i].occurrence) + ' </p>');
    tmpTotal += (cart[i].price * cart[i].occurrence);
  }
  //console.log(tmpTotal);
  $('.total').text(tmpTotal);
}


var addItem = function (item) {
  // TODO: finish
  var itemPresent = false;
  for (i=0; i<cart.length; i++) {
    if (cart[i].name === item.name) {
      cart[i].occurrence += 1;
      itemPresent = true;
    }
  }
  if (!itemPresent) {
    // adding occurrence value
    item.occurrence = 1;
    cart.push(item);
  }
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

// $('.add-to-cart').on('click', function () {
$(document).on('click', '.add-to-cart', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  //console.log(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.add-item').on('click', function(){
  $('.object-addin-form').empty();
  $('.object-addin-form').append(
    '<div class="container" style="text-align: center"><form><p>Item name: <input type="text" id="item-name" placeholder="Item Name" /></p><p>Price: <input type="number" id="item-price" placeholder="Item Price" /></p><p>Image URL: <input type="url" id="item-url" placeholder="URL of Items Picture" /></p><button type="button" onclick="addItemFunc();">Submit</button><div id="msg"></div></form></div>'
    );
});

var addItemFunc = function () {
  var item_name = $('#item-name').val();
  var item_price = $('#item-price').val();
  var item_url = $('#item-url').val();

  app.addObject(item_name, item_price, item_url);

  $('.object-addin-form').empty();
  app.updateStore();
};

var RenderStore = function () {
  var addedObjects = [];

  var addObject = function (item, price, url) {
    addedObjects.push({
      "item": item,
      "price": price,
      "url": url
    });
  };

  var updateStore = function () {
    $('.new-row').empty();
    for (i=0; i<addedObjects.length; i++) {
      $('.new-row').append (
        '<div class="col-md-4"> <div class="card-container"> <div class="card item" item data-name="'+addedObjects[i].item+'" data-price="'+addedObjects[i].price+'"> <div class="pricebox"> <p class="price"> $'+addedObjects[i].price+' </p> </div> <div class="buybox"> <p class="add-to-cart"> ADD TO CART </p> </div> <div class="card-inner"> <img src="'+addedObjects[i].url+'" class="proimage"> </div> </div> </div> </div>'
      );
    }
  };

  return {
    addObject: addObject,
    updateStore: updateStore,
    addedObjects: addedObjects
  };
};

var app = RenderStore();

// update the cart as soon as the page loads!
updateCart();
app.updateStore();
