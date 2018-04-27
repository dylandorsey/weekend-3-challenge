console.log('in client.js');

var app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function ($http) {
    console.log('ToDoController loaded');

    var self = this;

    self.newToDo = getToDos();

    getToDos();

    self.toDoList = [
        {
            toDoText: 'first thing',
            isComplete: false
        },
        {
            toDoText: 'next thing',
            isComplete: false
        }
    ]

    self.newToDo = {};

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
    }


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
    }

    self.updateText = function (toDo) {
        console.log('In updateText');
        putRequest(toDo);
        getToDos();
    }

    self.markComplete = function (toDo) {
        console.log('In markComplete');
        toDo.isComplete = true;
        putRequest(toDo);
        getToDos();
    }

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