const navList = document.querySelector(".nav_list");
const Show = document.querySelector(".show");
const openNav = document.querySelector(".open_mobile_menu");

function navListHidden(){
   openNav.addEventListener('click' , ()=>{
         navList.classList.toggle('show');
   })
}

console.log("open" , openNav)

navListHidden();