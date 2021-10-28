
const AddTaskForm = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime, tasksToggleFetch, setTasksToggleFetch}) => {

    const updateTaskList = () => {
        setTasksToggleFetch(!tasksToggleFetch);
    }

    return (
                <div id='add-new-task-form' >
                    <form onSubmit={addNewTask}>
                        <br/>
                        <input className='input-form' type='text' id='task' placeholder='Task' value={task} onChange={(ev) => setTask(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='importance' placeholder="Task importance? (1-10)" value={taskImp} onChange={(ev) => setTaskImp(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='urgency' placeholder="Task urgency? (1-10)" value={taskUrg} onChange={(ev) => setTaskUrg(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='enjoyment' placeholder="Enjoyable? (1-5)" value={taskEnj} onChange={(ev) => setTaskEnj(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='time-est' placeholder="Time to complete? (minutes)" value={taskEstTime} onChange={(ev) => setTaskEstTime(ev.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                        <input className='add-button' type='submit' value='Add Task' onClick={() => updateTaskList}/>
                        <br/>
                    </form>
                </div>
    )
}

export default AddTaskForm;