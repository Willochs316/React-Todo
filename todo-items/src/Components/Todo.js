import React, { useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

const Todo = ({ addTask }) => {
  const [tasks, setTasks] = useState([
    { id: 0, title: "Grab some Pizza", completed: true },
    { id: 1, title: "Do your workout", completed: true },
    { id: 2, title: "Hangout with friends", completed: false },
  ]);

  const removeTask = (itemId) => {
    console.log("delete", itemId);
    console.log(tasks, itemId);
    const copyOfTasks = [...tasks];
    const newTasks = copyOfTasks.filter((task) => task.id !== itemId);
    console.log(newTasks, "willochs");
    setTasks(newTasks);
  };

  /* const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }; */

  const completeTask = (itemId) => {
    console.log(tasks, itemId);
    const strOfTasks = [...tasks];
    const newTasks = strOfTasks.filter((task) => {
      if(task.id === itemId) {
        task.completed = !task.completed
      }
      return tasks;
    });
    console.log(newTasks, "willochs");
    setTasks(newTasks);
  };
 

  const editTask = (itemId, newName) => {
    console.log("editTask", itemId);
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (itemId === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  /* 
Add Functionality: Complete Task */

  return (
    <div className="todo-container">
      <div className="header">TODO-ITEMS</div>

      <Task
        tasks={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
        editTask={editTask}
      />

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
