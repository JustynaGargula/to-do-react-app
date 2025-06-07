import NewToDo from "./NewToDo";
import {useEffect, useState} from "react";
import ToDosList from "./ToDosList";

function App() {
  const [tasks, setTasks] = useState(() =>{
    const retrievedTasks = localStorage.getItem("tasks")
    return retrievedTasks ? JSON.parse(retrievedTasks) : []
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  function updateTasks(newTask){
    setTasks([...tasks, {id: crypto.randomUUID(), taskName: newTask, completed: false}]);
  }
  return (
    <div className="App">
      <h1>To do app</h1>
      <NewToDo updateTasks={updateTasks}/>
      <ToDosList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
