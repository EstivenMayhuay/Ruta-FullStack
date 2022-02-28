import darkTheme from "./modules/dark_theme.js";
import {
  menuHamburger,
  goUpMenu,
  activeLinks,
} from "./modules/menu_hambuger.js";
import { restoreStorage } from "./modules/storageApp.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  menuHamburger(".content-menu", ".btnMenu");
  goUpMenu(".btnUp");
  activeLinks(".menu__link");
  restoreStorage("theme");
  darkTheme("#btnTheme");
});
