const elements = document.querySelectorAll(".menu-link");
function addHoverEffect(event) {
  event.target.classList.add("menu-link-hover");
}

function removeHoverEffect(event) {
  event.target.classList.remove("menu-link-hover");
}

function toggleHoverEffect(event) {
  if (!event.target.classList.contains("menu-link-hover")) {
    event.target.classList.add("menu-link-hover");
  } else {
    event.target.classList.remove("menu-link-hover");
  }
}
elements.forEach((element) => {
  element.addEventListener("mouseover", addHoverEffect);
  element.addEventListener("mouseout", removeHoverEffect);
  element.addEventListener("touchstart", toggleHoverEffect);
  element.addEventListener("touchend", toggleHoverEffect);
});
