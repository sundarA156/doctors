//count number method
let valueDispalys = document.querySelectorAll(".num");
let interval = 10000;

valueDispalys.forEach((valueDispalys) => {
    let StartValue = 0;
    let Endvalue = parseInt(valueDispalys.getAttribute
        ("data-val"));
        let duration = Math.floor(interval / Endvalue);
        let counter = setInterval(function ()  {
            StartValue += 1;
            valueDispalys.textContent = StartValue;
            if (StartValue == Endvalue) {
                clearInterval(counter);
            }
        }, duration);
});

// form

//form
const form = document.getElementById('form')
// first name

let first = document.getElementById('first')
let nameError1 = document.getElementById('error1')

    function fname(){
        if(first.value===''){
            nameError1.innerHTML="firstname can't empty"
            nameError1.style.color="red"
            first.style.border="2px solid red"
        }
        else if(first.value.length<8){
            nameError1.innerHTML="letter in 8 values"
            nameError1.style.color="red"
            first.style.border="2px solid red"
        }
        else{
            nameError1.innerHTML="" 
            first.style.border="2px solid green"
        }
    }

    //second name

 let second = document.getElementById('second') 
 let nameError2 = document.getElementById('error2')
  
      function lname(){
        if(second.value===''){
            nameError2.innerHTML="secondname can't empty"
            nameError2.style.color="red"
            second.style.border="2px solid red"
        }
        else if(second.value.length<8){
            nameError2.innerHTML="letter in 8 values"
            nameError2.style.color="red"
            second.style.border="2px solid red"
        }
        else{
            nameError2.innerHTML="" 
            second.style.border="2px solid green"
        }
      }

    //Email
    let mail = document.getElementById("mail");
let mailError = document.getElementById("error3");

function val_email() {
    if (mail.value === "") {
        mailError.innerHTML = "Email is required"
        mailError.style.color = "red";
        mail.style.border = "2px solid red";
        return false;
    }
    else if (!mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailError.innerHTML = "Enter a valid email";
        mailError.style.color = "red";
        mail.style.border = "2px solid red";
        return false;

    }
    else {
        mailError.innerHTML = "";
        mail.style.border = "2px solid green";
        return true;
    }
}

//password 
  let passwor = document.getElementById('passwd')
  let passworderror = document.getElementById("error4")

  function password(){
    if(passwor.value === "") {
        passworderror.innerHTML = "8 character to login"
        passworderror.style.color = "red";
        passwor.style.border = "2px solid red";
        return false;
    }
    else if(passwor.value.length<8){
        passworderror.innerHTML="8 character conform"
        passworderror.style.color="red"
        passwor.style.border="2px solid red"
    }

    else{
        passworderror.innerHTML="" 
        passwor.style.border="2px solid green"
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
              otutput();
  });

    function otutput(){
        firstName = first.value.trim();
        second = second.value.trim();
        mail = mail.value.trim();
        passwor = passwor.value.trim();



        document.write("Name: " + firstName + " " + second + "<br>");
        document.write("mail: " + mail + "<br>");
        document.write("password :"+passwor+"<br>")

    }