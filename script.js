let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active')
    search.classList.remove('active');
    cartItem.classList.remove('active');
   
}



