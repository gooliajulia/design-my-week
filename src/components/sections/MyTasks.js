import AddTaskForm from '../forms/AddTaskForm.js';
import {useState} from 'react';
import DisplayTaskList from '../displays/DisplayTaskList.js';


const MyTasks = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime, TASK_API_URL, currentUsername, userTaskArray, toggleTasksFetch, setToggleTasksFetch, setToggleFilter, toggleFilter, currentUserTaskArray, setCurrentUserTaskArray, designMyWeek}) => {

    const [quickAddToggle, setQuickAddToggle] = useState(false);
    const [quickAddButtonText, setQuickAddButtonText] = useState('Quick Add +')
    const [manageTasksToggle, setManageTasksToggle] = useState(false);

    const quickAdd = () => {
        console.log('Quick add button was clicked')
        setQuickAddToggle(!quickAddToggle);
        quickAddToggle ?  setQuickAddButtonText('Quick Add +') : setQuickAddButtonText('Hide Quick Add') ;
    }

    const manageTasks = () => {
        console.log('manage tasks button clicked');
        setToggleTasksFetch(!toggleTasksFetch);
        setManageTasksToggle(!manageTasksToggle);
        setToggleFilter(!toggleFilter);
    }


    return (
        <div id='my-tasks'>
            <h1 className='my-tasks'>My Tasks</h1>
            <div id='my-task-buttons'>
                <button id='quick-add' className={ quickAddToggle ? 'show' : 'no-show'} onClick={quickAdd} >{quickAddButtonText}</button>
                <button id='manage-tasks' onClick={manageTasks}>Manage Tasks</button>
                <button id='design-my-week' onClick={designMyWeek}>Design My Week</button>
            </div>
            <div id='tasks-and-add'>
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
            { manageTasksToggle ? 
                    <DisplayTaskList 
                        key={userTaskArray.id}
                        taskArrayAll={userTaskArray}
                        toggleTasksFetch={toggleTasksFetch}
                        setToggleTasksFetch={setToggleTasksFetch}
                        currentUsername={currentUsername}
                        TASK_API_URL={TASK_API_URL}
                        currentUserTaskArray={currentUserTaskArray}
                        setManageTasksToggle={setManageTasksToggle}
                        manageTasksToggle={manageTasksToggle}
                        setToggleFilter={setToggleFilter}
                        toggleFilter={toggleFilter}
                        setCurrentUserTaskArray={setCurrentUserTaskArray}
                    />
            :
            null}
            </div>
        </div>
    )
}


export default MyTasks;