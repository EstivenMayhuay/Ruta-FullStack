function menuHamburger(contentMenu, btnMenu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(contentMenu).classList.toggle("active-menu");
      d.querySelector(btnMenu).classList.toggle("active-btnMenu");
    }
  });
}

function goUpMenu(btnUp) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnUp) || e.target.matches(`${btnUp} *`)) {
      window.scrollTo(0, 0);
    }
  });
}

export { menuHamburger, goUpMenu };
