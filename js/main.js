
const headerFixed = document.querySelector('.header-fixed');

window.addEventListener('scroll', function(){
        headerFixed.classList.toggle('active', this.window.scrollY > 1)
});