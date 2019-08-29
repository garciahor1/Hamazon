
$(document).ready(function () {
  let cart = 0;
  const productArrayToCart = [];
  $("#cart").append(cart);

  getAllProducts();

  $(".fa-cart-plus").on("click", function () {
    event.preventDefault();
    $("#myModal-cart").addClass("show");
    $("#myModal-cart").css("display", "block");
  });

  $(".close-modal-cart").on("click", function () {
    event.preventDefault();
    $("#myModal-cart").removeClass("show");
    $("#myModal-cart").removeAttr('style');

  });

  let totalPrice = 0;

  function totalPriceApp() {
    $("#total-price").empty();
    $("#total-price").append(" $ " + totalPrice);
  };

let cartArray =[];

$("#check-out-modal-cart").on("click", function () {
  $.ajax({
    method: "PUT",
    url: "/api/update",
    data: {cart: cartArray}
  })
    .then(function() {
    $("#myModal-cart").removeClass("show");
    $("#myModal-cart").removeAttr('style');
    alert("your order was placed")
    location.reload();

    });
});

  $("#product-display").on("click", "button", function () {
    event.preventDefault();
    const idOfButton = $(this).val();
    const productOriginalQty = $("#stock-qty-li-"+idOfButton).val();
    const orderQty = parseInt($(`#input-id-${idOfButton}`).val());
    $.get(`/api/product/${idOfButton}`, function (data) {

      if (orderQty > data.quantity) {
        $("#modal-body-display").empty();
        $("#modal-body-display").append(`Sorry, we don't have ${orderQty}`);
        $("#myModal").addClass("show");
        $("#myModal").css("display", "block");
      } else {
        const cartInfo = {
          productId: idOfButton,
          productQty: orderQty,
          productOriginalQuan:productOriginalQty
        };
        cartArray.push(cartInfo);
        postProductToCartTable(cartInfo);
        cart = cart + orderQty;
        totalPrice = totalPrice + (data.price * orderQty);
        $("#display-cart-item").append(
          `<br>
    <div class="row">       
    <div class="col">${data.name}</div>
    <div class="col">${orderQty}</div> 
    <div class="col">$ ${data.price}</div> 
    <br>                     
     `);
console.log(cartArray);
        totalPriceApp();

        $("#cart").empty();
        $("#cart").append(cart);
      }
    })
  });

  $(".close-modal").on("click", function () {
    event.preventDefault();
    $("#myModal").removeClass("show");
    $("#myModal").removeAttr('style');

  });


  //this just adds the product and quantity to the cart db
  function postProductToCartTable(cartData) {
    $.post("/api/cart", cartData)
  };



  function getAllProducts() {
    $.get("/api/products", function (data) {
      let products = data;

      products.forEach(function (element) {
        $("#product-display").append(
          `<div class="card product-card"  style="width: 18rem;">
    <img src="${element.imageURL}" class="card-img-top" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${element.description}</li>
      <li class="list-group-item">$${element.price}</li>
      <li class="list-group-item " id="stock-qty-li-${element.id}" value="${element.quantity}">Stock qty: ${element.quantity}</li>
      <li class="list-group-item">${element.category}</li>
    </ul>
    <div class="container">
    <div class="row">
    <div class="form-group col-md-3">
   <label>Qty</label-1>
    </div>
    <div class="form-group col-md-3">
    <input type="text" id="input-id-${element.id}" value=1 class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md">
    <button  style="margin-top: 5px" value="${element.id}" type="button" class="btn btn-secondary btn-sm">Add to Cart</button>
    </div>
    </div>
    </div>
  </div>`);
      });

    })
  }



});