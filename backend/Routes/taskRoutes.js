const express = require('express');
const { createtask, getTasks, deleteTask, updateTask } = require('../Controllers/TaskController');

const Router = express.Router(); // Initialize the Router

// Route to get tasks
Router.get('/', getTasks); // GET endpoint for retrieving tasks

// Route to create tasks
Router.post('/create-tasks', createtask); // POST endpoint for creating tasks

// Route to delete a task
Router.delete('/:id', deleteTask); // DELETE endpoint with task ID

Router.put('/:id', updateTask); //to update tasks 

module.exports = Router;
