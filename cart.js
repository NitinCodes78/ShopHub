let cartItems = JSON.parse(localStorage.getItem('CART-ITEMS')) || [];
const cartIcons = [...document.querySelectorAll('.cart')];


cartIcons.forEach(icon => {
    icon.addEventListener('click',(e)=>{
        e.preventDefault;
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
        localStorage.setItem('CART-ITEMS', JSON.stringify(cartItems));   
        
    })
});


