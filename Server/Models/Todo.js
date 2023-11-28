const mongoose = require('mongoose');

// Define the schema for a Todo
const TodoSchema = new mongoose.Schema({
  // The task of the todo, stored as a string
  task: String,
  
  // Whether the todo is marked as done or not, default is false
  done: {
    type: Boolean,
    default: false
  }
});

// Define a model based on the Todo schema, named "todos"
const TodoModel = mongoose.model("todos", TodoSchema);

// Export the TodoModel to be used in other files
module.exports = TodoModel;
