const hrtIcons = [...document.querySelectorAll('.heart')];
let favItems = JSON.parse(localStorage.getItem('FAVOURITES')) || [];
for(let i=1; i<=55;i++){
   let heartColor=localStorage.getItem(`heart${i}`);
   if(heartColor===null)
     continue;
   const product=document.querySelector(`.product#id-${i}`);
   const img=product.querySelector('.heart img');
   img.src = 'Images/red-heart.png';
   }
hrtIcons.forEach(icon => {
    icon.addEventListener('click',(e)=>{
        e.target.src = 'Images/red-heart.png';
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
        const heartNumber="heart"+productId.slice(3);
        localStorage.setItem(heartNumber,"red");        
    })
});



