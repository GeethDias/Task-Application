const express = require('express');
const { createtask, getTasks, deleteTask } = require('../Controllers/TaskController');

const Router = express.Router(); // Initialize the Router

// Route to get tasks
Router.get('/tasks', getTasks); // GET endpoint for retrieving tasks

// Route to create tasks
Router.post('/tasks/create-tasks', createtask); // POST endpoint for creating tasks

// Route to delete a task
Router.delete('/tasks/:id', deleteTask); // DELETE endpoint with task ID

module.exports = Router;
