document.addEventListener("DOMContentLoaded",function () {

let sliderContainer = document.querySelector(".slider-container")
let slider = document.querySelector(".slider")

let clonedItems = slider.innerHTML
slider.innerHTML= clonedItems

let totalWidth= slider.scrollWidth;

function ScrollingSlider(){
    if (sliderContainer.scrollLeft >= totalWidth / 2) {
        sliderContainer.scrollLeft = 0;
    } else {
        sliderContainer.scrollLeft +=1;
    }
}
 let  timing = setInterval (ScrollingSlider,20)
  
 /*mouse event*/

//  sliderContainer.addEventListener("mouseenter", function () {
//      clearInterval(timing);
//  });
 

//  sliderContainer.addEventListener("mouseleave", function () {
//     timing = setInterval (ScrollingSlider,20)
//  })
 
})