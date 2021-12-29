import react, { useState } from "react";

import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import './App.css'

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

    const handleTaskAddition = (taskTitle) => {
        const newTask = [ ... tasks, {
              title: taskTitle,
              id: Math.random(10),
              completed: false,
        },
      ];

      setTasks(newTask);
    }

  return (
      <> 
        <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks}/>
        </div>
      </>
  );
};

export default App;