import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

listDeTodos = [
    "element de liste 1",
    "element de liste 2",
    "element de liste 3",
]

@app.route('/todos', methods=['GET'])
def todos():
    return flask.jsonify(listDeTodos)

@app.route('/todos', methods=['POST'])
def addTodo():
    listDeTodos.append(flask.request.json)
    return flask.jsonify(listDeTodos)

@app.route('/todos', methods=['DELETE'])
def deleteTodo():
    todoString = flask.request.json['todo']
    listDeTodos.remove(todoString)
    return flask.jsonify(listDeTodos)


if __name__ == '__main__':
    app.run(debug=True)

