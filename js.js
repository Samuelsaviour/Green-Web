const menuBar=document.querySelector("#menu")
const sidebar=document.querySelector("#sidebar")
const header=document.querySelector("#header")

// when click let the sidebar slide in
menuBar.addEventListener("click",function() {
    sidebar.classList.toggle("slide-in")
})

 window.addEventListener("scroll" ,scrollfunction);

    function scrollfunction(){
      if(window.scrollY > 200){
        header.classList.add("addColor")
   }
     else{
          header.classList.remove("addColor")
        
   }
}



// var backTotop =document.querySelector('.backTotop');
//     backTotop.addEventListener('click', function(){
//         window.scrollTo(1,0)

//     })
    
 