// https://fancyapps.com/docs/ui/fancybox
// https://www.npmjs.com/package/axios
// https://greensock.com/
// https://swiperjs.com/get-started
declare var Swiper : any;
declare var $ : any;
declare var AOS : any;
declare var gsap : any;


// declare var fullpage : any;

// new fullpage('#fullpage', {
//   autoScrolling: true
// })

// AOS.init({
//   once: true
// });

// import axios from "axios";

//////////////////////////////////////////////////////////
// Common function
import * as fetchData from "./components/fetchData";
import {pagepiling} from "./components/pagepiling";
// import {gsaplib} from "./components/gsap";
import {services} from "./layout/services";
import {project} from "./layout/project";

// Layout
import aniGsap from './components/gsap';


// Page
// import {index} from "./pages/index";

// import { interpolate } from "gsap/all";

///////////////////////////////////////////////////////////////
// function Common
function common(){
  fetchData;
  pagepiling();
  // gsaplib();
}

function layout(){

}

// function Page
function page(){
  // ----- add page in here ----- //
  services();
  // index();
  project();
}



////////////////////////////////////////////////////////////////
// common();



const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = function(elementOrSelector:any, visible:any){
  var styleVisible = <HTMLElement> (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector) : elementOrSelector);
  styleVisible.style.display = visible ? 'block' : 'none';
}
setVisible('#pagepiling', false);
setVisible('#loading-container', true);
common();
layout();
page();

document.addEventListener('DOMContentLoaded', function(){
  gsap.from('.loading-logo', {
    duration: 1.6,
    opacity: 0,
    y: 500,
  }, 0)

  wait(1400).then(function(){
    wait(600).then(() => {
      setVisible('#pagepiling', true);
      setVisible('#loading-container', false);

      var formIndexRestart = document.querySelector('.lm-home__form');
      var strFormTmp = formIndexRestart.innerHTML;

      formIndexRestart.innerHTML = "";
      formIndexRestart.innerHTML = strFormTmp;
      aniGsap.aniIdx1.restart();
    })
  });
});

// document.addEventListener("DOMContentLoaded", function(){
//   common();
// });

// $(document).ready(function(){
//   console.log('ready')
//   layout();
//   page();
// })
