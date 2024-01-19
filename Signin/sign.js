const password=document.querySelector("#password")
const passwordcon=document.querySelector(".password-con")
const showhide=document.querySelector("#show-hide")
const email=document.querySelector("#email")
const emailcon=document.querySelector(".email-con")
let errormessage=document.querySelector(".error-message")
const  form=document.querySelector("form")
const  firstName=document.querySelector("#first-name")
const namescon=document.querySelector(".f-names")
const  lastName=document.querySelector("#last-name")
const passworderror=document.querySelector(".incorrect-pass")
let errornames=document.querySelector(".incorrect-names")


console.log(form);



let regx =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	

email.addEventListener('input',function(e){
    if(!email.value.match(regx)){
      errormessage.innerText="email is not valid"
    emailcon.style.border="2px solid red"

    }
    else{
      errormessage.innerText=""
    emailcon.style.border="2px solid green"
      
    }
      
  
  })
	showhide.addEventListener("click",function(params) {
   if(password.type=="password"){
    password.type="text"
    showhide.className="fa-solid fa-eye-slash"
   }
   else{
    password.type="password"
    showhide.className="fa-solid fa-eye"

   }
})






 



 


  function seterrorforpassword(errorpass,messag){

    passworderror.innerText=messag
    passwordcon.style.border="2px solid red"
}

 



function setsuccespassword(errorpass,messag){

    passworderror.innerText=''
    passwordcon.style.border="2px solid green"
    
}

function seterrorforemail(errorinput,message){

    errormessage.innerText=message
    emailcon.style.border="2px solid red"
}

function setsucces(succesinput,message){

    errormessage.innerText=''
    emailcon.style.border="2px solid green"
}



function seterrorfornames(errorinput,message){

    errornames.innerText=message
 firstName.parentElement.style.border="2px solid red"
    
}

function setsuccesnames(errorinput,message){

  errornames.innerText=""
 firstName.parentElement.style.border="2px solid green"
}
 
	 
form.addEventListener("submit",function(e) {
    e.preventDefault()

    inputcheck()
    console.log('oooo');
})



function inputcheck() {
    const emailtrim=email.value.trim()
    const firstNametrim=firstName.value.trim()
    const lastnametrim=lastName.value.trim()
    const passwordtrim=password.value.trim()
  
  
  
    if (emailtrim==='') {
      // show error message
      seterrorforemail(email,'email can not be blank')
    }

     


    else{
      // show succes
      setsucces(email)
    }
     



    if (passwordtrim==="") {
      seterrorforpassword(password,'password can not be blank')
        
    }
    else{
      setsuccespassword(password)

    }
     
   

    if (firstNametrim==='') {
      // show error message
      seterrorfornames(firstName,'names can not be blank')
    }
      else{
      setsuccesnames(firstName)

    }


    if (lastnametrim==='') {
      // show error message
     lastName.parentElement.style.border="2px solid red"
    
    }
      else{
        lastName.parentElement.style.border="2px solid green"

    }

  }