import 'regenerator-runtime'
import '../styles/main.css'
import './card'

const menu = document.getElementById('hamburger')
const navbar = document.getElementById('drawer')
const tahun = document.getElementById('tahun')
const main = document.querySelector('main')

menu.addEventListener('click', (event) => {
  navbar.classList.toggle('navbar-open')
  event.stopPropagation()
})

main.addEventListener('click', (event) => {
  navbar.classList.remove('navbar-open')
  event.stopPropagation()
})

const year = new Date().getFullYear()

tahun.innerHTML = year
