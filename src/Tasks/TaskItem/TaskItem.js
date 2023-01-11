import './TaskItem.css'
const TaskItem=(props)=>{

    const deleteTask=(event)=>{
        props.onDeleteTask(props.id)
    }

    return(
        <div className='task_item'>
            <p>{props.task}</p>
            <button type="button" onClick={deleteTask}>Delete Task</button>
        </div>
    )

}
export default TaskItem;