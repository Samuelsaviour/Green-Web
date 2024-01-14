const otp=document.querySelectorAll(".otp-wraper input")
const timming=document.querySelector(".timming")
const instructbtn=document.querySelector(".instructions")
console.log(timming)
tim()
let count=60
function tim(argument) {
   setInterval((e)=>{
     timming.innerText= "00:" + count
     count--
   },1000)



}

otp.forEach((event,index)=>{
	event.addEventListener("keyup",function(e){
     let current=event
     let nextinput=event.nextElementSibling
     let prevalue=event.previousElementSibling
   
  
     if (nextinput && nextinput.hasAttribute("disabled") && current.value!==" ") {
        nextinput.removeAttribute("disabled",true)
        nextinput.focus()
        // nextinput.style.border="2px solid green"

     }
     if(e.key =="Backspace") {
        otp.forEach((e,index1)=>{
         if (index<=index1 && prevalue) {
            e.setAttribute("disabled", true)
            prevalue.focus()
             prevalue.value=""
         }
        })
     }
     if (!otp[5].disabled && otp[5].value!="") {
      instructbtn.classList.add("activate")
      return
     }
      instructbtn.classList.remove("activate")
       
   
	})
     
})