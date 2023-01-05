window.addEventListener('load', () =>{
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const InputName = document.querySelector("#name");
    const ToDoForm = document.querySelector("#new-todo-form");

    const userName = localStorage.getItem('userName') || '';

    InputName.value = userName;

    InputName.addEventListener('change', e =>{
        localStorage.setItem('userName', e.target.value);
    })

    ToDoForm.addEventListener('submit', e =>{
        e.preventDefault();

        const todo ={
            content: e.elements.content.target.value,
            category: e.elements.category.target.value,
            done: false,
        }

        tasks.push(todo);

        localStorage.setItem('tasks',JSON.stringify(tasks))
        e.target.reset();

        DisplayTodos();
        
    });

    DisplayTodos();
});

const DisplayTodos = () =>{
    const TodoList = document.querySelector("#todo-list");

    TodoList.innerHTML ="GOD'S Plan";

    tasks.forEach(todo => {
        const ToDoItem = document.createElement("div");
        ToDoItem.classList.add('todo-item');

        const label = document.createElement("div");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const TodoContent = document.createElement("div");
        const action = document.createElement("div");
        const EditEl = document.createElement("button");
        const DeleTeEl = document.createElement("button");

    })
}
