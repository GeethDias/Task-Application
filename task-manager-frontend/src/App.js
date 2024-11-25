import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link> | <Link to="/create">Create Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </Router>
  );
};

export default App;
