/* eslint-disable no-unused-vars */
import "../styles/main.css";
import "regenerator-runtime";
import process from "./utils/process";
import swRegister from "./utils/sw";
import { Navbar, Content, Footer } from "./views/appshell";
import fallbackImg from "./utils/fallback-img";

const navbar = new Navbar({
  button: document.getElementById("hamburger"),
  drawer: document.getElementById("drawer"),
  content: document.querySelector("main"),
});

const content = new Content(document.getElementById("content"));

const footer = new Footer(document.getElementById("tahun"));

window.addEventListener("popstate", () => {
  process.changeTitleToInitial();
});

window.addEventListener("hashchange", () => {
  content.renderContent();
  process.skipContent();
});

window.addEventListener("load", () => {
  fallbackImg();
  swRegister();
});
