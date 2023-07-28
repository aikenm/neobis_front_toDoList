let addTask = document.querySelector('.taskInput'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.taskList'),
    businessBtn = document.querySelector('.option1'),
    personalBtn = document.querySelector('.option2'),
    editBtn = document.querySelector('.edit-button'),
    deleteBtn = document.querySelector('.delete-button')

const editableName = document.getElementById('editableName');
const todoListElement = document.getElementById('todoList');

let todoList = [];

editableName.addEventListener('click', function () {
    this.setAttribute('contentEditable', 'true');
    this.focus();
});

editableName.addEventListener('blur', function () {
    this.setAttribute('contentEditable', 'false');
});

addButton.addEventListener('click', function () {
    const newTaskName = addTask.value.trim();
    if (newTaskName !== '') {
        const existingTaskIndex = todoList.findIndex(task => task.todo === newTaskName);
        const newTodo = {
            todo: newTaskName,
            checked: existingTaskIndex !== -1 ? todoList[existingTaskIndex].checked : false
        };
        todoList.push(newTodo);
        displayList();
        addTask.value = '';
    }
});

todo.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('delete-button')) {
        deleteTask(target);
    } else if (target.classList.contains('edit-button')) {
        event.stopPropagation();
        toggleEditTask(target);
    }
});

todoListElement.addEventListener('click', function (event) {
    const target = event.target;
    if (target.type === 'radio') {
        const taskId = target.dataset.taskId;
        todoList[taskId].checked = target.checked;
        displayList();
    }
});

function deleteTask(button) {
    const li = button.parentElement;
    const taskId = li.dataset.taskId;
    todoList.splice(taskId, 1);
    displayList();
}

function toggleEditTask(button) {
    const li = button.parentElement;
    const label = li.querySelector('label');
    const taskId = li.dataset.taskId;
    const isEditable = label.getAttribute('contentEditable') === 'true';

    if (isEditable) {
        label.setAttribute('contentEditable', 'false');
        todoList[taskId].todo = label.textContent;
        displayList();
    } else {
        label.setAttribute('contentEditable', 'true');
        label.focus();
    }
}

function updateTask(taskId, newTodoName) {
    todoList[taskId].todo = newTodoName;
}


function displayList() {
    let displayToDo = '';

    todoList.forEach(function (item, i) {
        displayToDo += `
            <li data-task-id="${i}">
                <input type='radio' id='item_${i}' data-task-id="${i}" ${item.checked ? 'checked' : ''}>
                <label for='item_${i}' style="${item.checked ? 'text-decoration: line-through;' : ''}">${item.todo}</label>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </li>
            `;
    });

    todo.innerHTML = displayToDo;
};




