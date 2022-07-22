var hasLowercase = false;
var hasUppercase = false;
var hasNumber = false;
var hasMinCharacters = false;
var hasEmail = false;


function changeColor(){
    document.getElementById("bodyColor").style.color = "red";
}

function validatePass() {
    var pass = document.getElementById("userPass");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
 
    //Check Password Length and change color accordingly
    //For some reason <=8 doesn't work here, it needs to be 7 to have a minimum of 8
    if(pass.value.length <= 7) {
        document.getElementById("length").style.color ="red";
        hasMinCharacters = false;
        
        }
    else {
        document.getElementById("length").style.color = "green";
        hasMinCharacters = true;
    }
    //Check if lowercase letters are present and change color accordingly
    if(pass.value.match(lowerCaseLetters)) {
        document.getElementById("lowerCaseLetter").style.color = "green";
        hasLowercase = true;
        
    }
    else {
        document.getElementById("lowerCaseLetter").style.color = "red";
        hasLowercase = false;
    }
    //Check if uppercase letters are present and change color accordingly
    if(pass.value.match(upperCaseLetters)) {
        document.getElementById("capital").style.color = "green";
        hasUppercase = true;
        
    }
    else {
        document.getElementById("capital").style.color = "red";
        hasUppercase = false;
    }
    //Check if numbers are present and change color accordingly
    if(pass.value.match(numbers)) {
        document.getElementById("numberAmount").style.color = "green";
        hasNumber = true;
    }
    else {
        document.getElementById("numberAmount").style.color = "red";
        hasNumber = false;
    }

   
}
function emailValidate() {
    var email = document.getElementById("userEmail");
    var atCharacter = /[@]/g;
    var dotCharacter = /[.]/g;
    var emailSymbols = /\S+@\S+\.\S+/g;

    if(email.value.match(emailSymbols)) {
        document.getElementById("emailCheck").style.color = "green";

    }
    else {
        document.getElementById("emailCheck").style.color = "red";
    }
}



function validationStatus() {
    if(hasNumber && hasUppercase && hasLowercase && hasMinCharacters && hasEmail){
        document.getElementById("validateCheck").innerHTML = "SUCCESS";
        hasEmail = true;
    }
    else {
        document.getElementById("validateCheck").innerHTML = "FAILURE";
        hasEmail = false;
    }
}