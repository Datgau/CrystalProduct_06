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
            li[i].style.display = ''; // Hiển thị sản phẩm phù hợp
        } else {
            li[i].style.display = 'none'; // Ẩn sản phẩm không phù hợp
        }
    }
}

// Mảng để lưu trữ sản phẩm trong giỏ hàng
var cartItems = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const btnArray = document.querySelectorAll(".buy-now");

    btnArray.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            var btnItem = event.target;
            var product = btnItem.parentElement.parentElement;
            var productImg = product.querySelector("img").src;
            var productName = product.querySelector(".product-name").innerText;
            var productPrice = product.querySelector(".product-price").innerText;

            var item = {
                id: productId,
                name: productName,
                price: productPrice,
                url : productImg
            };
            console.log(item)
            cartItems.push(item); 
            var cartList = document.getElementById('cart-items');
            var listItem = document.createElement('li');
            listItem.textContent = productName + ' - ' + productPrice;
            cartList.appendChild(listItem);

            // Hiển thị thông báo cho người dùng
            alert("Sản phẩm " + productName + " đã được thêm vào giỏ hàng.");
        });
    });
}


var addToCartLinks = document.querySelectorAll('.addToCartLink');
for (var i = 0; i < addToCartLinks.length; i++) {
    addToCartLinks[i].addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút
        var productId = event.target.getAttribute('data-product-id'); // Lấy ID sản phẩm từ thuộc tính data
        addToCart(productId);
    });
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






