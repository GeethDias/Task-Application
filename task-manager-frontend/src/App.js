import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link> | <Link to="/create-tasks">Create Task</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-tasks" element={<CreateTask />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
