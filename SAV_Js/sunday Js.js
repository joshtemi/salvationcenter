const dropbar = document.querySelector(".dropbar")
const navMenu = document.querySelector(".nav-menu")
const mainHeader = document.getElementById("main-header")
const background = document.getElementsByClassName("big-cont")


dropbar.addEventListener("click", () =>{
    dropbar.classList.toggle("active")
    navMenu.classList.toggle("active")
    popUp.style.display="block"
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        dropbar.classList.remove("active")
        navMenu.classList.remove("active")
    } ))

    mainHeader.textContent = ("What to expect on a sunday visit")