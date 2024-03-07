"use strict";

const bodyElem = document.querySelector("body");

const slidesElem = document.querySelectorAll(".slide");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 3;

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slidesElem.length -1;
    }

    setActiveSlide();
    console.log("Current activeSlide:", activeSlide)
    //husk at kalde på functionen setActiveSlide()
})

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > 3){
        activeSlide = 0;
    }

    setActiveSlide();
    console.log("Current activeSlide:", activeSlide)
})

function setActiveSlide(){
    slidesElem.forEach((slide)=> slide.classList.remove('active'));
    
    slidesElem[activeSlide].classList.add('active');
    console.log("Current activeSlide:", activeSlide);
}

