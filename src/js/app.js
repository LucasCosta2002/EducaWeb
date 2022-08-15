document.addEventListener('DOMContentLoaded', function() {

    menu();
})

function menu() {
    const menu = document.querySelector('.mobile-menu');
    menu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const mostrar = document.querySelector('.navegacion');
    mostrar.classList.toggle('mostrar')
    
    const rotar = document.querySelector('.mobile-menu img');
    rotar.classList.toggle('rotate')
}

var swiper = new Swiper(".cursos-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });

 
var swiper = new Swiper(".profesores-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });
 
 var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });