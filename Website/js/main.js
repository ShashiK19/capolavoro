const menu_icon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar')

menu_icon.addEventListener('click', ()=>{
    if(menu_icon.classList.contains('bx-menu')){
        menu_icon.classList.add('bx-x');
        menu_icon.classList.remove('bx-menu');
        navbar.classList.add("active");
    }else{
        menu_icon.classList.remove('bx-x');
        menu_icon.classList.add('bx-menu');
        navbar.classList.remove("active");
    }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },

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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

const sign = document.getElementById('sign');
const formX = document.getElementById('form-x');
const form = document.getElementById('form');

sign.addEventListener('click', ()=>{
    form.classList.add('active');
    document.body.classList.add('active');
    document.getElementById('main').classList.add('active');
    document.getElementById('header').classList.add('active');
    document.getElementById('footer').classList.add('active');
})
formX.addEventListener('click', ()=>{
    form.classList.remove('active');
    document.body.classList.remove('active');
    document.getElementById('main').classList.remove('active');
    document.getElementById('header').classList.remove('active');
    document.getElementById('footer').classList.remove('active');
})


var watch_items = document.querySelectorAll('.observe');


var callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        }
    });
}

var observer = new IntersectionObserver(callback, {threshold:0.40});

watch_items.forEach((element) =>{
    observer.observe(element);
})