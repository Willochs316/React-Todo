import React, { useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

const Todo = ({addTask}) => {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  

  return (
    <div className="todo-container">
      <div className="header">TODO-ITEMS</div>

      <Task tasks={tasks}  />

     <div className="create-task">
       <CreateTask addTask={addTask} tasks={tasks} setTasks={setTasks} />
     </div>
    </div>
  );
};
export default Todo;
/* 

<div className="create-task">
        <CreateTask addTask={addTask} />
      </div> */

/*   const addTask = (title) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
      }; */
