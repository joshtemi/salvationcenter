const zoom = document.getElementById("zoom")
const zoomBtn = document.getElementById("zoom-btn")
const youtubeCap = document.getElementById("youtube-cap")
const dropbar = document.querySelector(".dropbar")
const navMenu = document.querySelector(".nav-menu")

zoom.textContent =("Join us on Zoom ")
zoomBtn.textContent = ("Zoom")
youtubeCap.textContent = ("Watch our recorded Services ")

dropbar.addEventListener("click",  () =>{
    dropbar.classList.toggle("active")
    navMenu.classList.toggle("active")
   
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        dropbar.classList.remove("active")
        navMenu.classList.remove("active")
    } ))
  

Zoom.textContent="OR ONLINE VIA ZOOM"

zoomBtn.addEventListener("click",function(){
    window.open('https://www.google.com', _blank)
})
