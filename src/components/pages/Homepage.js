import GreetingHeader from '../sections/GreetingHeader.js'
import Today from '../sections/Today.js'
import {useEffect, useState} from 'react';
import Habits from '../sections/Habits.js';
import MyTasks from '../sections/MyTasks.js';
import FollowingDays from '../displays/FollowingDays.js';
import axios from 'axios';

const HomePage = ({TASK_API_URL, toggleTasksFetch, setToggleTasksFetch, usersName, currentUsername}) => {

    // _________Day and Date______________//
    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday']
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


    // _________New Task State__________//
    const [task, setTask] = useState('');
    const [taskImp, setTaskImp] = useState('');
    const [taskUrg, setTaskUrg] = useState('');
    const [taskEnj, setTaskEnj] = useState('');
    const [taskEstTime, setTaskEstTime] = useState('');
    const [toggleFilter, setToggleFilter] = useState(false);

    // _________Task Array States______//
    const [userTaskArray, setUserTaskArray] = useState([])
    const [currentUserTaskArray, setCurrentUserTaskArray] = useState([]);
    const [rankedTaskArray, setRankedTaskArray] = useState([])

    // Function that creates a new task based on user input, 
    // and posts that task to the 'All User Tasks' AirTable
    const addNewTask = async (ev) => {
        ev.preventDefault();

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

        // ___________POST Request ______________//
        const resp = await axios.post(`${TASK_API_URL}`, newTask)

        //____Reset Task State and entry fields_____//
        setTask('');
        setTaskImp('');
        setTaskUrg('');
        setTaskEnj('');
        setTaskEstTime('');
    }


    useEffect(() => {

        // ______ a GET request that gets ALL Users Tasks ______//
        const getUsersTaskArray = async () => {
            const resp = await axios.get(`${TASK_API_URL}`);
            setUserTaskArray(resp.data.records);
        }

        getUsersTaskArray();
        setToggleFilter(!toggleFilter);
    }, [toggleTasksFetch])


    // _____UseEffect for filtering out just______//
    // ____ current users tasks from array________//
    useEffect(() => {
        let filteredArray = [];
        userTaskArray.forEach((task) => {
            if (task.fields.Name === currentUsername) {
                filteredArray.push(task);
            }
        })
        setCurrentUserTaskArray(filteredArray);
    }, [toggleFilter])

    //_____Sorts the array based off of rating value_____//
    const rankTasks = (objectArray) => {
        objectArray.sort((a,b) => {
            return b.rating - a.rating;
        })
    }

    const designMyWeek = () => {
        console.log('designing your week');
        let sortingArray = [];
        currentUserTaskArray.map((object) =>
        sortingArray.push(object.fields));
        rankTasks(sortingArray);
        setRankedTaskArray(sortingArray);
    }


    return (
        <div id='homepage' >
            <div id='top-section'>
                <GreetingHeader
                    name={usersName}/>

            </div>
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
            </div>
            <div id='following-days-display'>
                <FollowingDays 
                day={days[weekDay+1]}
                tasksArray={rankedTaskArray.slice(5,10)}
            />
                        <FollowingDays 
                day={days[weekDay+2]}
                tasksArray={rankedTaskArray.slice(10,15)}
            />
                        <FollowingDays 
                day={days[weekDay+3]}
                tasksArray={rankedTaskArray.slice(15,20)}
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