const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () =>{
    let curScrollPos = window.pageYOffset;

    if(prevScrollPos < curScrollPos){
        document.getElementById('nav__toggle').checked = false;
        header.style.top = '-73px';
    }
    else{
        header.style.top = '0';
    }
    prevScrollPos=curScrollPos;
})
