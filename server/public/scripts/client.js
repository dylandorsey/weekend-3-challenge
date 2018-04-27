console.log('in client.js');

var app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function ($http) {
    console.log('ToDoController loaded');

    var self = this;

    // self.newToDo = getToDos();

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

    self.createToDo = function (newToDo) {
        console.log('In createToDo');
        self.toDoList.push(angular.copy(self.newToDo));
    }

    self.updateText = function () {
        console.log('In updateText');
    }

    self.markComplete = function () {
        console.log('In markComplete');
    }

    self.delete = function () {
        console.log('In delete');
    }

}
])