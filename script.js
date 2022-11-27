function check_form(){

let inputs = document.getElementsByClassName('required');
let len = inputs.length;
let valid = true;
  
    for(var i=0; i < len; i++){
       if (!inputs[i].value){ valid = false; }
    }
  
    if (!valid){
        alert('Por favor preencha todos os campos!');
        return false;
    } 
  
    else {
        return true; 
    }
}
  
function ValidEmail(inputEmail) {
  
let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  
    if (inputEmail.value.match(mailFormat)) {
  
       alert("E-mail válido!");
       return true;
    }
    
    else {
       alert("E-mail inválido!");
       return false;
    }

}