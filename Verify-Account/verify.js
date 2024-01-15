const otp=document.querySelectorAll(".otp-wraper input")
const timming=document.querySelector(".timming")
const instructbtn=document.querySelector(".instructions")
console.log(timming)
 
let count=60
 
tim()
function tim(argument) {
   setInterval((val)=>{
     timming.innerText= "00:" + count
     count--
   },1000)

 if(count == 0) {
    clearInterval(val)
    count=60
}
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
        otp.forEach((e,index1)=>{count
         if (index<=index1 && prevalue) {
            e.setAttribute("disabled", true)
            prevalue.focus()
             prevalue.value=""
         }
        })
     }
     if (!otp[3].disabled && otp[3].value!="") {
      instructbtn.classList.add("activate")
      return
     }
      instructbtn.classList.remove("activate")
       
   
	})
    
      event.addEventListener("paste",function(e){
   e.preventDefault()
   const text=e.clipboardData.getData("text")
   console.log(text)
    otp.forEach((item2,indi)=>{
      if(indi >= index && text[indi - index]){
         // item2.removeAttribute("disabled")
         item2.value=text[index ]
         // item2.nextElementSibling.focus()
          

      }
    })
  }) 
})



// otp.forEach((item,currentindex)=>{
 
// })