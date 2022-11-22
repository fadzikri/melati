/* eslint-disable no-unused-vars */
import "regenerator-runtime";
import "../styles/main.css";
import swRegister from "./utils/sw";
import { Navbar, Cards, Footer } from "./views/appshell";

const navbar = new Navbar({
  button: document.getElementById("hamburger"),
  drawer: document.getElementById("drawer"),
  content: document.querySelector("main"),
});

const cards = new Cards(document.getElementById("cards"));

const footer = new Footer(document.getElementById("tahun"));

window.addEventListener("load", () => {
  swRegister();
});
