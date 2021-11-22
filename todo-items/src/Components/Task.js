import Button from "./Button";

const Task = ({ tasks }) => {
  return (
    <>
      <div className="task-list">
        {tasks.map((task) => (
          <ul className="task-preview">
            <li
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.title}
            </li>
            <Button />
          </ul>
        ))}
      </div>
    </>
  );
};

export default Task;


