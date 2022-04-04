const dropbar = document.querySelector(".dropbar")
const navMenu = document.querySelector(".nav-menu")




dropbar.addEventListener("click", () =>{
    dropbar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        dropbar.classList.remove("active")
        navMenu.classList.remove("active")
    } ))
