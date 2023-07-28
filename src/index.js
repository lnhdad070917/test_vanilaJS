import "./pages/components/navbar";
import App from "./app.js";
import "./../style.css";

const app = new App({
  //   button: document.querySelector(".toggle-button"),
  drawer: document.querySelector("nav"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
  //   swRegister();
});

window.addEventListener("DOMContentLoaded", () => {
  app.renderPage();
  //   swRegister();
});
