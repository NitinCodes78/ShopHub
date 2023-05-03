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
