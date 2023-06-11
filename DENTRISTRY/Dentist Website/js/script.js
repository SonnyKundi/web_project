let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

/*document.querySelector('form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var gender = document.getElementById('gender');
    var county = document.getElementById('county');
    
    var errors = [];*/
    
   
  

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});