

function requeteServer(chemin /* commence par un / */, methode /*'GET', 'POST', 'PUT', 'DELETE'*/, contenu /* objet js */)
{
    const BASE_URL = 'http://localhost:5000';
    const url = BASE_URL + chemin;
    const options = {
        method: methode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(contenu)
    };
    return fetch(url, options)
    .then(response => response.json())
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskString = taskInput.value;
    const todoObject = {
        value: taskString
    }
    requeteServer('/todos', 'POST', todoObject)
    .then(AddTaskList);
    
}

function AddTaskList() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    //recupere la liste des todos
    const todoList = requeteServer('/todos', 'GET');
    //.then() permet d'executer une fonction quand la requete est terminée et qu'on a recu la réponse
    todoList.then(todos /* todos représente un array de string representant chaque tasks */ => {
        console.log(todos); //affiche la liste des todos dans la console (appuyer sur F12 pour ouvrir la console)
        //boucler sur chaque todo
        //pour chaque todo:
            //créer un élément de liste (li)
            //ajouter le contenu de l'input dans le li
            //ajouter un bouton supprimer
            //ajouter le li dans la liste
        todos.forEach(element => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = 'supprimer';
            button.addEventListener('click', removeTask);
            const span = document.createElement('span');
            span.innerHTML = element;
            li.appendChild(span);
            li.appendChild(button);
            taskList.appendChild(li);
        });
    });
}

function removeTask(button) {
    const li = button.target.parentNode;
    const ul = li.parentNode;
    const todoString = li.querySelector('span').innerHTML;
    console.log(todoString);
    requeteServer('/todos', 'DELETE', {
        value: todoString
    })
    .then(AddTaskList);
}

AddTaskList();