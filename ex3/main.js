

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

//a votre tour de jouer:
// completez les fonctions suivantes (vous pouvez/devez vous inspirer de la correction de l'exercice 2)
//ajouter une checkbox pour chaque todo
//ajouter la fonction updateTask() qui permet de mettre à jour le status d'une tache (done ou pas done) pour chaque checkBox

function AddTaskList() {

}

function addTask() {

}

function removeTask(button) {

}

function updateTask(button) {

}


AddTaskList();

