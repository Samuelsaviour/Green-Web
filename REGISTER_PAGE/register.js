const  firstName=document.querySelector("#first-name")
const  lastName=document.querySelector("#last-name")
const  form=document.querySelector("form")
let errormessage=document.querySelector(".incorrect-txt")
let errornames=document.querySelector(".incorrect-names")
const email=document.querySelector("#email1")
const password=document.querySelector("#password-one")
const passworderror=document.querySelector(".incorrect-pass")
const passwordcon=document.querySelector(".password-indicator-con")
const showhide=document.querySelector("#show-hide")
const registerbtn=document.querySelector(".register-btn")
const sliderope=document.querySelector(".slide-rope")
const password2=document.querySelector("#password2")
const error_e=document.querySelector("#error-e")
const error_p=document.querySelector("#error-p")


 
let regx =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



showhide.addEventListener("click",function(params) {
   if(password.type=="password"){
    password.type="text"
   }
   else{
    password.type="password"
   }
})



// registerbtn.addEventListener("click",function(){
//     sliderope.classList.add("itranslate")
// })

email.addEventListener('input',function(e){
  if(!e.value.match(regx)){
    errormessage.innerText="email is not valid"
  }
  else{
    errormessage.innerText=""
    
  }
    

})




// email2.addEventListener('input',function(e){
//   if(!e.value.match(regx)){
//     error_e.style.display='flex'
//   }
//   else{
//     error_e.style.display='none'
   
    
//   }
    

// })
function inputvalid() {
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
      lastName.style.border="2px solid red"
    }
      else{
        lastName.style.border="2px solid green"

    }

  }


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
    email.style.border="2px solid red"
}

function setsucces(succesinput,message){

    errormessage.innerText=''
    email.style.border="2px solid green"
}



function seterrorfornames(errorinput,message){

    errornames.innerText=message
    firstName.style.border="2px solid red"
}

function setsuccesnames(errorinput,message){

  errornames.innerText=""
  firstName.style.border="2px solid green"
}






 

form.addEventListener("submit",function(e) {
    e.preventDefault()

    inputvalid()
})

function isemail(email) {
    
}
 

// validation of form

// 9j

