const header = document.querySelector('header');
const navToggle = document.getElementById('nav__toggle');
const resumeToggle = document.getElementById('resume__toggle');
const modal = document.querySelector('.modal');
const modalClose = document.getElementById('close__modal');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    let curScrollPos = window.scrollY;

    if (prevScrollPos < curScrollPos) {
        navToggle.checked = false;
        header.style.top = '-73px';
    }
    else {
        header.style.top = '0';
    }
    prevScrollPos = curScrollPos;
})

window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.style.display === 'flex') closeModal();
})

resumeToggle.addEventListener('click', showModal)

modalClose.addEventListener('click', closeModal)

modal.addEventListener('click', event => {
    if (event.currentTarget === event.target) closeModal();
})


function showModal() {
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hide');
    setTimeout(() => {
        modal.classList.remove('show', 'hide');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 200)
}

card1.addEventListener('click', function() {
    card1.classList.toggle('isflipped');
})
card2.addEventListener('click', function() {
    card2.classList.toggle('isflipped');
})
card3.addEventListener('click', function() {
    card3.classList.toggle('isflipped');
})