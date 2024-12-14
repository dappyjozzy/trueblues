import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Dummy About and Contact Components
const About = () => <div><h2>About Page</h2><p>Welcome to the About page!</p></div>;
const Contact = () => <div><h2>Contact Page</h2><p>Feel free to reach out!</p></div>;

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(''); // Clear input field
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Update tasks state without the deleted task
  };

  // Effect to log tasks whenever updated
  useEffect(() => {
    console.log('Task list updated:', tasks);
  }, [tasks]); // Triggered whenever tasks change

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Trueblues Task Manager</h1>
              {/* Task Input */}
              <div className="task-input-container">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter a new task"
                />
                <button onClick={addTask}>Add Task</button>
              </div>

              {/* Task List */}
              <ul className="task-list">
                {tasks.map((t, index) => (
                  <li key={index} className="task-item">
                    {t}
                    <button onClick={() => deleteTask(index)} className="delete-button">
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
