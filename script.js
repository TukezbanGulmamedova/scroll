"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimation = () =>{
    animationItems.forEach((animationItem) =>{
        const triggerPoint = window.innerHeight * 0.8;
        const distanceFromTop = animationItem.getBoundingClientRect().top;

animationItem.style.transition= "all 200ms linear"

        if (distanceFromTop < triggerPoint) {
            animationItem.style.opacity =1;
        animationItem.style.transform ="translateY(0px)";
        }else{
        animationItem.style.opacity =0;
        animationItem.style.transform ="translateY(50px)";
        }
    })
}
window.addEventListener("scroll", scrollAnimation)