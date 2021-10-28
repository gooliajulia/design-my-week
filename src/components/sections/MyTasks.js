import AddTaskForm from '../forms/AddTaskForm.js';
import {useState} from 'react';
import DisplayTaskList from '../displays/DisplayTaskList.js';


const MyTasks = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime, TASK_API_URL, currentUsername, userTaskArray, toggleTasksFetch, setToggleTasksFetch, setToggleFilter, toggleFilter, currentUserTaskArray, setCurrentUserTaskArray}) => {

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

    const designMyWeek = () => {
        console.log('designing your week');
        /*
        1. take currentUserTaskArray
        2. make a new array to work with that consists the objects of each task, the ratings parseInted and a new property of 'rank'
        NOTE: to start, simply rank the items and disregard timing. Assign them to days in groups of 5, Most important, 2 next important 2 extras.
            for tasks that take longer than 45 minutes, break up into two new tasks. (if less than 60 minutes, 45 and 15, if less than 75, 45 and 30 etc. if 90, 45 and 45 and so on.)
        3. Sort the array by rank
        4. Assign as follows:
            Today: first 5
            Next Day: next 5
            Next Next Day: next 5
            ... etc.
        




        */
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