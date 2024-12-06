const Task = require('../Models/TaskModel');
const mongoose = require('mongoose');

// Create a new task
const createtask = async (req, res) => {
  const { EmployementID, Content } = req.body;
  console.log("Employee ID:", EmployementID)
  if (!EmployementID || !Content) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const task = new Task({EmployementID, Content})
    await task.save()
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const id = req.params.id; // Use path parameters for clarity

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such task' });
  }

  try {
    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully', task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const content = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such task' });
  }

  try {
    const task = await Task.findByIdAndUpdate(id, content, {new:true})
    if(!task){
      return res.status(404).json({message: 'No such task to update'})
    }
    res.status(200).json({message: "task sucessfully updated", task})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export all functions
module.exports = {
  createtask,
  getTasks,
  deleteTask,
  updateTask
};
