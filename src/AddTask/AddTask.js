import { Fragment } from "react"
import TaskForm from './TaskForm/TaskForm.js'

const AddTask=(props)=>{

    const getNewTask=(newTask)=>{

        const NewTask={
            ...newTask,
            id:Math.random().toString()
        }

        props.gotNewTask(NewTask)

    }


    return(
        <Fragment>
            <TaskForm onAddingNewTask={getNewTask}></TaskForm>
        </Fragment>
    )

}

export default AddTask;