const navBar = document.querySelector("#navBar");
const navHamburger = document.querySelector("#navHamburger");
const navbarMenu = document.querySelector("#navbarMenu");
const themeFilter = document.querySelector("#themeFilter");

navHamburger.addEventListener("click", ()=>{
  navBar.classList.toggle('open');
  navHamburger.classList.toggle('open');
  navbarMenu.classList.toggle('open');
})

themeFilter.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  themeFilter.classList.toggle("light-mode");
  themeFilter.classList.toggle("dark-mode");
})
