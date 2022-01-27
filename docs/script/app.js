import {
  menuHamburger,
  goUpMenu,
  activeLinks,
} from "./modules/menu_hambuger.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  menuHamburger(".content-menu", ".btnMenu");
  goUpMenu(".btnUp");
});

activeLinks(".menu__link");
