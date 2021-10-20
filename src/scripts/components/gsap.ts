

declare var gsap : any;
declare var Power4 : any;
declare var Power3 : any;
declare var Back : any;
declare var MorphSVGPlugin :any;

class animationIdx {
  // private -> 
  // public -> 
  // protected -> 

  // public 
  qIdx: any;
  emptry: Boolean;
  delay: any;

  constructor(...arrs: any) {
    this.emptry = false;

    for (let idxArr = 0; idxArr < arrs.length; idxArr++) {
      this.qIdx = Array(arrs[idxArr].length);
      this.delay = Array(arrs[idxArr].length);

      for (let idx = 0; idx < arrs[idxArr].length; idx++) {
        let queryStr = arrs[idxArr][idx][0];
        let styleGsap = arrs[idxArr][idx][1];
        let effectObj = arrs[idxArr][idx][2];
        let delayObj = arrs[idxArr][idx][3];
        if (document.querySelector(queryStr)){
          this.qIdx[idx] = gsap[styleGsap](`${queryStr}`, effectObj);

          if (delayObj !== undefined){
            this.qIdx[idx].delay(delayObj);
            this.delay[idx] = delayObj;
          }
          this.qIdx[idx].pause();
        }
        else {
          this.emptry = true;
        }
      }
    }
  }

  // public
  play() {
    if (!this.emptry) {
      for (let i = 0; i < this.qIdx.length; i++) {
        this.qIdx[i].play();
      }
    }
  }
  restart(){
    if (!this.emptry){
      for (var i = 0; i < this.qIdx.length; i++){
        var delay = this.delay[i];
        if (delay === undefined){
          delay = 0;
        }
        const temp = this.qIdx[i];

        setTimeout(function(){
          temp.restart();
        }, delay * 1000);
      }
    }
  }
  reverse() {
    if (!this.emptry) {
      for (let i = 0; i < this.qIdx.length; i++) {
        this.qIdx[i].reversed(true);
      }
    }
  }
}

const objIdx1 = new animationIdx([
  ["#lm-index-1 .lm-home__logo", "from",{
    duration: 1.2, y: '120px', opacity: 0
  }, 0.6],
  ["#lm-index-1 .lm-home__form", "from",{
    duration: 0.6, x: '100%', opacity: 0
  }, 0],
]);

const objIdx6 = new animationIdx([
  ["#lm-index-6 .intro__title", "from",{
    duration: .8, 
    x: '-100%', 
    opacity: 0
  }, 0],
  ["#lm-index-6 .intro__desc", "from",{
    duration: .8, 
    delay: 0.5,
    x: '-120%'
  }, 0.5],
  ["#lm-index-6 .animation-box", "from",{
    duration: 1, 
    delay: 1,
    y: '-100%', 
    opacity: 0
  }, 1],
  ["#lm-index-6 .animation-box-2", "from",{
    duration: 1,  
    delay: 1.7,
    y: '-100%', 
    opacity: 0
  }, 1.7],
  ['#lm-index-6 .animation-box-3', "from",{
    duration: 1, 
    delay: 1.7,
    y: '100%', 
    opacity: 0
  }, 1.7],
  ['#lm-index-6 .animation-box-4', "from",{
    duration: 1, 
    delay: 1,
    y: '100%', 
    opacity: 0
  }, 1]
]);

function getNewsItems (){
  const news = document.querySelectorAll("#lm-index-8 .NewsSwiper .swiper-slide")
   news.forEach(function(element){
    return element
  })
}


