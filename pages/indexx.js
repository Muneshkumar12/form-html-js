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
        message.style.display = "block"
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }else if(Fathername.value === ""){
        message2.style.display = "block"
        setTimeout(() => {
            message2.style.display = "none"
        }, 1000);
    }else if(Email.value === ""){
        message3.style.display = "block"
        setTimeout(() => {
            message3.style.display = "none"
        }, 1000);
    }else if(Password.value === ""){
        message4.style.display = "block"
        setTimeout(() => {
            message4.style.display = "none"
        }, 1000);
    }else if(cnicnum.value === ""){
        message5.style.display = "block"
        setTimeout(() => {
            message5.style.display = "none"
        }, 1000);
    }else if(Mobile.value === ""){
        message6.style.display = "block"
        setTimeout(() => {
            message6.style.display = "none"
        }, 1000);
    }else if(Course.value === ""){
        message7.style.display = "block"
        setTimeout(() => {
            message7.style.display = "none"
        }, 1000);
    }else if(Qualification.value === ""){
        message8.style.display = "block"
        setTimeout(() => {
            message8.style.display = "none"
        }, 1000);
    }else if(Gender.value === ""){
        message9.style.display = "block"
        setTimeout(() => {
            message9.style.display = "none"
        }, 1000);
    }else{
        success.style.display = "block"
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
            success.style.display = "none"
        }, 2000);
        Name.value = ""
        Fathername.value = ""
        Email.value = ""
        Password.value = ""
        cnicnum.value = ""
        Mobile.value = ""
        Course.value = ""
        Qualification.value = ""
        Gender.value = ""
    }
}