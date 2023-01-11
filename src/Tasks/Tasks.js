import './Tasks.css'
import TaskItem from './TaskItem/TaskItem'
const Tasks=(props)=>{

    const taskList=props.taskList;

    const deleteThisTask=taskId=>{
        props.toDeleteThisTask(taskId)
    }
    
    return (
        <div className='task'>
        {taskList.length>0 &&taskList.map((taskData)=>(
            <TaskItem
            onDeleteTask={deleteThisTask}
            key={taskData.id}
            id={taskData.id}
            task={taskData.task}></TaskItem>
        ))
    }
    </div>

    )
}
export default Tasks;