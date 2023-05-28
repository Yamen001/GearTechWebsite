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
let hamburger = document.querySelectorAll(".hamburger .line")
let menu = document.querySelector(".nav-links")
let MenuLinks = document.querySelectorAll(".nav-links .container .menu-left ul li")
function openMenu() {
    menu.classList.toggle("open")
    MenuLinks.forEach((link) => { console.log(link) 
        link.classList.toggle("fade") })
    hamburger.forEach(line => {
        line.classList.toggle("open")
    });
}
// const pos = document.documentElement
// pos.addEventListener('mousemove', function (e) {
//     pos.style.setProperty('--x', e.clientX + 'px')
//     pos.style.setProperty('--y', e.clientY + 'px')
// })


var cursor = document.querySelector("#circle")
var cursor2 = document.querySelector("#circle2")
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left :" + e.clientX + "px; top:" + e.clientY +"px" 
})