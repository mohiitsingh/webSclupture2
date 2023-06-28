window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 100);
})

const toggleButton = document.querySelector("#nav-toggle");
const navLinks = document.getElementById('nav-links');


toggleButton.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})