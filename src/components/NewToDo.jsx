
export default function NewToDo({updateTasks}){
  function addNewToDo(e){
    e.preventDefault();
    const form = e.target;
    const newToDo = form.newTask.value;
    updateTasks(newToDo);
  }
  return(
    <>
      <h2>Add new to-do</h2>
      <form onSubmit={(e) => addNewToDo(e)}>
        <div className="newTaskField">
          <label htmlFor="newTask">Name of the task</label>
          <input type="text" name="newTask" id="newTask"/>
        </div>
        <button type="submit">Add this task</button>
      </form>
    </>
  )
}