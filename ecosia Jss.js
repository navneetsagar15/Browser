const mainsearch = document.getElementsByClassName("main-search");
const search = document.getElementById("search");
const btn = document.getElementsByClassName("btn");
search.addEventListener("click", () => {
  mainsearch[0].style.backgroundColor = "#ecf0f1";
})
btn[0].addEventListener("click", () => {
  window.open("https://www.ecosia.org/search?q="+search.value,"_blank");
})
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
    splash.remove("splash")
  }, 2000);
})
