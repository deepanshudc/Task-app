import { useState } from 'react';
import './TaskForm.css'
const TaskForm=(props)=>{

    let active;

    const taskHandler=(event)=>{
        setTaskHandler(event.target.value)
    }
    const [enterTask,setTaskHandler]=useState('');

    if(enterTask.length>0){
       active=false;
    }
    else{
       active=true
    }


    const addTask=(event)=>{
        event.preventDefault();

        const taskData={
            task:enterTask
        }
        props.onAddingNewTask(taskData)
        setTaskHandler('')


    }

    return(
        <form onSubmit={addTask}>
            <div className="task_form">
                <label>Enter Task:</label>
                <input type='text' value={enterTask} onChange={taskHandler}></input>
                <button type="submit" disabled={active} >Create Task</button>
            </div>
        </form>
    )
}

export default TaskForm;