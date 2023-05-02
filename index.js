const products=document.querySelectorAll('.product');
products.forEach(product=>product.addEventListener("mouseover",()=>{
     product.style.opacity='0.75';
     product.style.backgroundColor='grey';
     const images=product.querySelectorAll('.icon img');
     images.forEach(image=> image.style.display='flex');
}));
products.forEach(product=>product.addEventListener("mouseout",()=>{
    product.style.opacity='1';
     product.style.backgroundColor='rgb(220, 241, 241)';
     const images=product.querySelectorAll('.icon img');
     images.forEach(image=> image.style.display='none');
}));

/*``````````````NAVBAR````````````````````````*/
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const cross = document.querySelector('.cross');

hamburger.addEventListener("click",function(){
    navbar.classList.add('active');
    hamburger.classList.add('active');
}
);

cross.addEventListener("click",function(){
    navbar.classList.remove('active');
    hamburger.classList.remove('active');

}
);
/*``````````````SLIDER````````````````````````*/
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
var counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})
nextBtn.addEventListener('click',()=>{
    if(counter > slides.length-2) counter = 0;
    else counter++;

    slideImage();
})
prevBtn.addEventListener('click',()=>{
    if(counter==0) counter =3;
    counter--;

    slideImage();
})
const slideImage = () =>{
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${counter*100}%)`;
})
}