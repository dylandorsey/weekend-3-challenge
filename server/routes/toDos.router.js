const express = require('express');
const mongoose = require('mongoose');
require('../modules/database-connection');
const Tasks = require('../models/toDo.schema');
const router = express.Router();

// get route for /toDos
router.get('/', (req, res) => {
    console.log('in GET');
    // database Read/Find
    Tasks.find({})
        // case 1: success, what you wanted happened
        .then((response) => {
            // this is a promise from mongo
            // dataFromDatabase is from mongo database
            console.log('GET came back from database with', response);
            res.send(response);
            // case 2: error, different things happened
        }).catch((error) => {
            console.log('error with ToDos.find', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const toDoToAdd = req.body;
    console.log(toDoToAdd);
    Tasks.create(toDoToAdd)
        .then((response) => {
            res.send(response);
            console.log('posted to database:', response);
        }).catch((error) => {
            console.log('error with post to database', error);
            res.sendStatus(500);

        });
});

router.delete('/', (req, res) => {
    console.log('about to try to remove something');
    // router.put uses req.body
    Tasks.findByIdAndRemove(req.query._id)
        .then((response) => {
            res.send(202);
        })
        .catch((error) => {
            console.log('error with remove from database', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('put it now please!');
    // router.put uses req.body
    Tasks.findByIdAndUpdate(req.body._id, req.body)
        .then((response) => {
            res.send(202);
        })
        .catch((error) => {
            console.log('database returns error with put:', error);
            res.sendStatus(500);
        });
});

module.exports = router;