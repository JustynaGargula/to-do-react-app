
export  default function ToDosList({tasks, setTasks}){
  function toggleCompleted(id){
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        return {...task, completed: task.id===id ? !task.completed : task.completed}
      })
    })
  }
  function deleteTask(id) {
    setTasks((currentTasks)=> {
      return currentTasks.filter(task => task.id!==id)
    })
  }

  return(
    <>
      <h2 className="m-2">Your to-do-s</h2>
      {tasks.length===0 ? <p>No tasks to do at the moment</p> :
        <ul className="list-group">
          {tasks.map(task => {
            return <li className="list-group-item row" key={task.id}>
              <input className="col-4 form-check-input me-2" id="completedCheckbox" checked={task.completed} type="checkbox" onChange={()=>toggleCompleted(task.id)}/>
              <label className="col-4 form-check-label" htmlFor="completedCheckbox">{task.taskName}</label>
              <button className="col-4 btn btn-outline-danger" id="deleteClassButton" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          })}
        </ul>}

    </>
  )
}