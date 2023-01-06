    window.addEventListener('load',()=>{
        const form =document.querySelector("#new-task-form");
        const input =document.querySelector("#new-task-input");
        const list_el =document.querySelector("#tasks");
        // console.log(form);
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // console.log("submit form")

            const task = input.value;

            // if(!task){
            //     alert("please fill the required");
            //     return;
            // }

                const task_el = document.createElement("div");
                task_el.classList.add("task");
                // console.log("m fuck urabikoze");
                
                const content_el = document.createElement("div");
                content_el.classList.add("content");
                // content_el.innerText = task;

                task_el.appendChild(content_el);

                const input_el = document.createElement("input");
                input_el.classList.add("text");
                input_el.type = "text";
                input_el.value = task;
                input_el.setAttribute("readonly","readonly");

                content_el.appendChild(input_el);

                const action_el = document.createElement("div");
                action_el.classList.add("action");

                const edit_el = document.createElement("button")
                edit_el.classList.add("edit");
                edit_el.innerText = "Edit";

                const delte_el = document.createElement("button")
                delte_el.classList.add("Delete");
                delte_el.innerText = "Delete";


                action_el.appendChild(edit_el);
                action_el.appendChild(delte_el);

                task_el.appendChild(action_el);
                list_el.appendChild(task_el);

                // input.value = alert("fill form");

                edit_el.addEventListener('click', ()=>{
                    if(edit_el.innerText.toLowerCase() === "edit"){
                    input_el.removeAttribute("readonly");
                    input_el.focus();
                    edit_el.innerText = "Save";
                    } 
                    else{
                        // console.log("Save");
                        input_el.setAttribute("readonly","readonly");
                        edit_el.innerHTML = "Edit";
                    }
                });

                delte_el.addEventListener('click', ()=>{
                    list_el.removeChild(task_el);

                });

                // hh
            

        });
    })