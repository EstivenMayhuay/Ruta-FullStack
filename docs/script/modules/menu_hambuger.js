// menu hamburger
function menuHamburger(contentMenu, btnMenu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(contentMenu).classList.toggle("active-menu");
      d.querySelector(btnMenu).classList.toggle("active-btnMenu");
    }
  });
}

// go up menu
function goUpMenu(btnUp) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnUp) || e.target.matches(`${btnUp} *`)) {
      window.scrollTo(0, 0);
    }
  });
}

// active links
function activeLinks(links) {
  const d = document;

  restoreLink();

  d.addEventListener("click", (e) => {
    if (e.target.matches(links)) {
      let idLink = e.target.id;

      saveStore(idLink);

      let idLocal = getStore();

      d.querySelectorAll(".link-active").forEach((linkA) => {
        linkA.classList.remove("link-active");
      });

      if (idLink == idLocal) {
        e.target.classList.add("link-active");
      }
    }
  });
}

function saveStore(data) {
  localStorage.setItem("idStore", data);
}

function getStore() {
  return localStorage.getItem("idStore");
}

function restoreLink() {
  const d = document;
  if (localStorage.getItem("idStore") != null) {
    let linkId = localStorage.getItem("idStore");
    let linkActive = d.querySelector(`#${linkId}`);
    linkActive.classList.add("link-active");
  }
}

export { menuHamburger, goUpMenu, activeLinks };
