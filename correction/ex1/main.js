function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskString = taskInput.value;

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'supprimer';
    button.addEventListener('click', removeTask);
    li.innerHTML = taskString;
    li.appendChild(button);
    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);

}
