import AddTaskForm from './AddTaskForm.js';


const MyTasks = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime}) => {
    return (
        <div id='my-tasks'>
            <h1 className='my-tasks'>My Tasks</h1>
            <div id='my-task-buttons'>
                <button>Quick Add + </button>
                <button>Manage Tasks</button>
            </div>
            <AddTaskForm 
                    addNewTask={addNewTask}
                    task={task}
                    setTask={setTask}
                    taskImp={taskImp}
                    setTaskImp={setTaskImp}
                    taskUrg={taskUrg} 
                    setTaskUrg={setTaskUrg}
                    taskEnj={taskEnj} 
                    setTaskEnj={setTaskEnj}
                    taskEstTime={taskEstTime}
                    setTaskEstTime={setTaskEstTime}
                />
        </div>
    )
}


export default MyTasks;