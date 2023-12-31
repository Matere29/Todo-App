const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

// MongoDB connection URL and parameters
const dbUrl = "mongodb+srv://Rorisang:EXYJzPXe0LCSDOXC@cluster0.h9b3loo.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// Create an Express app
const app = express();
const PORT = 3001;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(dbUrl, connectionParams)
  .then(() => {
    console.info("Connected to MongoDB");

    // Define routes after successfully connecting to the database

    // Route to get all todos
    app.get('/get', (req, res) => {
      TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    });

    // Route to update a todo by ID
    app.put('/update/:id', (req, res) => {
      const { id } = req.params;
      TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    });

    // Route to delete a todo by ID
    app.delete('/delete/:id', (req, res) => {
      const { id } = req.params;
      TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    });

    // Route to add a new todo
    app.post('/add', (req, res) => {
      const task = req.body.task;
      TodoModel.create({
        task: task
      }).then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    });

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
