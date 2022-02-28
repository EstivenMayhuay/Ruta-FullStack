function storageApp(nameItem, value) {
  localStorage.setItem(nameItem, value);
}

function restoreStorage(nameItem) {
  if (localStorage.getItem(nameItem) == "dark") {
    let icon = document.querySelector(".bxs-moon");
    icon.className = "bx bxs-sun";
    document.body.classList.add("darkTheme");
  }
}

export { storageApp, restoreStorage };
