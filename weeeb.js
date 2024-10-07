let menu = document.querySelector(".fixed-menu")

menu.addEventListener("click", function(event){
    let clickTarget = event.target
    let activeBtn = document.querySelector(".active")

    if (clickTarget.classList.conteins("nav-links")){
        clickTarget.classList.add("active");
        clickTarget.classList.remove("active");
    }
});



let classLink = '.main-link';
window.onscroll = function() {
    let h = document.documentElement.clientHeight;

    if (window.scrollY >= h*4) {
        classLinklassLink = '.comments-link'
    }

    else if (window.scrollY >= h*3) {
        classLinklassLink = '.works-link'
    }

    else if (window.scrollY >= h*2) {
        classLinklassLink = '.skills-link'
    }

    else if (window.scrollY >= h) {
        classLinklassLink = '.about-link'
    }

    else  {
        classLinklassLink = '.main-link'
    }

let activeBtn = document.querySelector(".active")
let newActiveBtn = document.querySelector(classLink)
if (!newActiveBth.classList.contains('active')){
    newActiveBth.classList.add('active');
    activeBth.classList.remove('active')
    }

};

