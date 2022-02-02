//Create A Responsive Menu Hide Show Side Menu
const header = document.querySelector(".header");
const topLine = document.querySelector(".top-line");
const menu = document.querySelector(".links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

// Onscroll Change Nav Bar Background
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
    this.scrollY > 20 ? topLine.classList.add("hide") : topLine.classList.remove("show");
}


/* == Overlay == */ 
function openSearch() {
    document.getElementById("overLay").style.display = "block";
}

function closeSearch() {
    document.getElementById("overLay").style.display = "none";
}

/* == Onclick Responsive Menu Link == */
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
  });
}
/* == Onclick Responsive Menu Link == */