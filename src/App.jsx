import { useState, useEffect } from 'react'
import './App.css'
import Task from './Task.jsx'
import AddNew from './AddNew.jsx'
import Filter from './Filter.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [filterValue, setFilterValue] = useState(0)
  const [taskList, setTasks] = useState([])

  let nextId = taskList.length+1
  let filteredList = []

  switch(filterValue) {
    case 0: //all
      filteredList = taskList;
      break;
    case 1: //not completed
      filteredList = taskList.filter(t => t.completed !== true);
      break;
    case 2: //completed
      filteredList = taskList.filter(t => t.completed === true);
      break;
  }

  let taskCount = filteredList.length

  useEffect(() => {
    if(!isLoaded) {
      getTasks();
    }
  });

  function getTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json =>  {
      setTasks(json.reverse());
      setIsLoaded(true);
    });
  }

  function addTask() {
    setTasks(
      [
        { userId: 1, id: nextId++, title: document.getElementById("taskTitle").value, completed: false },
        ...taskList
      ]
    )
    document.getElementById("taskTitle").value = ""
    //TODO: update list on the backend
  }

  function deleteTask(id) {
    setTasks(
      taskList.filter(t =>
        t.id !== id)
    )
    //TODO: update list on the backend
  }

  function completeTask(id) {
    setTasks(taskList.map(t => {
        if(t.id !== id) {
          return t;
        } else {
          return {
            ...t,
            completed: !t.completed
          }
        }
      }));
    //TODO: update list on the backend
  }
  
  function filterTasks() {
    setFilterValue(parseInt(document.getElementById("taskFilter").value));
  }

  return (
    <>
      <div id="main">
        <AddNew action={addTask} />
        <Filter action={filterTasks} count={taskCount} />
        <div>
          {
            filteredList.map(task => 
              <Task data={task} deleteHandler={deleteTask} toggleHandler={completeTask} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
