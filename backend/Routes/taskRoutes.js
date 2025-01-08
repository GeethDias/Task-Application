const express = require("express");
const { createtask, getTasks, deleteTask, updateTask } = require("../Controllers/TaskController");
const authMiddleware = require("../Middleware/authMiddleware"); // Import authMiddleware

const Router = express.Router();

// Protect routes with authMiddleware
Router.get("/", authMiddleware, getTasks); // GET endpoint for retrieving tasks
Router.post("/create-tasks", authMiddleware, createtask); // POST endpoint for creating tasks
Router.delete("/:id", authMiddleware, deleteTask); // DELETE endpoint with task ID
Router.put("/:id", authMiddleware, updateTask); // PUT endpoint to update tasks

module.exports = Router;
