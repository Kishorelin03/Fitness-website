document.querySelector('.hamburger-menu').addEventListener('click',()=>{
    document.querySelector('.container').classList.toggle("change")
});

function scrollToTop(){
    window.scrollTo(0,0);
}