/*````````````````````PAYPAL```````````````````````````*/
const payableAmt = localStorage.getItem("PAYABLE-AMOUNT");
const cartItems = JSON.parse(localStorage.getItem("CART-ITEMS"));

let orderDetails = JSON.parse(localStorage.getItem('ORDER DETAILS')) || [];


    paypal.Buttons({
        createOrder: function(data, actions){
            return actions.order.create({
                purchase_units:[{
                    amount:{
                        value: payableAmt
                    },
                },
            ],
            })
        },
        onApprove: function(data, actions){
            return actions.order.capture().then(function(details){
            alert("Transaction completed by "+ details.payer.name.given_name);
            onSuccess();
        })
    },
    })
    .render('#paypal-button')


/*````````````````````PAYABLE AMOUNT```````````````````````````*/

document.querySelector('.payment-heading span').textContent = `$ ${payableAmt}`;


/*`````````````````````````````````````````````````````````````````*/
function onSuccess(){
    cartItems.forEach(item => {
        const product ={
            productId : item.productId ,
            price : item.price,
            type : item.type
        };  
        orderDetails.push(product);
        localStorage.setItem('ORDER DETAILS', JSON.stringify(orderDetails));
        });
        console.log(orderDetails);
}

