declare var gsap : any;
declare var Parallax : any;
declare var Swiper : any;
// const Parallax = require('parallax-js')

var swiper = new Swiper(".MyServices", {
    spaceBetween: 100,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // 0: {
      //   slidesPerView: 1,
      // },
      // 320: {
      //   slidesPerView: 1.25,
      // },
      // 540: {
      //   slidesPerView: 2,
      // },
      // 768: {
      //   slidesPerView: 3,
      // }
    }

   
  })

export const services = function(){
//   gettotalLength();
    // hoverPlace();
}