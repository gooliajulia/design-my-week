import AddTaskForm from './AddTaskForm.js';
import {useState} from 'react';


const MyTasks = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime}) => {

    const [quickAddToggle, setQuickAddToggle] = useState(false);
    const [quickAddButtonText, setQuickAddButtonText] = useState('Quick Add +')

    const quickAdd = () => {
        console.log('Quick add button was clicked')
        setQuickAddToggle(!quickAddToggle);
        quickAddToggle ?  setQuickAddButtonText('Quick Add +') : setQuickAddButtonText('Hide Quick Add') ;
    }


    return (
        <div id='my-tasks'>
            <h1 className='my-tasks'>My Tasks</h1>
            <div id='my-task-buttons'>
                <button id='quick-add' className={ quickAddToggle ? 'show' : 'no-show'} onClick={quickAdd} >{quickAddButtonText}</button>
                <button >Manage Tasks</button>
            </div>
            { quickAddToggle ? 
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
            : null}

        </div>
    )
}


export default MyTasks;