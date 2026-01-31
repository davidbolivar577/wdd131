const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('.links');


gallery.addEventListener('click', openModal);
btn.addEventListener('click', toggleMenu);

function openModal(e) {
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sm', 'full');

    modalImage.setAttribute('src', full);
    modalImage.setAttribute('alt', alt);
    modal.showModal();

}


closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


function toggleMenu() {
    menu.classList.toggle('hide');
}