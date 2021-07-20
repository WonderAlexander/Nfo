/*NavToggle*/
let burger = document.querySelector('#burger');
let navToggle = document.querySelector('#navToggle');

burger.addEventListener('click', function() {
    navToggle.classList.add('show');
})

/*FixedHeader*/
let header = document.querySelector('#header');
let intro = document.querySelector('#intro')

window.addEventListener('scroll', function() {
    let introH = intro.clientHeight;
    let scrollPos = window.scrollY;
    checkScroll(scrollPos, introH);
})

function checkScroll(scrollPos, introH) {
    if( scrollPos >= introH ) {
        header.classList.add('fixed');
    }else {
        header.classList.remove('fixed');
    }
}