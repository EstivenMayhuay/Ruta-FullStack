export default function menuHamburger(contentMenu, btnMenu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(contentMenu).classList.toggle("active-menu");
      d.querySelector(btnMenu).classList.toggle("active-btnMenu");
    }
  });
}
