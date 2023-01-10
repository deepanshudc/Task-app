import './Tasks.css'
import TaskItem from './TaskItem/TaskItem'
const Tasks=(props)=>{

    const taskList=props.taskList;


    return (
        <div className='task'>
        {taskList.length>0 &&taskList.map((taskData)=>(
            <TaskItem
            key={taskData.id}
            id={taskData.id}
            task={taskData.task}></TaskItem>
        ))
    }
    </div>

    )
}
export default Tasks;