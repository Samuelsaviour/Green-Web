const email2=document.querySelector("#email2")


email2.addEventListener('input',function(e){
  if(!e.value.match(regx)){
    error_e.style.display='flex'
  }
  else{
    error_e.style.display='none'
   
    
  }
    

})