const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

function hideNav() {
    document.getElementById("nav-toggle").checked = false;
    header.classList.add('hide');
}

function showNav() {
    header.classList.remove('hide');
}

window.addEventListener('scroll', () =>{
    let curScrollPos = window.pageYOffset;

    if(prevScrollPos < curScrollPos){
        hideNav();
    }
    else{
        showNav();
    }
    prevScrollPos=curScrollPos;
})
