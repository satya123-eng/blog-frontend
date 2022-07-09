const toggleBtn = document.querySelector(".toggle");
const navLinks =document.querySelectorAll(".nav-link");

toggleBtn.addEventListener("click",() => {
    navLinks.forEach(function(link){
     link.classList.toggle("active");
     console.log(link);
    });
});