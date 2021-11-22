const Button = () => {

    const completeTask = (e) => {

console.log('willochs')
    }
    
    const removeTask = (e) => {

console.log('willochs');
    }

    
    
  return (
    <div className="task-button">
      <button onClick={(e) => removeTask(e.target.value)} className="btnx">X</button>
      <button onClick={(e) => completeTask(e.target.value)} className="btn">
        Complete
      </button>
    </div>
  );
};

export default Button;
