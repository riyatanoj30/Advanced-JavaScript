let todoList = [];
displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;    
    if (todoItem && todoDate) {
        todoList.push({ item: todoItem, dueDate: todoDate });
        inputElement.value = '';
        dateElement.value = '';
        displayItem();
    }
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    containerElement.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newHtml += `
            <div class="todo-item">
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItem();
}
