import React, { useState } from "react";
import axios from "axios";

const CreateTask = ({ fetchTasks }) => {
  const [EmployementID, setEmployementID] = useState("");
  const [Content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const token = localStorage.getItem("authToken"); // Get token from localStorage

      await axios.post(
        "http://localhost:5000/api/tasks/create-tasks",
        { EmployementID, Content },
        { headers: { Authorization: `Bearer ${token}` } } // Include token
      );
      
      alert("Task Created Successfully!");
      fetchTasks && fetchTasks(); // Call fetchTasks if provided
      setEmployementID("");
      setContent("");
    } catch (error) {
      setError(error.response?.data?.error || "Failed to create task.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Employment ID"
        value={EmployementID}
        onChange={(e) => setEmployementID(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Content"
        value={Content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default CreateTask;
