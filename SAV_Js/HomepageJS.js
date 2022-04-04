const dropbar = document.querySelector(".dropbar")
const navMenu = document.querySelector(".nav-menu")
const Zoom = document.getElementById("zoom")
const zoomBtn = document.querySelector("zoom-btn")

dropbar.addEventListener("click",  () =>{
    dropbar.classList.toggle("active")
    navMenu.classList.toggle("active")
   
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        dropbar.classList.remove("active")
        navMenu.classList.remove("active")
    } ))
    var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    } else {
        hideNav();
        timer = setTimeout(function() {
          showNav();
        }, 150);
    }
}, false);

closeNav()

Zoom.textContent="OR ONLINE VIA ZOOM"

zoomBtn.addEventListener("click",function(){
    window.open('https://www.google.com', _blank)
}
)

function closeNav() {
    event.stopPropagation() 
    window.removeEventListener("click", closeNav);
}