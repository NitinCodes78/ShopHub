let cartItems = JSON.parse(localStorage.getItem('CART-ITEMS')) || [];

const cartIcons = [...document.querySelectorAll('.cart')];

cartIcons.forEach(icon => {
    icon.addEventListener('click',(e)=>{
        e.preventDefault;
        let targetProduct = e.target.parentElement.parentElement;

        const productId = targetProduct.id;
        const price = targetProduct.querySelector('.price').innerText;
        const styles = window.getComputedStyle(targetProduct, false);
        const bgImgUrl = styles.backgroundImage.slice(4, -1).replace(/"/g, "");

        const newItem = {
            productId,
            bgImgUrl,
            price
        };


        cartItems.push(newItem);
        console.log(cartItems);
        localStorage.setItem('CART-ITEMS', JSON.stringify(cartItems)); 
        
    })
    
});


