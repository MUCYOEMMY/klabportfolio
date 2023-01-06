
    const form = document.getElementById('form');
    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');
    
    let popup = document.getElementById("popup");
    function openPopup(){
        popup.classList.add("open-popup"); 
        console.log("open")
    }
    function closePopup(){
        popup.classList.remove("open-popup"); 
    }
    
    form.addEventListener('submit', async e =>{
        e.preventDefault();
    
        const valid = validatInputs();
        if (valid) {
            Swal.fire({
                title: 'Thank You',
                icon: 'success',
                text: 'Your data was submitted',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        } 
    
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
        let validated;
        let nameValid = false;
        let emailValid = false;
        let commentValid = false;
        const userValue = user.value.trim();
        const emailValue = email.value.trim();
        const commentValue = comment.value.trim();
    
        if(userValue === ''){
            setError(user, "Username is Required*");
        }
        else{
            setSucc(user);
            nameValid = true
        }
        if(emailValue === ''){
            setError(email, "Email is Required*");
        }
        else{
            setSucc(email);
            emailValid = true
        }
        
        if(commentValue === ''){
            setError(comment, "comment is Required*");
        }
        else{
            setSucc(comment);
            commentValid = true
        }

        nameValid && emailValid && commentValid ? validated = true : validated = false
        return validated;
    };

    

  
    
    
    

    