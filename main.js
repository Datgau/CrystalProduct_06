
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
            li[i].style.display = 'none'; // Ẩn sản phẩm không phù hợp
        }
    }
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
function closeProductDetails(productId) {
    var productDetails = document.getElementById(productId + "-details");
    if (productDetails) {
        productDetails.style.display = "none";
    }
}

function luuDulieuGioHangVaoLocalStorage() {
    if (typeof Storage !== "undefined") {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error(`Lỗi khi lưu dữ liệu vào localStorage: ${error}`);
      }
    } else {
      console.error("Trình duyệt của bạn không hỗ trợ localStorage.");
    }
  }

var cart = [];

var productElements = document.querySelectorAll('.product-item');

function addToCart(productId, productName) {
    var Item = document.getElementById(productId);
    var productThumb = Item.querySelector('.product-thumb');
    var productName = Item.querySelector('.product-name').textContent;
    var productPrice = Item.querySelector('.product-price').textContent;
    
   cart.push({ id: productId, name: productName, price: productPrice,});
   luuDulieuGioHangVaoLocalStorage();
   alert("Product has been added to the shopping cart successfully !!!\nName: "+productName+" \nPrice: "+productPrice+"");
}







