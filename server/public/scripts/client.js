console.log('in client.js');

var app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function ($http) {
    console.log('ToDoController loaded');

    var self = this;

    // request tasks from database and assign them to a self property (for DOM manipulation)
    self.newToDo = getToDos();

    // declare newToDo as an empty object
    self.newToDo = {};

    // request task objects' data from database
    function getToDos() {
        $http({
            method: 'GET',
            url: '/toDos'
        })
            .then(function (response) {
                console.log(response.data);
                self.toDoList = response.data;
            })
            .catch(function (error) {
                console.log('error on /toDos GET', error);
            })
    }// end getToDos

    // send new task object to database and GET up-to-date data back
    self.createToDo = function () {
        console.log('In createToDo');
        $http({
            method: 'POST',
            url: 'toDos',
            data: self.newToDo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /toDos POST', error);
            });
        getToDos();
    }// end createToDo

    // update task object's text value from the list itself
    self.updateText = function (toDo) {
        console.log('In updateText');
        // call http request to change object data
        putRequest(toDo);
        // call http request to get back data from database
        getToDos();
    }// end updateText

    // toggle task object's isComplete property, POST to database
    self.toggleComplete = function (toDo) {
        console.log('In toggleComplete');
        console.log(toDo.isComplete);
        if (toDo.isComplete != true) {
            toDo.isComplete = true;
            putRequest(toDo);
            console.log(toDo.isComplete);
        }
        else if (toDo.isComplete === true) {
            toDo.isComplete = false;
            self.isReadOnly = true;
            putRequest(toDo);
            console.log(toDo.isComplete);
        }
        // call http request to get back data from database
        getToDos();
    }// end toggleComplete

    // remove task object from the database, GET most up-to-date data back
    self.delete = function (toDo) {
        console.log('In delete');
        $http({
            method: 'DELETE',
            url: 'toDos',
            params: toDo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /toDos POST', error);
            });
        getToDos();
    }

    // request to change database document
    function putRequest(toDo) {
        $http({
            method: 'PUT',
            url: 'toDos',
            data: toDo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('error on /toDos POST', error);
            });
    }
}
])