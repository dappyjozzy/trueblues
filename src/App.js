// Import React, React Router, and necessary hooks
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

// Import CSS
import './App.css';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // Task Manager State
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Add Task Function
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');  // Clear the input
    }
  };

  // Effect Hook: Logs tasks when updated
  useEffect(() => {
    console.log('Task list updated:', tasks);
  }, [tasks]);  // Runs when tasks change

  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={
            <div>
              <Home />
              <h2>Task Manager</h2>
              <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter a new task" 
              />
              <button onClick={addTask}>Add Task</button>

              <ul>
                {tasks.map((t, index) => (
                  <li key={index}>{t}</li>
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
