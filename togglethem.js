const btnSun = document.querySelector(".btn-toggle-light");
const btnMoon = document.querySelector(".btn-toggle-dark");
const check = document.querySelector(".moon");
const check2 = document.querySelector(".sun");
const div = document.querySelector(".btn-toggle");
const body = document.body;

const moon = () => {
  body.style.backgroundColor = "#212121";
  body.style.color = "#ccc";
  div.classList.add("more-styles");
  check.classList.add("hidden-moon");
  console.log(`moon clicked`);
};

const sun = () => {
  body.style.backgroundColor = "#fff";
  body.style.color = "#212121";
  div.classList.remove("more-styles");
  check2.classList.add("hidden");
  check.classList.remove("hidden-moon");
  console.log(`sun clicked`);
};

btnMoon.addEventListener("click", moon);
btnSun.addEventListener("click", sun);
