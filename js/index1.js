
    const form = document.getElementById('form');
    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');
    
    
    form.addEventListener('submit', e =>{
        e.preventDefault();
    
        validatInputs();
     
    
    });
    const setError =(el,msg) =>{
        const inputControl = el.parentElement;
        const errorDisplay = inputControl.querySelector("#errorMsg");
    
        errorDisplay.innerText = msg;
        errorDisplay.classList.add("errorMsg");
        inputControl.classList.add('error');
        inputControl.classList.remove("success");
    }
    
    const setSucc = Element =>{
        const inputControl = Element.parentElement;
        const errorDisplay = inputControl.querySelector("#errorMsg");
    
    
        errorDisplay.innerText = " ";
        inputControl.classList.add("success");
        inputControl.classList.remove('error');
        errorDisplay.classList.remove("errorMsg");
    }
    // const izEmailvalid = email =>{
        
    // }
    
    const validatInputs = () =>{
        const userValue = user.value.trim();
        const emailValue = email.value.trim();
        const commentValue = comment.value.trim();
    
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
        
        if(commentValue === ''){
            setError(comment, "comment is Required*");
        }
        else{
            setSucc(comment);
        }
        
    
    };
    
    
    
    

    