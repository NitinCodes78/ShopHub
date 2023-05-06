const hrtIcons = [...document.querySelectorAll('.heart')];
let favItems = JSON.parse(localStorage.getItem('FAVOURITES')) || [];

hrtIcons.forEach(icon => {
    icon.addEventListener('click',(e)=>{
        e.target.src = 'Images/red-heart.png';
/*         e.target.parentElement.classList.add('fav');
        console.log(e.target.parentElement); */
        e.preventDefault;
        let targetProduct = e.target.parentElement.parentElement;

        const productId = targetProduct.id;
        const price = parseInt(targetProduct.dataset.price);
        const styles = window.getComputedStyle(targetProduct, false);
        const type=targetProduct.dataset.type;
        const bgImgUrl = styles.backgroundImage.slice(4, -1).replace(/"/g, "");

        const newItem ={
            productId,
            bgImgUrl,
            price,
            type
        };
        favItems.push(newItem);
        localStorage.setItem('FAVOURITES', JSON.stringify(favItems));   
        
    })
});



