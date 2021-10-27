import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';
import FollowingDays from './FollowingDays.js';
import axios from 'axios';
import DisplayTaskList from './DisplayTaskList.js';

const HomePage = ({USER_API_URL, TASK_API_URL, toggleTasksFetch, setToggleTasksFetch, usersName, currentUsername}) => {

    // These set state for Add new task form
    const [task, setTask] = useState('');
    const [taskImp, setTaskImp] = useState('');
    const [taskUrg, setTaskUrg] = useState('');
    const [taskEnj, setTaskEnj] = useState('');
    const [taskEstTime, setTaskEstTime] = useState('');

    // to assign user task array from api request
    const [userTaskArray, setUserTaskArray] = useState([])

    const addNewTask = async (ev) => {
        ev.preventDefault();
        console.log('adding task to airtable with username')
        console.log('Task: ' + task);
        console.log('Importance: ' + taskImp);
        console.log('Urgency: ' + taskUrg);
        console.log('Enjoyment: ' + taskEnj);
        console.log('Estimated time to complete: ' + taskEstTime);

        // Will likely need to parseInt each integer
        // Add task to Airtable of Tasks with username as Name
        // (try this first with the already assigned Name in airtable, otherwise add a username column)

        const newTask = {
            records: [
                {
                    fields: {
                        Name: currentUsername,
                        task,
                        importance: taskImp,
                        urgency: taskUrg,
                        enjoyment: taskEnj,
                        minutes: taskEstTime,
                        
                    }
                }
            ]
        }

        // Create a POST request to the All User Tasks Table
        const resp = await axios.post(`${TASK_API_URL}`, newTask)
        console.log(resp)
        setTask('');
        setTaskImp('');
        setTaskUrg('');
        setTaskEnj('');
        setTaskEstTime('');

    }


    useEffect(() => {
        console.log('Getting All users tasks');

        const getUsersTaskArray = async () => {
            console.log('getting users task array...');
    
            const resp = await axios.get(`${TASK_API_URL}`);
            console.log('api fetch results: ')
            console.log(resp.data.records);
            setUserTaskArray(resp.data.records);
        }

        getUsersTaskArray();
    }, [toggleTasksFetch])


    return (
        <div id='homepage' >
            <div id='greeting-tasks'>
                <GreetingHeader
                    name={usersName}/>
                <Habits />
            </div>
            <div id='my-tasks-management'>
            </div>
            <div id='habits-today'>
                <MyTasks
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
                    tasksToggleFetch={toggleTasksFetch}
                    setTasksToggleFetch={setToggleTasksFetch}
                    TASK_API_URL={TASK_API_URL}
                    currentUsername={currentUsername}
                    />

                <div id='manage-tasks'>
                <h1>Users Task List</h1>
                    {/* { userTaskArray.map((taskObject) => ( */}
                        <DisplayTaskList 
                            key={userTaskArray.id}
                            taskArrayAll={userTaskArray}
                            toggleTasksFetch={toggleTasksFetch}
                            setToggleTasksFetch={setToggleTasksFetch}
                            currentUsername={currentUsername}
                        />
                    {/* ))}  */}
                </div>
                <Today />
            </div>
            <div id='following-days-display'>
                <FollowingDays 
                day={'Tuesday'}
                tasksArray={['pay the bills', 'walk the dog', 'code some sick shit', 'pedicure', 'do the dishes']}
            />
                        <FollowingDays 
                day={'Wednesday'}
                tasksArray={['pay the bills', 'walk the dog', 'code some sick shit', 'pedicure', 'do the dishes']}
            />
                        <FollowingDays 
                day={'Thursday'}
                tasksArray={['pay the bills', 'walk the dog', 'code some sick shit', 'pedicure', 'do the dishes']}
            />
                        <FollowingDays 
                day={'Friday'}
                tasksArray={['pay the bills', 'walk the dog', 'code some sick shit', 'pedicure', 'do the dishes']}
            />
            </div>
        </div>

    )
}

export default HomePage;