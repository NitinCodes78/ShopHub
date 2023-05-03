const itemList = document.querySelector('.items-list');

function populateList(products, productList) {   //products will be an array of objects
    productList.innerHTML = products.map((product, i) => {
        return `
        <li>
            <div class="img"><img src=${product.bgImgUrl}></div>
            <div class="price">Rs ${product.price}</div>
            <div class="quantity"> <input type="number" min="1" value="1"> </div>
            <div class="total-amt">Rs ${product.price}</div>
        </li> 
        `;
    }).join('');
}
populateList(cartItems, itemList);


/*````````````````````QUANTITY X PRICE``````````````````````````` */

const quanInputs = [...document.querySelectorAll('.quantity input')] ;
console.log(quanInputs);

quanInputs.forEach(input =>{
    input.addEventListener('change',(e)=>{
        const target = e.target.parentElement.parentElement;

        const quantity = parseInt(input.value) ;
        let price = parseInt(target.querySelector('.price').innerText.slice(3));
        let totalAmount = target.querySelector('.total-amt');
        
        totalAmount.innerText =  `Rs ${price * quantity}`;
    })
})