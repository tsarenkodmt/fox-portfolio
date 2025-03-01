const headerFixed = document.querySelector('.header-fixed');

window.addEventListener('scroll', function () {
        headerFixed.classList.toggle('active', this.window.scrollY > 1)
});

let swiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
});