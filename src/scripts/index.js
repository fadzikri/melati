/* eslint-disable no-unused-vars */
import "regenerator-runtime";
import "../styles/main.css";
import process from "./utils/process";
// import swRegister from "./utils/sw";
import { Navbar, Content, Footer } from "./views/appshell";

const navbar = new Navbar({
  button: document.getElementById("hamburger"),
  drawer: document.getElementById("drawer"),
  content: document.querySelector("main"),
});

const content = new Content(document.getElementById("content"));

const footer = new Footer(document.getElementById("tahun"));

window.addEventListener("popstate", () => {
  process.changeTitleToInitial();
  process.changeClassContentToNormal();
  process.changeIdSection();
});

window.addEventListener("hashchange", () => {
  content.renderContent();
});

window.addEventListener("load", () => {
  // swRegister();
  process.changeIdSection();
});
