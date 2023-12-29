const email=document.querySelector("#email")
const button=document.querySelector(".instructions")

let regx =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener("input",function(e){
    if(email.value.match(regx)){
        email.style.border="2px solid green"
        button.style.visibility="visible"
    }
    else{
        email.style.border="2px solid red"
        button.style.visibility="hidden"
    }
})