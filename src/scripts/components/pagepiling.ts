declare var $ : any;
declare var gsap : any;

import aniGsap from './gsap';

const timeDelayLoadPage = 400;

function sleep(milliseconds:number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function createPagepiling(){
  $('#pagepiling').pagepiling({
    scrollingSpeed: 600,
    css3: true,
    navigation: {
      'position': 'left',
      'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
    },
    afterRender: function() {
      $('#pp-nav').addClass('custom');
    },
    afterLoad: function(anchorLink:any, index:any){
      console.log(index)
      if (index > 1) {
        $('#pp-nav').removeClass('custom');
      } else {
        $('#pp-nav').addClass('custom');
      }

      if (index === 1){
        aniGsap.aniIdx3.reverse();
        aniGsap.aniIdx6.reverse();
        aniGsap.aniIdx5.reverse();

        setTimeout(function(){
          var formIndexRestart = document.querySelector('.lm-home__form');
          var strFormTmp = formIndexRestart.innerHTML;
  
          formIndexRestart.innerHTML = "";
          formIndexRestart.innerHTML = strFormTmp;
          
          aniGsap.aniIdx1.restart();
          
        }, timeDelayLoadPage);
      }
      else if (index === 2){
        aniGsap.aniIdx1.reverse();
        aniGsap.aniIdx5.reverse();
        aniGsap.aniIdx6.reverse();
        
        setTimeout(function(){
          aniGsap.aniIdx3.restart();
        }, timeDelayLoadPage);
        // setTimeout(function(){
        //   aniGsap.aniIdx8.restart();
        // }, timeDelayLoadPage);
      }
      else if (index === 3){
        aniGsap.aniIdx1.reverse();
        aniGsap.aniIdx6.reverse();
        aniGsap.aniIdx7.restart();
        aniGsap.aniIdx8.reverse();
      }
      else if (index === 4){
        aniGsap.aniIdx8.restart();

        setTimeout(function(){
          var posIndexRestart = document.querySelector('#index-5 .position--svg-wrapper');
          var strFormTmp = posIndexRestart.innerHTML;
  
          posIndexRestart.innerHTML = "";
          posIndexRestart.innerHTML = strFormTmp;
          
          aniGsap.aniIdx5.restart();
        })
      }
      else if (index === 4){
        aniGsap.aniIdx1.reverse();
        aniGsap.aniIdx3.reverse();
        aniGsap.aniIdx5.reverse();
        setTimeout(function(){
          aniGsap.aniIdx6.restart();
        }, timeDelayLoadPage);
      }
      // else if (index === 4){
      //   aniGsap.aniIdx1.reverse();
      //   aniGsap.aniIdx5.reverse();
      //   aniGsap.aniIdx6.reverse();
      //   aniGsap.aniIdx3.reverse();
      //   setTimeout(function(){
      //     aniGsap.aniIdx6.restart();
      //   }, timeDelayLoadPage);
      // }

      else if (index === 5){
        aniGsap.aniFooter.restart();
      }
    }
  });
}


export const pagepiling = function(){
  createPagepiling();

  // aniGsap.aniIdx1.play();
}