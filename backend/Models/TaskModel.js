const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Task = new Schema({
    EmployementID: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    }
}, {timestamps:true})


module.exports = mongoose.model('Task', Task)