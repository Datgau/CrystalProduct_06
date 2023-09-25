const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

function filter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('product-list');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName('product-name')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

function addToCart(productId) {
  const btnArray = document.querySelectorAll(".buy-now");

  btnArray.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var btnItem = event.target;
      var product = btnItem.parentElement.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector(".product-name").innerText;
      var productPrice = product.querySelector(".product-price").innerText;

      addCart(productName, productImg, productPrice);
    });
  });


  alert('The product '+ productId +' has been successfully added to the cart !!!');
}



function showProductDetails(productId) {
  var productDetails = document.getElementById(productId + "-details");
  if (productDetails) {
    productDetails.style.display = "block";
  }
}

function hideProductDetails(productId) {
  var productDetails = document.getElementById(productId + "-details");
  if (productDetails) {
    productDetails.style.display = "none";
  }
}






