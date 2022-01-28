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
      let urlLink = e.target.href;

      let dataNav = {
        id: idLink,
        url: urlLink,
      };

      saveStore(JSON.stringify(dataNav));

      let data = JSON.parse(getStore());

      d.querySelectorAll(".link-active").forEach((linkA) => {
        linkA.classList.remove("link-active");
      });

      console.log(data);

      if (idLink == data.id) {
        e.target.classList.add("link-active");
      }
    }
  });
}

// save data into localStorage
function saveStore(data) {
  localStorage.setItem("idStore", data);
}

// get the data into localStorage
function getStore() {
  return localStorage.getItem("idStore");
}

// restore the link active into localStorage
function restoreLink() {
  const d = document;

  let data = JSON.parse(getStore());

  if (localStorage.getItem("idStore") != null) {
    let linkActive = d.querySelector(`#${data.id}`);

    linkActive.classList.add("link-active");

    let urlCurr = window.location.href;

    if (urlCurr != data.url) {
      window.location.reload();
      window.location.replace(data.url);
    }
  }
}

export { menuHamburger, goUpMenu, activeLinks };
