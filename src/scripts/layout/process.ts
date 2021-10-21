declare var gsap : any;
declare var Parallax : any;
declare var Swiper : any;
// const Parallax = require('parallax-js')
function activeProcess (){
    const processPage = document.getElementById("brn-index-5")
    if(processPage){
        const listName = processPage.querySelectorAll("ol .items")
        listName.forEach(element => element.addEventListener('click',()=>{
            const listNameACtive = processPage.querySelector("ol .items.active")
            const listInforACtive = processPage.querySelector("ol .items-infor.active")
            element.classList.toggle("active")
            const listInfor = element.querySelector(".items-infor")
            if(element.classList.value === "items active"){
                if(listInfor){
                    listInfor.classList.add("active")
                }
                
            }
            else{
                if(listInfor){
                    listInfor.classList.remove("active")
                }
            }
            if(listNameACtive && listInforACtive){
                listNameACtive.classList.remove("active")
                listInforACtive.classList.remove("active")
            }
            
        }))
        const listNameACtive = processPage.querySelector("ol .items.active")
    }
}   
export const process = function(){
    activeProcess();
}