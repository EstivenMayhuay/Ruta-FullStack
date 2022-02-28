import { storageApp } from "./storageApp.js";

export default function darkTheme(btnTheme) {
  const d = document;
  const body = d.body;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTheme) || e.target.matches(`${btnTheme} *`)) {
      if (e.target.matches(".bxs-moon")) {
        e.target.className = "bx bxs-sun";
        body.classList.add("darkTheme");
        storageApp("theme", "dark");
      } else {
        e.target.className = "bx bxs-moon";
        body.classList.remove("darkTheme");
        storageApp("theme", "light");
      }
    }
  });
}
