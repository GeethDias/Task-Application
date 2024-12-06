import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link> | <Link to="/create-tasks">Create Task</Link>
        {/*methana dena path eka thama browser eke visible wenne */}
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-tasks" element={<CreateTask />} />
      </Routes>
    </Router>
  );
};

export default App;
