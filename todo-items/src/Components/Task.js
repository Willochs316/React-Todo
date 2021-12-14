import React, { useEffect, useState } from "react";
import Button from "./Button";

const Task = ({ tasks, removeTask, completeTask, editTask }) => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
 /*  const [isEditing, setIsEditing] = useState(false); */

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  return (
    <>
      <div className="pending">Pending tasks ({tasksRemaining})</div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <ul className="task-preview">
            <li
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.title}
            </li>
            <Button
              id={task.id}
              tasks={tasks}
              removeTask={removeTask}
              completeTask={completeTask}
              index={index}
              editTask={editTask}
            />
          </ul>
        ))}
      </div>
    </>
  );
};

export default Task;
