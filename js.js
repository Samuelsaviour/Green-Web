const menuBar=document.querySelector("#menu")
const sidebar=document.querySelector("#sidebar")
const header=document.querySelector("#header")
const imageWrapper=document.querySelector("#img-wrapper")
const eachimage=imageWrapper.querySelectorAll("img")
const rightbtn=document.querySelector("#btn-right")
const leftbtn=document.querySelector("#btn-left")
const indicators=document.querySelectorAll(".indicators")
 
// initialing a count
 
let count =0;


for (let index = 0; index < indicators.length; index++) {
   indicators[index].addEventListener("click",function(params) {
    count=index
    imageWrapper.style.transform=`translateX(${count*-12.5}%)`
    document.querySelector('.active-indicator').classList.remove('active-indicator')
    indicators[index].classList.add('active-indicator')
   })
  
}
 

leftbtn.addEventListener("click",function() {
  count=count < 7 ? count + 1 :7;
  imageWrapper.style.transform=`translateX(${count*-12.5}%)`
  document.querySelector('.active-indicator').classList.remove('active-indicator')
  indicators[count].classList.add('active-indicator')
  
})
rightbtn.addEventListener("click",function() {
  count=count > 0 ? count - 1 :7;
  imageWrapper.style.transform=`translateX(${count*-12.5}%)`

  document.querySelector('.active-indicator').classList.remove('active-indicator')
  indicators[count].classList.add('active-indicator')
  
})
 
let intervalid=0
setime()
function setime(params) {
 intervalid= setInterval(() => {
    count=count < 7 ? count + 1 :0;
    imageWrapper.style.transform=`translateX(${count*-12.5}%)`

    document.querySelector('.active-indicator').classList.remove('active-indicator')
    indicators[count].classList.add('active-indicator')
  }, 5000);
}

 leftbtn.addEventListener("mouseover",function() {
  // alert('uuu')
  console.log('yyy');
  clearInterval(intervalid)
 })
 leftbtn.addEventListener("mouseout",function() {
  // alert('uuu')
  console.log('yyy');
  setime()
 })
 rightbtn.addEventListener("mouseover",function() {
  // alert('uuu')
  console.log('yyy');
  clearInterval(intervalid)
 })
  
 
 rightbtn.addEventListener("mouseout",function() {
  // alert('uuu')
  console.log('yyy');
  setime()
 })



 indicators[count].addEventListener("mouseover",function(params) {  
  clearInterval(intervalid)
 })
 indicators[count].addEventListener("mouseout",function(params) {  
  setime()
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
    
 