const objIdx8 = new animationIdx([
  ["#lm-index-8 .lm-news__wrapper--bg img", "from",{
    duration: 1.4, 
    delay: 0,
    scale:1.1,
    opacity: 0,
    ease: Power3.easeOut,
  }, 0],

  ["#lm-index-8 .lm-news__wrapper--decs-title", "from",{
    duration: 1.4, 
    delay: 0,
    x: '-100%', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 0],
  
  ["#lm-index-8 .lm-news__wrapper--decs-infor", "from",{
    duration: 1.4, 
    delay: 0.5,
    x: '-120%', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 0.5],
  ["#lm-index-8 .NewsSwiper .ani1", "from",{
    duration: .8, 
    delay: 1.2,
    x: '120%', 
    opacity: 0
  }, 1.2],
  ["#lm-index-8 .NewsSwiper .ani2", "from",{
    duration: .8, 
    delay: 1.4,
    x: '120%', 
    opacity: 0
  }, 1.4],
  ["#lm-index-8 .NewsSwiper .ani3", "from",{
    duration: .8, 
    delay: 1.6,
    x: '120%', 
    opacity: 0
  }, 1.6],
  ["#lm-index-8 .nav-custom .nav", "from",{
    duration: 1.2, 
    delay: 1.8,
    x: '120%', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.8],
  
]);
const objIdx7 = new animationIdx([
  ["#lm-index-7 #utilities1", "from",{
    duration: 1.4, 
    delay: .5,
    y: '-120%', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .5],
  ["#lm-index-7 #utilities2", "from",{
    duration: 1.4, 
    delay: 1,
    y: '120%', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1],

  ["#lm-index-7 .lm-utilities", "from",{
    duration: 1.4, 
    delay: 0,
    scale:1.1, 
    opacity: 0,
    ease: Power3.easeOut,
  }, 0],

  
  
]);
const objFooter = new animationIdx([
  ["#lm-footer .lm-footer__bg", "from",{
    duration: 1, 
    delay: 0,
    scale:1.1, 
    opacity: 0,
    ease: Power3.easeOut,
  }, 0],
  ["#lm-footer .lm-footer__infor--logo #Path_1", "from",{
    duration: 1, 
    delay: .5,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .5],
  ["#lm-footer .lm-footer__infor--logo #Path_2", "from",{
    duration: 1, 
    delay: .6,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .6],
  ["#lm-footer .lm-footer__infor--logo #Path_3", "from",{
    duration: 1, 
    delay: .7,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .7],
  ["#lm-footer .lm-footer__infor--logo #Path_4", "from",{
    duration: 1, 
    delay: .8,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .8],
  ["#lm-footer .lm-footer__infor--logo #Path_5", "from",{
    duration: 1, 
    delay: .9,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .9],
  ["#lm-footer .lm-footer__infor--logo #Path_6", "from",{
    duration: 1, 
    delay: 1,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1],
  ["#lm-footer .lm-footer__infor--logo #Path_7", "from",{
    duration: 1, 
    delay: 1.1,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.1],
  ["#lm-footer .lm-footer__infor--logo #Path_8", "from",{
    duration: 1, 
    delay: 1.7,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.2],
  ["#lm-footer .lm-footer__infor--logo #Path_9", "from",{
    duration: 1, 
    delay: 1.3,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.3],

  ["#lm-footer .lm-footer__infor--logo #lm-name", "from",{
    duration: 1, 
    delay: .8,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .8],
  ["#lm-footer .lm-footer__infor--logo #lm-place", "from",{
    duration: 1, 
    delay: .8,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, .8],

  ["#lm-footer .lm-footer__infor--slogan", "from",{
    duration: 1, 
    delay: 1.2,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.2],
  ["#lm-footer .lm-footer__infor--contact", "from",{
    duration: 1, 
    delay: 1.3,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.3],

  ["#lm-footer .lm-footer__infor--more", "from",{
    duration: 1, 
    delay: 1.6,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.6],
  ["#lm-footer .lm-footer__infor--partner", "from",{
    duration: 1.2, 
    delay: 1.8,
    y: '220px', 
    opacity: 0,
    ease: Power3.easeOut,
  }, 1.8],
  
]);



const objIdx3 = new animationIdx([
  ['#lm-index-3 .lm-index-3__content--btn', "from", {
    duration: 1,
    y: '100%',
    opacity: 0,
  },0.6],
  [' #lm-index-3 .lm-index-3__content--desc', "from", {
    duration: 1,
    y: '100%',
    opacity: 0,
    ease: "power2.out",
  },0.6],
  ['#lm-index-3 .svg-index3-16', "from", {
    duration: 1.5,
    
    y: 320,
    opacity: 0,

  },0.6],
  ['#lm-index-3 .svg-index3-15', "from", {
    duration: 1.5,
    
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-14', "from", {
    duration: 1.5,
   
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-13', "from", {
    duration: 1.5,
    
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-12', "from", {
    duration: 1.5,
    
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-11', "from", {
    duration: 1.5,
   
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-10', "from", {
    duration: 1.5,
   
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-19', "from", {
    duration: 1,
  
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-22', "from", {
    duration: 1,
   
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-17', "from", {
    duration: 1,
   
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-20', "from", {
    duration: 1,
    
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-18', "from", {
    duration: 1,
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-23', "from", {
    duration: 1,
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-21', "from", {
    duration: 1,
    y: 320,
    opacity: 0,
  },0.6],
  ['#lm-index-3 .svg-index3-1', "from", {
    duration: 1,
    x: 400,
    opacity: 0,
  },0.4],
  ['#lm-index-3 .svg-index3-2', "from", {
    duration: 1,
    x: -400,
    opacity: 0,
  },0.3],
  ['#lm-index-3 .svg-index3-3', "from", {
    duration: 1,
    x: 400,
    opacity: 0,
  },0.3],
  ['#lm-index-3 .svg-index3-4', "from", {
    duration: 1,
    delay: 1.2,
    x: -400,
    opacity: 0,
  },0.2],
  ['#lm-index-3 .svg-index3-5', "from", {
    duration: 1,
   
    x: 400,
    opacity: 0,
  },0.2],
  ['#lm-index-3 .svg-index3-6', "from", {
    duration: 1,

    x: -400,
    opacity: 0,
  },0.1],
  ['#lm-index-3 .svg-index3-7', "from", {
    duration: 1,
    
    x: 400,
    opacity: 0,
  },0.1],
  ['#lm-index-3 .svg-index3-8', "from", {
    duration: 1,
   
    x: -400,
    opacity: 0,
  },0],
  ['#lm-index-3 .svg-index3-9', "from", {
    duration: 1,
    
    x: 400,
    opacity: 0,
  },0],
]);


const objIdx5 = new animationIdx([
  ['#index-5 .position--svg-wrapper', 'from',{
    duration: 0.3,
    opacity: 0
  }, 0]
])

export default {
  aniIdx1: objIdx1,
  aniIdx5: objIdx5,
  aniIdx3: objIdx3,
  aniIdx6: objIdx6,
  aniIdx8: objIdx8,
  aniIdx7: objIdx7,
  aniFooter: objFooter,
}