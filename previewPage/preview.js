const slidecon=document.querySelector(".img-wraper"),
eachslide=Array.from(document.querySelectorAll(".each-div")),
caroselcon=document.querySelector(".carosel-con"),
btnBack=document.querySelector("#btn-back")
        

let isdragging=false,
    startpos=0,
    currentindex=0,
    prevTranslate=0,
    animationId=0,
    currentTranslate=0,
     amountmove=400


    btnBack.addEventListener("click",function(){
    window.history.back()
    })


eachslide.forEach((slide,index)=>{
    slide.addEventListener("dragstart",function(ev){
          ev.preventDefault()  
        })
        //     // touch event
    slide.addEventListener("touchstart",TouchStart(index))
    slide.addEventListener("touchend",touchEnd)
    slide.addEventListener("touchmove",TouchMove)

    slide.addEventListener("mousedown",TouchStart(index))
    slide.addEventListener("mouseleave",touchEnd)
    slide.addEventListener("mouseup",touchEnd)
    slide.addEventListener("mousemove",TouchMove)
    })



    function TouchStart(index) {
    return function(event) {
        currentindex= index 
        
        startpos=getpositionX(event)
        isdragging=true

        animationId=requestAnimationFrame(animation)
       
    }
     
}



function touchEnd(params) {
    isdragging=false
    cancelAnimationFrame(animationId)
    const moveby=currentTranslate - prevTranslate

    if(moveby < -100 && currentindex < eachslide.length - 1) {
        currentindex +=1
    }

    
    if(moveby > 100 && currentindex > 0) {
        currentindex -= 1
    }
    setpositionbyindex()
    slidecon.classList.remove('grabbing')

}
function TouchMove(event) {
    if (isdragging) {
        const currentposition=getpositionX(event)
        currentTranslate=prevTranslate +currentposition - startpos
        slidecon.classList.add('grabbing')
    }
  

    
}


function getpositionX(event) {
    return  event.type.includes('mouse') ? event.pageX : event.touches[0].clientX  
}




function animation() {
   setsliderposition()
  if (isdragging) {
    requestAnimationFrame(animation)
  }   
}
   function setsliderposition() {
    slidecon.style.transform=`translateX(${currentTranslate}px)`
   } 

function setpositionbyindex() {
    currentTranslate = currentindex * -slidecon.clientWidth / 5
    console.log(currentTranslate);
    prevTranslate=currentTranslate
    setsliderposition()
}