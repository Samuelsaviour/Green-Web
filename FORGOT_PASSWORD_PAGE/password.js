const email=document.querySelector("#email")
const button=document.querySelector(".instructions")

let regx =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener("input",function(e){
    if(email.value.match(regx)){
        email.style.border="2px solid green"
        button.style.backgroundColor="#00853C"
        button.style.Color=" #fff"
    }
    else{
        email.style.border="2px solid red"
        button.style.backgroundColor="#bfe7d0ed"
        button.style.Color=" #cff6e0cb"
        
    }
})