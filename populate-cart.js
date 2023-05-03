const itemList = document.querySelector('.items-list');

function populateList(products, productList) {   //products will be an array of objects
    productList.innerHTML = products.map((product, i) => {
        return `
        <li>
            <div class="img"><img src=${product.bgImgUrl}></div>
            <div class="price">${product.price}</div>
            <div class="quantity"> <input type="number" min="1" value="1"> </div>
            <div class="total-amt">${product.price}</div>
        </li> 
        `;
    }).join('');
}

populateList(cartItems, itemList);