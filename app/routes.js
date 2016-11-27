// we can put the controller code here, or we can move them out into own controller folders and load them here.
// some people might seperate out folders for each route with code there. but harder to see full top down routes of app

// still need to load model into here, and expose through module exports, using app variable.
var Todo = require('./models/todo');

module.exports = function(app) {


    // get all todo's (READ)
    app.get('/api/todos', function(req, res) {

        Todo.find(function(err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        });
    });

    // create todo's
    app.post('/api/todos', function(req, res) {
        Todo.create({
            text: req.body.text,
            done: false
        }, function(err, todos) {
            if (err)
                res.send(err);
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });
    });

    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todos) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });
    });


    // define routes for Angular front end (can be db.js model file when refactored)
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

}