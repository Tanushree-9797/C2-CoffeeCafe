let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItems = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
}
