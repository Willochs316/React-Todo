import React, { useState } from "react";

const CreateTask = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");
  /* const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({}); */

  const addTask = (title) => {
    const newTasks = [
      ...tasks,
      { title: title, completed: false, id: Math.floor(Math.random() * 1000) },
    ];
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    addTask(value);
    setValue("");
  };

  /*  const handleEditFormSubmit  = (e) => {
    e.preventDefault();
    console.log('handleEditFormSubmit', 'editMyTask')
  } */

  return (
    <>
      <form /* onSubmit={handleEditFormSubmit} */>
        <input
          name="editTask"
          type="text"
          placeholder="Edit task"
          /*  value={currentTask.title} */
          /*  onChange={() => setIsEditing()} */
        />
      </form>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="input"
          placeholder="Add a new task..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};
export default CreateTask;
