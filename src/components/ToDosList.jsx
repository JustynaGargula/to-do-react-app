
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
      <h2>Your to-do-s</h2>
      {tasks.length===0 ? <p>No tasks to do at the moment</p> :
        <ul>
          {tasks.map(task => {
            return <li key={task.id}>
              <input checked={task.completed} type="checkbox" onChange={()=>toggleCompleted(task.id)}/>
              {task.taskName}
              <button id="deleteClassButton" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          })}
        </ul>}

    </>
  )
}