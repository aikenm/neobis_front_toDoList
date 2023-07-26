let addTask = document.querySelector('.taskInput'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.taskList'),
    businessBtn = document.querySelector('.option1'),
    personalBtn = document.querySelector('.option2')

let todoList = [];

addButton.addEventListener('click', function () {
    let newTodo = {
        todo: addTask.value,
        checked: false,
        business: false,
        personal: false
    };

    if (businessBtn.checked) {
        newTodo.business = true;
    }

    if (personalBtn.checked) {
        newTodo.personal = true;
    }


    todoList.push(newTodo);
    displayList();
});


function displayList() {
    let displayToDo = '';
    todoList.forEach(function (item, i) {
        displayToDo += `
        <li>
            <input type='radio' id='item_${i}' ${item.checked ? checked : ''}>
            <label for='item_${i}'> ${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayToDo;
    });
}