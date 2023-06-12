var userName = document.getElementById("userName");
var mail = document.getElementById("mail");
var password = document.getElementById("password");
var gender = document.getElementsByName("gender");
var sport = document.getElementsByName("sport");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var userErrorMsg = document.getElementById("userErrorMsg");

var countrySelector = document.getElementById("countrySelector");

var nameRegex = /^[a-zA-Z]{2,10}$/;
var mailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
var passRegex = /^[a-zA-Z]{8,30}$/;

submitBtn.addEventListener("click",validation);

function validation(){
    
    usernameValidation();
    emailValidation();
    passValidation();
    genderValidation();
    SportValidation();
    countryValidation()
    
}

function usernameValidation(){
    if(nameRegex.test(userName.value)== false){
        userName.classList.add("inValid");
        userErrorMsg.style.display="block"
        userErrorMsg.innerHTML =" Name is requierd & only charachters"
    }else{
        userName.classList.remove("inValid");
        userErrorMsg.style.display="none"
    }
}
function emailValidation(){
    if(mailRegex.test(mail.value)== false){
        mail.classList.add("inValid");
        maileErrorMsg.style.display="block"
        maileErrorMsg.innerHTML =" Email is not valid"
    }else{
        mail.classList.remove("inValid");
        maileErrorMsg.style.display="none"
    }
}
function passValidation(){
    if(passRegex.test(password.value)== false){
        password.classList.add("inValid");
        passErrorMsg.style.display="block"
        passErrorMsg.innerHTML =" password must be 8 chars at least"
    }else{
        password.classList.remove("inValid");
        passErrorMsg.style.display="none"
    }
}
function genderValidation(){
    if(!(gender[0].checked || gender[1].checked)){
        genderErrorMsg.style.display="block"
        genderErrorMsg.innerHTML ="<li> Please select your gender</li>"
    }else{
        genderErrorMsg.style.display="none"
    }
}
function SportValidation(){
    var count = 0
    for (let i = 0; i < sport.length; i++) {
        if (sport[i].checked) {
            count++;
        }
    }
    if(count < 2){
        sportsErrorMsg.style.display="block"
        sportsErrorMsg.innerHTML ="Please select at least two sports"
    }else{
        sportsErrorMsg.style.display="none"
    }
}
function countryValidation(){
    if(countrySelector.value == ""){
        countryErrorMsg.style.display="block"
        countryErrorMsg.innerHTML =" Please select your country"
    }else{
        countryErrorMsg.style.display="none"
    }
}