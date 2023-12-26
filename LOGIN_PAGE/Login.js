const  firstName=document.querySelector("#first-name")
const  lastName=document.querySelector("#last-name")
const  form=document.querySelector("form")
let errormessage=document.querySelector(".incorrect-txt")
const email=document.querySelector("#email1")
const password=document.querySelector("#password-one")
const passworderror=document.querySelector(".incorrect-pass")
const showhide=document.querySelector("#show-hide")


// let regx=/^('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


showhide.addEventListener("click",function(params) {
   if(password.type=="password"){
    password.type="text"
   }
   else{
    password.type="password"
   }
})


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

  }


  function seterrorforpassword(errorpass,messag){

    passworderror.innerText=messag
    password.classList.add("customise")
}

function setsuccespassword(errorpass,messag){

    passworderror.innerText=''
    password.classList.remove("customise")
}

function seterrorforemail(errorinput,message){

    errormessage.innerText=message
    email.classList.add("customise")
}

function setsucces(succesinput,message){

    errormessage.innerText=''
    email.classList.remove("customise")
}

form.addEventListener("submit",function(e) {
    e.preventDefault()

    inputvalid()
})

// function isemail(email) {
//     return regx.test(String(email).toLowerCase())
// }
 

// validation of form

// 9j

