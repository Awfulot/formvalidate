


function changeColor(){
    document.getElementById("bodyColor").style.color = "red";
}

function validatePass() {
    var pass = document.getElementById("userPass");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
 
    //Check Password Length and change color accordingly
    if(pass.value.length <= 8) {
        document.getElementById("length").style.color ="red";
        
        
        }
    else {
        document.getElementById("length").style.color = "green";
    }
    //Check if lowercase letters are present and change color accordingly
    if(pass.value.match(lowerCaseLetters)) {
        document.getElementById("lowerCaseLetter").style.color = "green";
        
    }
    else {
        document.getElementById("lowerCaseLetter").style.color = "red";
    }
    //Check if uppercase letters are present and change color accordingly
    if(pass.value.match(upperCaseLetters)) {
        document.getElementById("capital").style.color = "green";
        
    }
    else {
        document.getElementById("capital").style.color = "red";
    }
    //Check if numbers are present and change color accordingly
    if(pass.value.match(numbers)) {
        document.getElementById("numberAmount").style.color = "green";
    }
    else {
        document.getElementById("numberAmount").style.color = "red";
    }

   
}