let todoList = [];
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoListElement = document.getElementById('todo-list');
let alertMessageElement = document.getElementById('alert-message');

addBtn.addEventListener('click', addTodoItem);

function addTodoItem() {
    let todoItem = todoInput.value.trim();
    if (todoItem) {
        todoList.push({ item: todoItem, completed: false });
        todoInput.value = '';
        renderTodoList();
        setAlertMessage('Todo item added successfully!');
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todoItem, index) => {
        let todoElement = document.createElement('li');
        todoElement.textContent = todoItem.item;
        if (todoItem.completed) {
            todoElement.classList.add('completed');
        }
        todoElement.addEventListener('dblclick', () => {
            todoItem.completed =!todoItem.completed;
            renderTodoList();
        });
        todoElement.addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete ${todoItem.item}?`)) {
                todoList.splice(index, 1);
                renderTodoList();
                setAlertMessage('Todo item deleted successfully!');
            }
        });
        todoListElement.appendChild(todoElement);
    });
}

function setAlertMessage(message) {
    alertMessageElement.textContent = message;
    setTimeout(() => {
        alertMessageElement.textContent = '';
    }, 2000);
}

renderTodoList();