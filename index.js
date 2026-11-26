let isOpen = false; 
function menu() {
    isOpen = !isOpen;
  let menuBox = document.querySelector(".overall-anchor-icon-login");
  if (isOpen == true) {
    menuBox.classList.add("show-menu");
  } else {
    menuBox.classList.remove("show-menu");
  }
}