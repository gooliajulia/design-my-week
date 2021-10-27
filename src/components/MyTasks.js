import AddTaskForm from './AddTaskForm.js';
import {useState} from 'react';
import DisplayTaskList from './DisplayTaskList.js';
import axios from 'axios';


const MyTasks = ({addNewTask, task, setTask, taskImp, setTaskImp, taskUrg, setTaskUrg, taskEnj, setTaskEnj, taskEstTime, setTaskEstTime, TASK_API_URL, currentUsername, userTaskArray, toggleTasksFetch, setToggleTasksFetch}) => {

    const [quickAddToggle, setQuickAddToggle] = useState(false);
    const [quickAddButtonText, setQuickAddButtonText] = useState('Quick Add +')
    const [displayTasksToggle, setDisplayTasksToggle] = useState(false);
    const [taskArrayAll, setTaskArrayAll] = useState([]);
    const [currentUsersTaskArray, setCurrentUsersTaskArray] = useState([]);
    const [manageTasksToggle, setManageTasksToggle] = useState(false);

    const quickAdd = () => {
        console.log('Quick add button was clicked')
        setQuickAddToggle(!quickAddToggle);
        quickAddToggle ?  setQuickAddButtonText('Quick Add +') : setQuickAddButtonText('Hide Quick Add') ;
    }

    const getUsersTaskArray = async () => {
        console.log("getting user's task array...");

        const resp = await axios.get(`${TASK_API_URL}`);
        console.log(resp.data.records);
        setTaskArrayAll(resp.data.records);

        let foundUsersTaskArray = [];

        taskArrayAll.forEach((taskObject) => {
            if(taskObject.fields.Name === currentUsername) {
                foundUsersTaskArray.push(taskObject.fields)
            }
            console.log(foundUsersTaskArray)
            // setCurrentUsersTaskArray(foundUsersTaskArray);
        })
        setCurrentUsersTaskArray(foundUsersTaskArray);
        console.log('found users task array');
        console.log(currentUsersTaskArray);

        return(resp.data.records);
    }

    const manageTasks = () => {
        console.log('manage tasks button clicked');
        setManageTasksToggle(!manageTasksToggle);
    }


    return (
        <div id='my-tasks'>
            <h1 className='my-tasks'>My Tasks</h1>
            <div id='my-task-buttons'>
                <button id='quick-add' className={ quickAddToggle ? 'show' : 'no-show'} onClick={quickAdd} >{quickAddButtonText}</button>
                <button id='manage-tasks' onClick={manageTasks}>Manage Tasks</button>
            </div>
            { manageTasksToggle ? 
                <DisplayTaskList 
                key={userTaskArray.id}
                taskArrayAll={userTaskArray}
                toggleTasksFetch={toggleTasksFetch}
                setToggleTasksFetch={setToggleTasksFetch}
                currentUsername={currentUsername}
                />
            :
            null}

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