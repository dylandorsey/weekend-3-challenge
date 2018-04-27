const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const toDoSchema = new Schema({
    toDoText: { type: String, required: true },
    isComplete: { type: Boolean }
});

module.exports = mongoose.model('task', toDoSchema);