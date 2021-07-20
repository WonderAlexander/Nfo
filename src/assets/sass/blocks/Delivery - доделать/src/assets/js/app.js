/*navToggle*/
let burger = document.querySelector('#burger');
let navToggle = document.querySelector('#navToggle');

burger.addEventListener('click', function() {
    burger.classList.add("rotate");
    navToggle.classList.add('show');
    searchToggle.classList.remove('show');
})


/*Search*/
let search = document.querySelector('#search');
let searchToggle = document.querySelector('#searchToggle');

search.addEventListener('click', function() {
    navToggle.classList.remove('show');
    burger.classList.remove("rotate");
    searchToggle.classList.add('show');
})

/*Modal*/
let modal = document.querySelector('#modal');
let modalBtn = document.querySelector('#modalBtn');
let modalClose = document.querySelector('#modalClose');

modalBtn.addEventListener('click', function() {
    modal.classList.add('show');
})

modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
})

