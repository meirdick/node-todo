// define and initiate app
var nodeTodo = angular.module('nodeTodo', []); // create module, can inject dependencies

// define main controller
function mainController($scope, $http) {  //mainController, inject $scope and $http
        $scope.formData = {};

        //  routes to get model data load all todos into view model, GET api
        $http.get('/api/todos')
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    // function for creating todo and POST to api
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear form data
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // function for deleteing and DELETE to api
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}