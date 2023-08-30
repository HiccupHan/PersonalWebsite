const header = document.querySelector('header');
const navToggle = document.getElementById('nav__toggle');
const resumeToggle = document.getElementById('resume__toggle');
const resumeModal = document.getElementById('resume__modal');
const resumeModalClose = document.getElementById('close__resume__modal');

const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const projectModal = document.getElementById('project__modal');
const projectModalClose = document.getElementById('close__project__modal');
const detail1 = document.getElementById('detail1');
const detail2 = document.getElementById('detail2');
const detail3 = document.getElementById('detail3');

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
    if (event.key === 'Escape' && resumeModal.style.display === 'flex') closeModal(resumeModal);
    if (event.key === 'Escape' && projectModal.style.display === 'flex') closeModal(projectModal);
})



resumeToggle.addEventListener('click', function(){showModal(resumeModal);})
resumeModalClose.addEventListener('click', function(){closeModal(resumeModal);})
resumeModal.addEventListener('click', event => {
    if (event.currentTarget === event.target) closeModal(resumeModal);
})

project1.addEventListener('click', function(){showModal(projectModal); showProject(detail1);})
project2.addEventListener('click', function(){showModal(projectModal); showProject(detail2);})
project3.addEventListener('click', function(){showModal(projectModal); showProject(detail3);})
projectModalClose.addEventListener('click', function(){closeModal(projectModal);if(detail1.style.display=='grid') closeProject(detail1);if(detail2.style.display=='grid') closeProject(detail2);if(detail3.style.display=='grid') closeProject(detail3);})
projectModal.addEventListener('click', event => {
    if (event.currentTarget === event.target){
       closeModal(projectModal);
       if(detail1.style.display=='grid') closeProject(detail1);
       if(detail2.style.display=='grid') closeProject(detail2);
       if(detail3.style.display=='grid') closeProject(detail3);
    } 
})


function showModal(modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.add('hide');
    setTimeout(() => {
        modal.classList.remove('show', 'hide');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 200)
}
let slideIndex = 1;
showSlides(slideIndex);
function showProject(detail) {
    detail.style.display = 'grid';
    slideIndex = 1;
    showSlides(1);
}

function closeProject(detail) {
    setTimeout(() => {
        detail.style.display = ('none');
        let slides = document.getElementsByClassName("project__gallery__cell");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    }, 210)
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



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
    let slides = detail1.style.display == 'grid' ? document.getElementsByClassName("gallery__cell1") : detail2.style.display == 'grid' ? document.getElementsByClassName("gallery__cell2") : document.getElementsByClassName("gallery__cell3");
  if (n < 1) {slideIndex = slides.length}
  if (n > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}