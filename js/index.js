window.addEventListener('load',()=>{
const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validatInputs();
 

});
const setError =(el,msg) =>{
    const inputControl = el.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = msg;
    errorDisplay.classList.add("error");
    errorDisplay.classList.remove("success");
}

const setSucc = Element =>{
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = " ";
    errorDisplay.classList.add("success");
    errorDisplay.classList.remove("error");
}
// const izEmailvalid = email =>{
    
// }

const validatInputs = () =>{
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    if(userValue === ''){
        setError(user, "Username is Required*");
    }
    else{
        setSucc(user);
    }
    if(emailValue === ''){
        setError(email, "Email is Required*");
    }
    else{
        setSucc(email);
    }
    if(pass1Value === ''){
        setError(pass1, "Password is Required*");
    }
    else if(pass1Value.length <8){
        setError(pass1, 'Password must be at least 8 charaters.');
    }
    else{
        setSucc(pass1);
    }
    if(pass2Value === ''){
        setError(pass2, "Please confirm your password*");
    }
    else if(pass1Value !== pass1Value){
        setError(pass2, "Passwords doesn't match");
    }
    else{
        setSucc(pass2);
    }


};




});
