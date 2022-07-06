const nav = document.querySelector("#nav");
const navBar = document.querySelector("#navBar");
const navHamburger = document.querySelector("#navHamburger");
const navbarMenu = document.querySelector("#navbarMenu");
const themeFilter = document.querySelector("#themeFilter");

navHamburger.addEventListener("click", ()=>{
  nav.classList.toggle('open');
})

themeFilter.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
})
