const itemList = document.querySelector('.items-list');
function populateList(products, productList) {   //products will be an array of objects
    productList.innerHTML = products.map((product, i) => {
        return `
        <li>
            <div class="img">
                <img src=${product.bgImgUrl} class="product-img">
                <img src="/images/icons/icon-close.svg" class="delete">
            </div>
            <div class="price">₹ ${product.price}</div>
            <div class="quantity"> <input type="number" min="1" value="1"> </div>
            <div class="total-amt">₹ ${product.price}</div>
        </li> 
        `;
    }).join('');
}
populateList(cartItems, itemList);

/*````````````````````QUANTITY X PRICE``````````````````````````` */

const quanInputs = [...document.querySelectorAll('.quantity input')] ;

quanInputs.forEach(input =>{
    input.addEventListener('change',(e)=>{
        const target = e.target.parentElement.parentElement;

        const quantity = parseInt(input.value) ;
        let price = parseInt(target.querySelector('.price').innerText.slice(2));
        let totalAmount = target.querySelector('.total-amt');        
        
        totalAmount.innerText =  `₹ ${price * quantity}`;


        computeSubtotal() 
    })
})
let finalPrices = [...document.querySelectorAll('.total-amt')];
const subtotal = document.querySelector('.subtotal');

/*````````````````````SUBTOTAL```````````````````````````*/

function computeSubtotal(){
const numericPrices=[];
finalPrices.forEach(price => {
    const numericPrice = parseInt(price.textContent.slice(2));
    numericPrices.push(numericPrice);
    return numericPrices;    
})

const numericSubtotal = numericPrices.reduce((sum,price)=> sum+price);
subtotal.innerText =  `₹ ${numericSubtotal}`;

}
computeSubtotal()

/*`````JS For remove button( removing item from the cart)`````````*/

const removeList=document.querySelectorAll('.delete');
const removeArray=Array.from(removeList);
removeArray.forEach(remove => {
        remove.addEventListener("click", (e)=>{
               const grandParent=e.target.parentElement.parentElement;
               const imgUrl=grandParent.querySelector('.img .product-img').src;
               const removeIndex=cartItems.findIndex(item=>{
                      return item.bgImgUrl==imgUrl;
               });
               cartItems.splice(removeIndex,1);
               localStorage.setItem('CART-ITEMS', JSON.stringify(cartItems));
               populateList(cartItems,itemList);
               finalPrices=[...document.querySelectorAll('.total-amt')];
               computeSubtotal();
        });
});

