const itemList = document.querySelector('ul.items-list');
let cartItems = [];
const cartIcons = [...document.querySelectorAll('.cart')];
cartIcons.forEach(icon => {
    icon.addEventListener('click',(e)=>{
        let targetProduct = e.target.parentElement.parentElement;
        const productId = targetProduct.id;
        const price = parseInt(targetProduct.dataset.price);
        const styles = window.getComputedStyle(targetProduct, false);
        const bgImgUrl = styles.backgroundImage.slice(4, -1).replace(/"/g, "");
        const newItem = {
            productId,
            bgImgUrl,
            price
        };
        cartItems.push(newItem);
        console.log(itemList);
        populateList(cartItems, itemList);
        // localStorage.setItem('CART-ITEMS', JSON.stringify(cartItems));      
    })
});
function populateList(products, productList) {   //products will be an array of objects
    productList.innerHTML = products.map((product, i) => {
        return 
        `<li>
          <div class="img"><img src=${product.bgImgUrl}></div>
          <div class="price">${product.price}</div>
          <div class="quantity"><input type="number" min="1" value="1"></div>
          <div class="total-amt">${product.price}</div>
        </li>`
    }).join('');
}