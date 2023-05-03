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

quanInputs.forEach(input =>{
    input.addEventListener('change',(e)=>{
        const target = e.target.parentElement.parentElement;

        const quantity = parseInt(input.value) ;
        let price = parseInt(target.querySelector('.price').innerText.slice(3));
        let totalAmount = target.querySelector('.total-amt');
        
        totalAmount.innerText =  `Rs ${price * quantity}`;
        
        
        finalPrices.forEach(price => { 
            const numericPrice = parseInt(price.textContent.slice(3));
            numericPrices.push(numericPrice);
            return numericPrices;    
        })
        
        const numericSubtotal = numericPrices.reduce((sum,price)=> sum+price);
        subtotal.innerText =  `Rs ${numericSubtotal}`;
    })
})


/*````````````````````SUBTOTAL```````````````````````````*/
const finalPrices = [...document.querySelectorAll('.total-amt')];
const subtotal = document.querySelector('.subtotal');
const numericPrices = [];

finalPrices.forEach(price => { 
    const numericPrice = parseInt(price.textContent.slice(3));
    numericPrices.push(numericPrice);
    return numericPrices;    
})

const numericSubtotal = numericPrices.reduce((sum,price)=> sum+price);
subtotal.innerText =  `Rs ${numericSubtotal}`;

