const Button = ({ id, removeTask, index, completeTask, editTask }) => {
  /* const removeTask = (itemId) => {
   console.log('delete', itemId);
 console.log(tasks, itemId);
const copyOfTasks = [...tasks];
 const newTasks = copyOfTasks.filter((task) => task.id !== itemId);
  console.log(newTasks, "willochs");
  setTasks(newTasks);
  }; */

  //we can also use the index for the completeTask button

  return (
    <div className="task-button">
      <button onClick={() => removeTask(id)} className="btnx">
        X
      </button>
      <button onClick={() => completeTask(id)} className="btn">
        Complete
      </button>
      <button onClick={() => editTask(id)} className="btn1">
        Edit
      </button>
    </div>
  );
};

export default Button;
