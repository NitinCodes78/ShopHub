const favList = document.querySelector('.my-favourites');
let favItems = JSON.parse(localStorage.getItem('FAVOURITES')) || [];


function populateWishList(products, productList) {   
    productList.innerHTML = products.map((product, i) => {
        return `
        <li class="fav">
            <div class="remove-fav"><img src="/Images/icons/icon-close.svg" alt=""></div>

            <div class="fav-img">
            <img src=${product.bgImgUrl}></div>
            <div class="details">
                <div class="favprice">₹ ${product.price}</div>
                <div class="add-btn">Add to Cart <i class="fa-solid fa-cart-shopping"></i></div>
            </div>
        </li>
        `;
    }).join('');
}
populateWishList(favItems, favList);
