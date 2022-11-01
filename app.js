let menuToggleIcon = document.querySelector('.mobile-menu-toggle');
let navMenu = document.querySelector('.nav-menu');





menuToggleIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active-menu')
})




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.inner');
hiddenElements.forEach((el) => observer.observe(el))



let popup = document.getElementById("popup");

function openPop() {
    popup.classList.add("open-popup");
}

function closePop() {
    popup.classList.remove("open-popup");
}

/*--- FAQ ---*/

let question = document.querySelector('.question');
let answer = document.querySelector('.answer');





question.addEventListener('click', () => {
    
})