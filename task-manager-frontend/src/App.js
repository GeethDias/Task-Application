import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Register from './components/Register';
import Login from './components/Login';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { user, logout } = useAuth();

  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link> | <Link to="/create-tasks">Create Task</Link> | <Link to="/register">Register</Link> |{' '}
        {user ? (
          <>
            <span>Welcome, {user.username} </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-tasks" element={<CreateTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
