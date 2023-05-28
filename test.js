let blackSection = document.querySelectorAll("section.black")
let circle = document.querySelector('.circle')
console.log(circle)
console.log(blackSection)

let Sections = []



class Section {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
}

blackSection.forEach((section) => {
    let obj = new Section(section.getBoundingClientRect().top, section.getBoundingClientRect().bottom)
    Sections.push(obj)
})



document.addEventListener('scroll', () => {
    // console.log(window.scrollY)
    let currentSectionstart
    let currentsectionend


    Sections.forEach((section) => {

        //~ if cursor is between a specific range of any black section of the sections .... specify the start and the end of the section
        if (window.scrollY >= section.start && window.scrollY <= section.end) {
            currentSectionstart = section.start
            currentsectionend = section.end
            if (window.scrollY >= currentSectionstart && window.scrollY <= currentsectionend) {
                circle.style.backgroundColor = 'red'
            }
            else{
                circle.style.backgroundColor = 'black'
            }   
            console.log(currentSectionstart , currentsectionend)
            console.log(window.scrollY)
        }
    })

    // Sections.forEach((section) => {
    //     // console.log(section.start , section.end)
    //     if (window.scrollY >= section.start && window.scrollY <= section.end) {
    //         console.log('the current scrollaia', window.scrollY)
    //         console.log(section.start , section.end)
    //         // console.log('black section')
    //         // changeTheme()
    //         circle.style.backgroundColor = 'red'

    //     }
    //     else{
    //         circle.style.backgroundColor = 'black'
    //     }

    // })
})

function changeTheme() {
    circle.style.backgroundColor = 'red'
}

// !111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
