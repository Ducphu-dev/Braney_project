declare var gsap : any;
declare var Parallax : any;
declare var Swiper : any;
// const Parallax = require('parallax-js')

var swiper = new Swiper(".MyClient", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    grabCursor: true,
   
})
var swiper_1 = new Swiper(".MyClientLogo", {
    
   
    spaceBetween: 30,
    slidesPerView: 3,
    direction: "vertical",
   
    grabCursor: true,

   

   
})

export const client = function(){
//   gettotalLength();
    // hoverPlace();
}