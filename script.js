var rellax = new Rellax('.rellax')

let lineScroll = document.querySelector("#line")

let fullHieght = document.documentElement.scrollHeight
let currentHieght = document.documentElement.clientHeight
let hieght = fullHieght - currentHieght
console.log(fullHieght);
console.log(currentHieght);


window.addEventListener("scroll",function(){
    let scrollTop = document.documentElement.scrollTop
    lineScroll.style.height = `${(scrollTop / hieght) * 100}%`
})




let nav = document.querySelector('nav')
let menu = document.querySelector(".nav-links")
let MenuLinks = document.querySelectorAll(".nav-links .container .menu-left ul li")
function openMenu() {
    menu.classList.toggle("open")
    console.log(menu)
}
// const pos = document.documentElement
// pos.addEventListener('mousemove', function (e) {
//     pos.style.setProperty('--x', e.clientX + 'px')
//     pos.style.setProperty('--y', e.clientY + 'px')
// })




