

function requeteServer(chemin /* commence par un / */, methode /*'GET', 'POST', 'PUT', 'DELETE'*/, contenu /* objet js */)
{
    const BASE_URL = 'http://localhost:5000';
    const url = BASE_URL + chemin;
    const options = {
        method: methode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        },
        body: JSON.stringify(contenu)
    };
    return fetch(url, options)
    .then(response => response.json())
}

function AddTaskList() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    const todoList = requeteServer('/todos', 'GET');
    todoList.then(todos => {
        console.log(todos);
        //boucler sur chaque todo
        //pour chaque todo:
            //créer un élément de liste (li)
            //créer un element de type span pour le contenu
            //ajouter le contenu de l'input dans le span
            //ajouter un bouton supprimer
            //ajouter un event listener sur le bouton
            //ajouter le li dans la liste
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskString = taskInput.value;
    //envoyer une requete POST au serveur
    //avec le contenu de l'input
    //quand la requlete est fini, rappeler AddTaskList pour mettre à jour la liste
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.target.parentNode;
    const ul = li.parentNode;
    //recuperer le contenu du span à l'intérieur du li
    //envoyer une requete DELETE au serveur
    //supprimer le li de la liste
    //attendre que la requete soit terminée puis reupdate la liste des todos
    const todoString = li.getElementByName('span').innerHTML;
    console.log(todoString);
}


AddTaskList();