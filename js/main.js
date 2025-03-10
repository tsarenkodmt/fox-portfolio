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

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".testimonials-slider .swiper-slide");
const slideCount = slides.length;
fraction.textContent = `1 / ${slideCount}`;

let swiperTestimonial = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
        },

        on: {
                slideChange: function()  {

                        if (!this.slides || this.slides.length === 0) return
                        let realIndex = this.realIndex + 1
                        let totalSlides = document.querySelectorAll(".testimonials-slider .swiper-slide:not(.swiper-slide-duplicate)").length
             
                        if (realIndex > totalSlides) realIndex = totalSlides

                        let fraction = document.querySelector(".swiper-fraction")
                        if (fraction) {
                                fraction.innerHTML = `<span class="fraction-number">${realIndex} </span>/ <span class="fraction-total">${totalSlides} </span>`;
                        }

                }
        }

});