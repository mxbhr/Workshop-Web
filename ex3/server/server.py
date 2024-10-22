import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

listDeTodos = {
    "element de liste 1": False,
    "element de liste 2": False,
    "element de liste 3": False,
}

@app.route('/todos', methods=['GET'])
def todos():
    return flask.jsonify(listDeTodos)

@app.route('/todos', methods=['POST'])
def addTodo():
    todoString = flask.request.json['value']
    listDeTodos[todoString] = False
    return flask.jsonify(listDeTodos)

@app.route('/todos', methods=['DELETE'])
def deleteTodo():
    todoString = flask.request.json['value']
    del listDeTodos[todoString]
    return flask.jsonify(listDeTodos)

@app.route('/done', methods=['POST'])
def doneTodo():
    ##retrouver la valeur de la todo
    ##changer la valeur de la todo
    ##retourner la liste

@app.route('/undone', methods=['POST'])
def undoneTodo():
    ##retrouver la valeur de la todo
    ##changer la valeur de la todo
    ##retourner la liste

if __name__ == '__main__':
    app.run(debug=True)

