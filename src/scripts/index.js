/* eslint-disable no-unused-vars */
import 'regenerator-runtime'
import '../styles/main.css'
import { Navbar, Footer } from './views/appshell'
import './card'

const navbar = new Navbar({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('drawer'),
  content: document.querySelector('main')
})

const footer = new Footer(document.getElementById('tahun'))
