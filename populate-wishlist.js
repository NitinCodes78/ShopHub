const favList = document.querySelector('.my-favourites');
const emptyList = document.querySelector('.empty-wishlist');
let favItems = JSON.parse(localStorage.getItem('FAVOURITES')) || [];

function ifEmptywishlist(){
    
    if(favItems.length === 0){
        emptyList.style.display = 'flex';    
    } 
    else{
        emptyList.style.display = 'none';
        populateWishList(favItems, favList);
    }
}
ifEmptywishlist();

/*````````````````````````````````````````````````````````````````````````````````````````` */
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

/*````````````````````````````````````````````````````````````````````````````````````````` */


function removeFav(e){
    const grandParent=e.target.parentElement.parentElement;
    const imgUrl=grandParent.querySelector('.fav-img img').src;
    const removeIndex=favItems.findIndex(item=>{
           return item.bgImgUrl==imgUrl;
    });
    favItems.splice(removeIndex,1);
    localStorage.setItem('FAVOURITES', JSON.stringify(favItems));

    populateWishList(favItems, favList);

    ifEmptywishlist();

    const removeIcons = [...document.querySelectorAll('.remove-fav')];
    removeIcons.forEach(icon => {
    icon.addEventListener("click", removeFav);
});
   
}

const removeIcons = [...document.querySelectorAll('.remove-fav')];
removeIcons.forEach(icon => {
     icon.addEventListener("click", removeFav);
});