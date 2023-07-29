const addTask = document.querySelector('.taskInput');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.taskList');
const editableName = document.getElementById('editableName');
const todoListElement = document.getElementById('todoList');
const businessCheckbox = document.getElementById('businessRadio');
const personalCheckbox = document.getElementById('personalRadio');

let todoList = [];

// Function for making the user name editable
editableName.addEventListener('click', function () {
    this.setAttribute('contentEditable', 'true');
    this.focus();
});

// Function to disable the editable mode when the user name loses focus
editableName.addEventListener('blur', function () {
    this.setAttribute('contentEditable', 'false');
});

// Function for handling the category selection of tasks
function onCheckboxClick(selectedCategory) {
    if (selectedCategory === 'business' && personalCheckbox.checked) {
        personalCheckbox.checked = false;
    } else if (selectedCategory === 'personal' && businessCheckbox.checked) {
        businessCheckbox.checked = false;
    }
}

// Function for adding a new task
addButton.addEventListener('click', function () {
    const newTaskName = addTask.value.trim();
    if (newTaskName !== '') {
        const existingTaskIndex = todoList.findIndex(task => task.todo === newTaskName);
        const newTodo = {
            todo: newTaskName,
            checked: existingTaskIndex !== -1 ? todoList[existingTaskIndex].checked : false,
            category: businessRadio.checked ? 'business' : 'personal'
        };
        todoList.push(newTodo);
        displayList();
        addTask.value = '';

        businessRadio.checked = false;
        personalRadio.checked = false;
    }
});

// Function for handling clicks on the task list container
todo.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('delete-button')) {
        deleteTask(target);
    } else if (target.classList.contains('edit-button')) {
        event.stopPropagation();
        toggleEditTask(target);
    }
});

// Function for handling clicks on the task checkboxes
todoListElement.addEventListener('click', function (event) {
    const target = event.target;
    if (target.type === 'checkbox') {
        const taskId = target.dataset.taskId;
        todoList[taskId].checked = target.checked;
        displayList();
    }
});

// Function to delete a task from the todoList array and update the display
function deleteTask(button) {
    const li = button.parentElement;
    const taskId = li.dataset.taskId;
    todoList.splice(taskId, 1);
    displayList();
}

// Function to toggle the edit mode for a task name and update the task in the todoList array
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
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(label);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

// Function to update the name of a task in the todoList array and update the display
function updateTask(taskId, newTodoName) {
    todoList[taskId].todo = newTodoName;
    displayList();
}

// Function to display the list of tasks on the webpage
function displayList() {
    const todoListElement = document.querySelector('.taskList');
    todoListElement.innerHTML = '';

    todoList.forEach(function (item, i) {
        const categoryClass = item.category === 'business' ? 'business-border' : 'personal-border';
        const checkedAttribute = item.checked ? 'checked' : '';

        const li = document.createElement('li');
        li.dataset.taskId = i;
        li.classList.add(categoryClass);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `item_${i}`;
        checkbox.dataset.taskId = i;
        checkbox.classList.add('custom-checkbox');
        checkbox.checked = item.checked;

        const label = document.createElement('label');
        label.htmlFor = `item_${i}`;
        label.style.textDecoration = item.checked ? 'line-through' : '';
        label.textContent = item.todo;

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        todoListElement.appendChild(li);
    });
}