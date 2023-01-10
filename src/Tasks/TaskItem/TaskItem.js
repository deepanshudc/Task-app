import './TaskItem.css'
const TaskItem=(props)=>{


    return(
        <div className='task_item'>
            <p>{props.task}</p>
            <button type="button">Delete Task</button>
        </div>
    )

}
export default TaskItem;