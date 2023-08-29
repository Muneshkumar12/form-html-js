   var Name = document.getElementById("name");
   var Fathername = document.getElementById("fatherName");
   var Email = document.getElementById("email");
   var Password = document.getElementById("password");
   var cnicnum = document.getElementById("cnic");
   var Mobile =  document.getElementById("mobile");
   var Course = document.getElementById("course");
   var Qualification = document.getElementById("qualification");
   var Gender = document.getElementById("gender");
function submitData(){
    if(Name.value === ""){
        message.style.display = "block";
        message.innerHTML = "please enter your name";
        message.style.color = "red";
        Name.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else if(Fathername.value === ""){
        message.style.display = "block";
        message.innerHTML = "Please enter your father's name";
        message.style.color = "red";
        Fathername.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Email.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please enter your email address";
        message.style.color = "red";
        Email.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Password.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please enter your password";
        message.style.color = "red";
        Password.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(cnicnum.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please enter your CNIC Number";
        message.style.color = "red";
        cnicnum.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(cnicnum.value.length !== 14){
        message.style.display = "block";
        message.innerHTML = "please enter valid CNIC number"
        message.style.color = "red";
        cnicnum.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    } else if(Mobile.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please enter your Mobile number";
        message.style.color = "red";
        Mobile.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Mobile.value.length !== 11){
        message.style.display = "block";
        message.innerHTML = "please enter valid phone number"
        message.style.color = "red";
        Mobile.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }  else if(Course.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please select your course";
        message.style.color = "red";
        Course.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Qualification.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please select your Qualification";
        message.style.color = "red";
        Qualification.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Gender.value === ""){
        message.style.display = "block"
        message.innerHTML = "Please Select Your Gender";
        message.style.color = "red";
        Gender.focus();
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else{
        message.style.display = "block";
        message.innerHTML = "Your form has been submit successfuly";
        message.style.color = "green";
        console.log("Name)" , Name.value)
        console.log("Father's name)" , Fathername.value)
        console.log("Email)" , Email.value)
        console.log("Passowrd)" , Password.value)
        console.log("CNIC Number)" , cnicnum.value)
        console.log("Mobile Numbe)r" , Mobile.value)
        console.log("Course)" , Course.value)
        console.log("Qualification)" , Qualification.value)
        console.log("Gender)" , Gender.value)
        setTimeout(() => {
           message.style.display = "none";
           Name.value = ""
           Fathername.value = ""
           Email.value = ""
           Password.value = ""
           cnicnum.value = ""
           Mobile.value = ""
           Course.value = ""
           Qualification.value = ""
           Gender.value = ""
        }, 2000);
    }
}