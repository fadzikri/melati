import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menu = document.getElementById("hamburger");
const navbar = document.getElementById("drawer");
const tahun = document.getElementById("tahun");
const main = document.querySelector("main");

menu.addEventListener("click", (event) => {
    navbar.classList.toggle("navbar-open");
    event.stopPropagation();
})

main.addEventListener("click", (event) => {
    navbar.classList.remove("navbar-open");
    event.stopPropagation();
})

let year = new Date().getFullYear();

tahun.innerHTML = year;