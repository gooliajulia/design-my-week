import GreetingHeader from '../sections/GreetingHeader.js'
import Today from '../sections/Today.js'
import {useEffect, useState} from 'react';
import Habits from '../sections/Habits.js';
import MyTasks from '../sections/MyTasks.js';
import FollowingDays from '../displays/FollowingDays.js';
import axios from 'axios';
import NotePad from '../functions/NotePad.js';

const HomePage = ({TASK_API_URL, toggleTasksFetch, setToggleTasksFetch, usersName, currentUsername}) => {
    console.log(currentUsername);
    console.log(TASK_API_URL);

    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday']
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


    // These set state for Add new task form
    const [task, setTask] = useState('');
    const [taskImp, setTaskImp] = useState('');
    const [taskUrg, setTaskUrg] = useState('');
    const [taskEnj, setTaskEnj] = useState('');
    const [taskEstTime, setTaskEstTime] = useState('');
    const [toggleFilter, setToggleFilter] = useState(false);

    // to assign user task array from api request
    const [userTaskArray, setUserTaskArray] = useState([])
    const [currentUserTaskArray, setCurrentUserTaskArray] = useState([]);
    const [rankedTaskArray, setRankedTaskArray] = useState([])

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
                        rating: (parseInt(taskImp) + parseInt(taskUrg) + parseInt(taskEnj))
                        
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

        const user = {
            records: [
                {
                    fields: {
                        Name: `${currentUsername}`
                    }
                }
            ]
        }

        const getUsersTaskArray = async () => {
            console.log('getting users task array...');
    
            const resp = await axios.get(`${TASK_API_URL}`, user);
            console.log('api fetch results: ')
            console.log(resp.data.records);
            setUserTaskArray(resp.data.records);
        }

        getUsersTaskArray();
        setToggleFilter(!toggleFilter);
    }, [toggleTasksFetch])

    useEffect(() => {
        console.log('filtering tasks');
        console.log(userTaskArray);
        let filteredArray = [];
        userTaskArray.forEach((task) => {
            if (task.fields.Name === currentUsername) {
                filteredArray.push(task);
            }
        })
        console.log(filteredArray)
        setCurrentUserTaskArray(filteredArray);
        console.log(currentUserTaskArray);
    }, [toggleFilter])

    const rankTasks = (objectArray) => {
        objectArray.sort((a,b) => {
            return b.rating - a.rating;
        })
    }

    const designMyWeek = () => {
        console.log('designing your week');
        /*
        1. take currentUserTaskArray
        */
        let sortingArray = [];

        currentUserTaskArray.map((object) =>
        sortingArray.push(object.fields));
        console.log(sortingArray);
        rankTasks(sortingArray);
        console.log(sortingArray);
        setRankedTaskArray(sortingArray);
        /*
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
        <div id='homepage' >
            <div>
            </div>
                <GreetingHeader
                    name={usersName}/>
            <div id='task-display'>
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
                    userTaskArray={userTaskArray}
                    toggleTasksFetch={toggleTasksFetch}
                    setToggleTasksFetch={setToggleTasksFetch}
                    setToggleFilter={setToggleFilter}
                    toggleFilter={setToggleFilter}
                    currentUserTaskArray={currentUserTaskArray}
                    setCurrentUserTaskArray={setCurrentUserTaskArray}
                    designMyWeek={designMyWeek}/>
            </div>
            <div id='habits-today'>
            <button id='design-my-week' onClick={designMyWeek}>Design My Week</button>
                <Habits />
                <Today 
                days={days}
                weekDay={weekDay}
                months={months}
                month={month}
                day={day}
                year={year}
                rankedTaskArray={rankedTaskArray}
                />
                <NotePad />
            </div>
            <div id='following-days-display'>
                <FollowingDays 
                day={days[weekDay+1]}
                tasksArray={rankedTaskArray.slice(5,11)}
            />
                        <FollowingDays 
                day={days[weekDay+2]}
                tasksArray={rankedTaskArray.slice(11,17)}
            />
                        <FollowingDays 
                day={days[weekDay+3]}
                tasksArray={rankedTaskArray.slice(17,23)}
            />
                        <FollowingDays 
                day={days[weekDay+4]}
                tasksArray={rankedTaskArray.slice(23,29)}
            />
            </div>
        </div>

    )
}

export default HomePage;