const menuBar=document.querySelector("#menu")
const sidebar=document.querySelector("#sidebar")
const header=document.querySelector("#header")
const imageWrapper=document.querySelector("#img-wrapper")
const rightbtn=document.querySelector("#btn-right")
const leftbtn=document.querySelector("#btn-left")
console.log(imageWrapper);
// initialing a count
let count =0;
leftbtn.addEventListener("click",function() {
  count=count < 4 ? count + 1 :4;
  imageWrapper.style.transform=`translateX(${count*-300}px)`
  console.log(count);
})
rightbtn.addEventListener("click",function() {
  count=count > 3 ? count - 1 :0;
  imageWrapper.style.transform=`translateX(${count*-300}px)`
  console.log(count);
})
// when click let the sidebar slide in
menuBar.addEventListener("click",function() {
    sidebar.classList.toggle("slide-in")
})


// when page scroll let navbar change color
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
    
 