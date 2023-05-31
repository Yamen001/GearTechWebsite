// var controller = new ScrollMagic.Controller()
// // this means ... to tell the browser ..use the scroll bar and trigger animation

// // and the animation is defined in a scene
// var oursecne = new ScrollMagic.Scene({
//     triggerElement : "section.one",
//     // duration:500,
//     duration:'0%',
//     // triggerHook: 0,
//     // triggerHook: 1,
//     // triggerHook: .5,
//     reverse:false // once
// }).setClassToggle('section.one .text-left p ' , 'fade-outFromRight' ) // add class to element1 ... then add it to controller ..indecator is optional
// .addIndicators({
//     name:'fade scene',
//     colorTrigger : 'red',
//     indent: 50,
//     colorStart : "black",
//     colorEnd : "blue"
// })
// .addTo(controller) 

// // i controll when to add the class ... usign the triggerElement , and setClassToggle


// // you can add indicators ... its usefull when we want to debbug our complicated scenes
// // you can use options (object) within the indecators 


// // you put ending trigger ... to hide it back ...the calss removed ...when you have durations
// // duration .. is not a good for ((((responsive devices ))))... so you put 100%..100 view screen
// // trigerHook ..so you can chage the postion of the indecator 0... is to top/// 1 bottom ,, 0.5 ,, 0.9

// // reverse works only with no duration

// var oursecne = new ScrollMagic.Scene({
//     triggerElement : "section.one .text-left",
//     // duration:500,
//     duration:'0%',
//     // triggerHook: 0,
//     // triggerHook: 1,
//     // triggerHook: .5,
//     reverse:false // once
// }).setClassToggle('section.one .text-right p' , 'fade-inFromLeft' ) // add class to element1 ... then add it to controller ..indecator is optional
// .addIndicators({
//     name:'fade scene',
//     colorTrigger : 'red',
//     indent: 50,
//     colorStart : "black",
//     colorEnd : "blue"
// })
// .addTo(controller) 





// var oursecne = new ScrollMagic.Scene({
//     triggerElement : "section.one .orange-box",
//     // duration:500,
//     duration:'0%',
//     // triggerHook: 0,
//     // triggerHook: 1,
//     // triggerHook: .5,
//     reverse:false // once
// }).setClassToggle('section.one .text-right' , 'fade-inFromLeft' ) // add class to element1 ... then add it to controller ..indecator is optional
// .addIndicators({
//     name:'fade scene',
//     colorTrigger : 'red',
//     indent: 50,
//     colorStart : "black",
//     colorEnd : "blue"
// })
// .addTo(controller) 
