const nav = document.querySelector(".navbar")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
  if (lastScrollY < window.scrollY){
    nav.classList.add("nav--hidden");

  }else{
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;

});

const scrollUpButton = document.querySelector('.scroll-up-btn');

scrollUpButton.addEventListener("click", () =>{
  window.scrollTo(0, 0);
})