window.addEventListener('load',()=> {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    // console.log(todos);

    const nameInput = document.querySelector("#name");
    const newFormToDo = document.querySelector("#new-todo-form");

    const userName = localStorage.getItem('userName') || '';

    nameInput.value = userName;

    // const msg = newFormToDo.value;

    nameInput.addEventListener('change', (e) =>{
        // localStorage.getItem('userName', e.target.value);
        localStorage.setItem('userName', e.target.value);

    });
    newFormToDo.addEventListener('submit', e=>{
        e.preventDefault();

    //   const msg =

            const todo = {
                content: e.target.elements.content.value,
                category: e.target.elements.category.value,
                done: false,
                createdAt: new Date().getTime()
            }

            todos.push(todo);

            localStorage.setItem('todos', JSON.stringify(todos)); 

            e.target.reset();

        Displaytodos();
        
        
    });
    
    Displaytodos();
});
const Displaytodos = () =>{
    const todolist = document.querySelector("#todo-list");

    // todolist.innerText ='M---- Fuck Wigize ibiki?';

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add('todo-item');

        const label = document.createElement("label");
        const input = document.createElement("input");
        const todoContent = document.createElement("div");
        const actions = document.createElement("div");
        const editBtn = document.createElement("button");
        const DeleteBtn = document.createElement("button");
        const span = document.createElement("span");


        
        input.type ='checkbox';
        // input.checked = todo.done;
        input.checked = todo.done;

        span.classList.add("bubble");
            if(todo.category === 'business'){
                span.classList.add("bubble");
            }
            else{
                span.classList.add("personal");
                
            }

        todoContent.classList.add("todo-content");
        actions.classList.add("actions");
        editBtn.classList.add("edit");
        DeleteBtn.classList.add("Delete");

        todoContent.innerHTML =`<input type="text" value="${todo.content}" readonly>`;
        editBtn.innerText ='Edit';
        DeleteBtn.innerText ="Delete";

        label.appendChild(input);
        label.appendChild(span);

        actions.appendChild(editBtn);
        actions.appendChild(DeleteBtn);

        todoItem.appendChild(label);
        todoItem.appendChild(todoContent);
        todoItem.appendChild(actions);

        todolist.appendChild(todoItem);
        // Displaytodos();
            
        if(todo.done){
            todoItem.classList.add('done');
            // alert("equal");
        }
        input.addEventListener('click', e =>{
                todo.done = e.target.checked;
                localStorage.setItem('todos', JSON.stringify(todos));

                if(todo.done){
                    todoItem.classList.add('done');
                }
                else{
                    todoItem.classList.remove('done');
                }
                Displaytodos();

        })
        editBtn.addEventListener('click', e =>{
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e =>{
                input.setAttribute('readonly',true);
                todo.content =e.target.value;
                localStorage.setItem('todos',JSON.stringify(todos));
                Displaytodos();
            })

        })

        DeleteBtn.addEventListener('click', e =>{
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos',JSON.stringify(todos));
            Displaytodos();
        })
    
        
    })

    

}
// alert('mFuckyu didi it');