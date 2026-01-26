let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    btn.classList.toggle('change');
    menu.classList.toggle('hide')
}