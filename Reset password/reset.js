const otpcon=document.querySelector("#wrapper-one")
const otpcon2=document.querySelector("#wrapper2")
const otp=otpcon.querySelectorAll("input")
const otp2=otpcon2.querySelectorAll("input")
const instructbtn=document.querySelector(".instructions")

// console.log(otpcon,otp)

window.onload=()=>{
	otp[0].removeAttribute("disabled")
	otp[0].classList.add("border")
	otp[0].focus()
	// otp2[0].removeAttribute("disabled")
	// otp2[0].classList.add("border")
	// otp2[0].focus()
}

const pressed=(e)=>{
	const targeted=e.target
	const nextElement=e.target.nextElementSibling
	const prevElement=e.target.previousElementSibling
	// console.log(targeted,nextElement,prevElement)

	if (nextElement && targeted.value!="") {
	    nextElement.removeAttribute("disabled",true);
		nextElement.focus();
		targeted.classList.remove("border")
		nextElement.classList.add("border")
	}


	backspacedeal(e,prevElement,targeted,nextElement)
}



const backspacedeal=(e,prev,currentclass,next)=>{
	if (e.key=="Backspace") {
     prev.value=""
     prev.focus()
	 currentclass.classList.remove("border")
	 prev.classList.add("border")
	 // next.setAttribute("disabled",true)

	}
}

otp.forEach((eachotp,i)=>{
	eachotp.addEventListener("keyup",pressed)
	if (otp[3].value!="") {
	 // otp2[0].removeAttribute("disabled",true)
	 // otp2[0].classList.add("border")
	 // otp2[0].focus()
	 return
      instructbtn.classList.add("activate")
	 
	}
      instructbtn.classList.remove("activate")

})
 
// const confirmotp=()=>{
// 	if (otp[3].value!="") {
// 	 // otp2[0].removeAttribute("disabled",true)
// 	 // otp2[0].classList.add("border")
// 	 // otp2[0].focus()
// 	 return
// 	 console.log("ttrr")

// 	}
// }

// confirmotp()
 
