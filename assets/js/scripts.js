'use strict';

const header = document.querySelector("[data-header]"),
      btnNavbar = document.querySelector("[data-btn-navbar]"),
      btnLoadMore = document.querySelector("[data-load-more]"),
      ctxMenu = document.querySelectorAll("[data-btn-menu]"),
      body = document.querySelector("body"),
      btnDark = document.querySelector(".dark-mode");


      
      
// Toggle Nabbar
btnNavbar.addEventListener("click", function() {
   header.classList.toggle("active");
})

      
// Toggle ContxtMenu
for(let i=0; i < ctxMenu.length; i++){
   ctxMenu[i].addEventListener("click", function(){
      this.nextElementSibling.classList.toggle("active");
   })
}


// Run Spinner
btnLoadMore.addEventListener("click", function(){
   this.classList.toggle("active");
})

// Toggle Dark Mode
let getMode = localStorage.getItem("mode");

if(getMode && getMode === "dark"){
   body.classList.toggle("dark");
}

btnDark.addEventListener("click", ()=>{
   body.classList.toggle("dark");
   if(body.classList.contains("dark")){
      localStorage.setItem("mode","dark");
   }else{
      localStorage.setItem("mode","light");
   }
})
