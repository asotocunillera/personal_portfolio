const nav = document.querySelector("#nav");
const navBar = document.querySelector("#navBar");
const navHamburger = document.querySelector("#navHamburger");
const navbarMenu = document.querySelector("#navbarMenu");
const themeFilter = document.querySelector("#themeFilter");

const skillFilter = document.querySelector("#skillFilter");
const skillCharts = document.querySelectorAll("#skillCharts .chart");

navHamburger.addEventListener("click", ()=>{
  nav.classList.toggle('open');
})

themeFilter.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
})

// TODO: refactor this event
skillFilter.addEventListener("click", (e) =>{
  let selectedFilter = e.target.dataset.skills
  if (selectedFilter){
    if (selectedFilter === "all"){
      skillCharts.forEach((el) => el.classList.add("visible"));
    }
    else{
      skillCharts.forEach((el) =>{
        console.log(el.dataset.skill)
        el.dataset.skill.includes(selectedFilter) ? el.classList.add("visible") : el.classList.remove("visible")
      })
    }
  }
})
