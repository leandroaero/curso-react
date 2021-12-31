import react, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import TaskDetails from "./Components/TaskDetails";

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Teste1',
        completed: false,
      },
      {
        id: '2',
        title: 'Teste2',
        completed: true,
      },
    ]);

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map( task => {
        if (task.id == taskId) return { ... task, completed: !task.completed}

        return task;
      });

      setTasks(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
        const newTask = [ ... tasks, {
              title: taskTitle,
              id: uuidv4(),
              completed: false,
        },
      ];

      setTasks(newTask);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter( task => task.id !== taskId);
        setTasks(newTasks);
    };

  return (
      <Router> 
        <div className="container">
            <Header />
            <Routes
                  path="/"
                  exact 
                  render={() => (
                      <>
                          <AddTask handleTaskAddition={handleTaskAddition} />
                          <Tasks 
                              tasks={tasks} 
                              handleTaskClick={handleTaskClick} 
                              handleTaskDeletion={handleTaskDeletion}
                          />
                      </>
                  )} 
              />
        </div>
      </Router>
  );
};

export default App;