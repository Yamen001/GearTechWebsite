let blackSection = document.querySelectorAll("section.black")
let circle = document.querySelector('.circle')

let Sections = []



class Section {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
}

blackSection.forEach((section) => {
    let obj = new Section(section.getBoundingClientRect().top , section.getBoundingClientRect().bottom)
    Sections.push(obj)
})



document.addEventListener('scroll', () => {
    let show = IsBlack()
    if(show){
        circle.style.backgroundColor = 'red'
    }
    else{
        circle.style.backgroundColor = 'black'
    }



function IsBlack(){
    let ArrayResult = []
    let show = ()=>{
            for(let i =0 ; i<= Sections.length-1 ;i++){
                if(window.scrollY <= Sections[i].end && window.scrollY >= Sections[i].start){

                    ArrayResult.push(true)
                }
                else{
                    ArrayResult.push(false)
                }
            }
        }
    show()
    console.log(ArrayResult)
    let result =ArrayResult.reduce((acc , index) =>{
        return acc + index
    })
    return result
}


})



// !111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

