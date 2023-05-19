document.getElementById("myform").addEventListener('submit',function(event) {



    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    if (fName.length === 0) {
        alert("Please enter your first name");
        document.getElementById("fname").focus();
        event.preventDefault();
       // return false;
    }


    if (lName.length === 0) {
        alert("Please enter your last name");
        document.getElementById("lname").focus();
        event.preventDefault();
        return false;
    }

    var addressIsLegal = true;
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
        addressIsLegal = false;
    }
    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
        eEntered.indexOf(".") > eEntered.length - 3) {
        addressIsLegal = false;
    }
    if (addressIsLegal === false) {
        alert("Please correct email address");
        event.preventDefault();
    }
    let p1=document.getElementById("password1").value;
    let p2=document.getElementById("password2").value;
    if(p1.length<5){
       alert("please enter at least 6 digit password");
       event.preventDefault();
    }
    if(p1!==p2){
        alert("passwords does not match");
        event.preventDefault();
    }

});


