function addtodo() {

    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();


    if(todoText !== "") {

       const todolist = document.getElementById("todos");

       const newTodos = document.createElement("li");

    //    onclick("todo-button");

        newTodos.textContent = todoText;

        todolist.appendChild(newTodos);

        todoInput.value = "" ; 


    }


}