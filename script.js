let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    
    })
let header = document.querySelector(".header");
header.classList.toggle('sticky', window.scrollY > 100);
};

let mode = "light";
const darkMode = () => {
    if(mode === "light"){
        mode = "dark"
        document.querySelector("body").classList.add("darkMode")
        let prof = document.querySelector(".proffesion");
       prof.style.backgroundColor = "black"
       let head = document.querySelector(".proffesion h3");
       head.style.color = "white";
       let box = document.querySelectorAll(".services-box");
       box.style.color = "black"
    }
    else{
        mode = "light"
        document.querySelector("body").classList.remove("darkMode");
    }
}