import './App.css';
import AddTask from './AddTask/AddTask.js'
import Tasks from './Tasks/Tasks';
import { useState } from 'react';
function App() {


  const taskList=[
    {
      id:'1',
      task:'this is task1'
    },
    {
      id:'2',
      task:'this is task 2'
    }
  ]

  const [taskListUpdate,setTaskListUpdate]=useState(taskList);


  const gotNewTaskToAdd=(newTask)=>{
    setTaskListUpdate((prevTask)=>{
      return [newTask,...prevTask]
    })
    taskList.push(newTask);
  }

  const deleteThisTask=taskId=>{
    setTaskListUpdate(taskListUpdate=>{
    const newTasks=taskListUpdate.filter(tasks=>(tasks.id!==taskId))
    return newTasks
  })
   
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Task App</h2>
        <AddTask gotNewTask={gotNewTaskToAdd}></AddTask>
        <Tasks taskList={taskListUpdate} toDeleteThisTask={deleteThisTask}></Tasks>

      </header>
    </div>
  )
}

export default App;
