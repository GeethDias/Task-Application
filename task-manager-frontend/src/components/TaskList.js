import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/api/tasks", {

      });
      setTasks(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to fetch tasks.");
    }
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`); // DELETE method
      alert("Task Deleted!");
      fetchTasks();
    } catch (error) {
      setError(error.response?.data?.error || "Failed to delete task.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <p>{task.Content}</p>
            <small>ID: {task.EmployementID}</small>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
