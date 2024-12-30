const buttons = document.querySelectorAll('.btn');
let cont= document.querySelector(".btn-container");
let btn6 = document.querySelector(".btn6");
let btn1 = document.querySelector(".btn1");
let cont1= document.querySelector(".btn-container1");
let navbtn1 = document.querySelector("#nav-btn");
let navbtn2 = document.querySelector("#nav-btn1");
let nav1= document.querySelector(".nav");


const navbtn = () => {
nav1.classList.add("active");
    navbtn1.classList.add("active");
    navbtn2.classList.add("active");
};
const navbtnn = () => {
nav1.classList.remove("active");
    navbtn1.classList.remove("active");
    navbtn2.classList.remove("active");
};




const Bot = () => {
cont1.classList.add("active");
    cont.classList.add("active");
};

const Back = () => {
    cont.classList.remove("active");
    cont1.classList.remove("active");
};


buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})


navbtn1.addEventListener("click",navbtn);
navbtn2.addEventListener("click",navbtnn);

btn1.addEventListener("click",Bot);

btn6.addEventListener("click",Back);