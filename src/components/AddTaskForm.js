/*
Info needed:
- addNewTask function
- task, setTask
- taskImp, setTaskImp
- taskUrg, setTaskUrg
- taskEnj, setTaskEnj
- taskEstTime, setTaskEstTime
*/

const AddTaskForm = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime}) => {
    return (
                <div id='add-new-task-form' >
                    <form onSubmit={addNewTask}>
                        <input className='input-form' type='text' id='task' placeholder='Task' value={task} onChange={(ev) => setTask(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='importance' placeholder="How important is this task? (1-10)" value={taskImp} onChange={(ev) => setTaskImp(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='urgency' placeholder="How urgent is this task? (1-10)" value={taskUrg} onChange={(ev) => setTaskUrg(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='enjoyment' placeholder="How much do you enjoy this task? (1-5)" value={taskEnj} onChange={(ev) => setTaskEnj(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='time-est' placeholder="How long do you expect this task to take? (minutes)" value={taskEstTime} onChange={(ev) => setTaskEstTime(ev.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                        <input className='add-button' type='submit' value='Add Task' />
                        <br/>
                    </form>
                </div>
    )
}

export default AddTaskForm;