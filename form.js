function validateform(){
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementById("email").value;
    const pwd=document.getElementById("pwd").value;
    const phno=document.getElementById("phnumber").value;

    const nameError=document.getElementById("name-error");
    const addError=document.getElementById("address-error");
    const emailError=document.getElementById("email-error");
    const pwdError=document.getElementById("pwd-error");
    const phnoerror=document.getElementById("phno-error");

    nameError.textContent="";
    addError.textContent="";
    emailError.textContent="";
    pwdError.textContent="";
    phnoerror.textContent=";"

    if(name==""){
        nameError.textContent=" *please enter a name properly";
        return false;
    }

    if(address==""){
        addError.textContent=" *please enter a address properly";
        return false;
    }
    if(phno=="" || !/^\d{10}$/.test(phno))
    {
        phnoerror.textContent="please enter a valid  10 digit mobile number";
        return false;
    }
    
    if(email=="" || !email.includes("@"))
    {
        emailError.textContent=" *please enter a valid email address";
        return false;
    }

    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    if (!pwdPattern.test(pwd)) {
    pwdError.textContent = " *please enter a password must be contains 6 digits with one uppercase,one lowercase,one number and one special character.";
    return false;
    }

    return true;

}