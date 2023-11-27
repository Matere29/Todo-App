const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

//name of database, todos

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel