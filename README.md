
Hello Primers!

Welcome to your 3rd-weekend challenge!
Full stack is pretty awesome huh? The idea that, in such a short time, you are able to spin up a full application architecture is pretty incredible. 

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.



### BASE MODE
Here are the specific components for the challenge:

[x] set up debugger in code
* [x] Using AngularJS, create a front end experience that allows a user to create a task.
[x] create input field for task
[x] create button to mark complete
[x] create button to delete
[x] create button to save modifications
[x] assign ng-repeat="toDo in vm.toDo"
* [x] When the task is created, it should be stored inside of a database (MongoDB)
CLIENT.JS
[x] getFunction is $http GET
[x] postFunction is $http POST
SERVER.JS
[x] create server.js and get it listening
[x] set up
[x] create toDo.router.js route
[x] create database-connection.js module
[x] write connection to the mongo-server in server.js
[x] create module for toDo-data.js
[x] create model for toDo-schema
const toDoSchema = new Schema ({

})
* [x] Whenever a task is created the front end should refresh to show all tasks that need to be completed.
CLIENT.JS
[x] postFunction includes: getFunction
* [x] Each task should have an option to 'Complete' or 'Delete'.
CLIENT.JS
[x] editFunction includes: $http PUT, getFunction
[x] deleteFunction includes: $http DELETE, getFunction
* [x] When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. `ng-class` will come in handy!)
INDEX.HTML
[x] link bootstrap
[x] assign classes to elements
* [see schema code] Whether or not a task is complete should also be stored in the database.
* [x] Deleting a task should remove it both from the Front End as well as the Database.

Make sure that you also show us your best styling chops.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Think through your `Schema` for Mongoose and how you will structure your data. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

### STRETCH GOALS

- Implement Bootstrap to make your app look FABULOUS.
- In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.
[x] Move the inputs into a form and use `ng-submit` so that the user can hit enter to add a new task.
[x] Add front-end validation to the 'make-a-task' form.
[x] Add a `category` field for the task. 
[x]Allow users to filter by task category. 
[x] Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
