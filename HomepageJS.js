const dropbar = document.querySelector(".dropbar")
const navMenu = document.querySelector(".nav-menu")
const Zoom = document.getElementById("zoom")
const zoomBtn = document.querySelector("zoom-btn")

dropbar.addEventListener("click", () =>{
    dropbar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        dropbar.classList.remove("active")
        navMenu.classList.remove("active")
    } ))

Zoom.textContent="JOIN US ONLINE"

zoomBtn.addEventListener("click",function(){
    window.open('https://www.google.com', _blank)
}

)
