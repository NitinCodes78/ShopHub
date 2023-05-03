/**************Showing the price and cart, heart, search image upon hovering the product************ */
const products=document.querySelectorAll('.product');
products.forEach(product=>product.addEventListener("mouseover",()=>{
     product.style.opacity='0.75';
     product.style.backgroundColor='grey';
     const images=product.querySelectorAll('.icon img');
     images.forEach(image=> image.style.display='flex');
     const price=product.querySelector('.price');
     price.style.display='inline-block';
}));
products.forEach(product=>product.addEventListener("mouseout",()=>{
    product.style.opacity='1';
     product.style.backgroundColor='rgb(220, 241, 241)';
     const images=product.querySelectorAll('.icon img');
     images.forEach(image=> image.style.display='none');
     const price=product.querySelector('.price');
     price.style.display='none';
}));


/**********Sorting the products in ascending and Descending Order*************** */
function comparatorAscending(a,b){
     if (parseInt(a.dataset.price) < parseInt(b.dataset.price))
        return -1;
     if (parseInt(a.dataset.price) > parseInt(b.dataset.price))
        return 1;
    return 0;
}
function comparatorDescending(a,b){
     if (parseInt(a.dataset.price) < parseInt(b.dataset.price))
        return 1;
     if (parseInt(a.dataset.price) > parseInt(b.dataset.price))
        return -1;
    return 0;
}
function comparatorNewest(a,b){
     if (parseInt(a.id.slice(3)) < parseInt(b.id.slice(3)))
        return -1;
     if (parseInt(a.id.slice(3)) > parseInt(b.id.slice(3)))
        return 1;
    return 0;
}
function sortAscending(){
     var prices=document.querySelectorAll('.product[data-price]');
     var pricesArray=Array.from(prices);
     let sorted=pricesArray.sort(comparatorAscending);
     sorted.forEach(x=>document.querySelector('.products').appendChild(x)); 
}
function sortDescending(){
     var prices=document.querySelectorAll('.product[data-price]');
     var pricesArray=Array.from(prices);
     let sorted=pricesArray.sort(comparatorDescending);
     sorted.forEach(x=>document.querySelector('.products').appendChild(x));     
}
function sortNewest(){ //Sort according to the id(assuming it for the newest)
     var prices=document.querySelectorAll('.product[data-price]');
     var pricesArray=Array.from(prices);
     let sorted=pricesArray.sort(comparatorNewest);
     pricesArray.forEach(x=>document.querySelector('.products').appendChild(x)); 

}
/********************Event Listener for sorting according to price********* */
const filter2=document.querySelector('.filter2');
filter2.addEventListener("change", funcFilter2);
function funcFilter2(){
     const value=document.querySelector('.filter2 select').value;
     if(value==='asc')
       sortAscending();
     else if(value==='dec')
       sortDescending();
     else 
       sortNewest();
}