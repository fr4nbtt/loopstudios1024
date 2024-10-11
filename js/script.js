const btnEl = document.querySelector("#menu-btn");
const menuEl = document.querySelector("#menu");

btnEl.addEventListener("click", navToggle);

function navToggle() {
  btnEl.classList.toggle("open");
  menuEl.classList.toggle("hidden");
  menuEl.classList.toggle("flex");
}
