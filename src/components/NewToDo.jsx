
export default function NewToDo({updateTasks}){
  function addNewToDo(e){
    e.preventDefault();
    const form = e.target;
    const newToDo = form.newTask.value;
    updateTasks(newToDo);
  }
  return(
    <>
      <h2 className="m-2">Add new to-do</h2>
      <form onSubmit={(e) => addNewToDo(e)}>
        <div className="newTaskField m-2">
          <label className="form-label" htmlFor="newTask">Name of the task</label>
          <input className="form-control" type="text" name="newTask" id="newTask"/>
        </div>
        <button className="btn btn-outline-primary m-2"  type="submit">Add this task</button>
      </form>
    </>
  )
}