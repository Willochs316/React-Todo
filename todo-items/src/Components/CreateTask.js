import React, { useState } from "react";

const CreateTask = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");
  console.log(value);

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
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="input"
        placeholder="Add a new task..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
export default CreateTask;
