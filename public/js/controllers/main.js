angular.module('todoController', [])

    .controller('mainController', function($scope, $http, Todos) { // using Todos and service
        $scope.formData = {};

        //  routes to get model data load all todos into view model, GET api
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    // function for creating todo and POST to api
        $scope.createTodo = function() {
            // adding fix for bug if user holds enter
            if (!$.isEmptyObject($scope.formData)) {
                Todos.create($scope.formData)

                    .success(function(data) {
                        $scope.formData = {}; // clear form data
                        $scope.todos = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });

            }
        };

        // function for deleteing and DELETE to api
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

    });