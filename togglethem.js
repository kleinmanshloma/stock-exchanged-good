const BTN_SUN = document.querySelector(".btn-toggle-light");
const BTN_MOON = document.querySelector(".btn-toggle-dark");
const CHECK = document.querySelector(".moon");
const CHECK2 = document.querySelector(".sun");
const DIV = document.querySelector(".btn-toggle");
const BODY = document.body;

const moon = () => {
  BODY.style.backgroundColor = "#212121";
  BODY.style.color = "#ccc";
  DIV.classList.add("more-styles");
  CHECK.classList.add("hidden-moon");
  console.log(`moon clicked`);
  themeClick = true;
};

const sun = () => {
  BODY.style.backgroundColor = "#ffff0016";
  BODY.style.color = "#212121";
  DIV.classList.remove("more-styles");
  CHECK2.classList.add("hidden");
  CHECK.classList.remove("hidden-moon");
  console.log(`sun clicked`);
  themeClick = true;
};

BTN_MOON.addEventListener("click", moon);
BTN_SUN.addEventListener("click", sun);
