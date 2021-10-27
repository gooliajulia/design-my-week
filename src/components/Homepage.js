import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';
import FollowingDays from './FollowingDays.js';
import axios from 'axios';
import DisplayTaskList from './DisplayTaskList.js';


const HomePage = () => {
    // These set state for Add new task form
    const [task, setTask] = useState('');
    const [taskImp, setTaskImp] = useState('');
    const [taskUrg, setTaskUrg] = useState('');
    const [taskEnj, setTaskEnj] = useState('');
    const [taskEstTime, setTaskEstTime] = useState('');

    // This sets state of current user to use for API communication.
    const [currentUsername, setCurrentUsername] = useState('sampleUser');

    // These set state for user log in
    const [logInUsername, setLogInUsername] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    // the state for Create New User form
    const [usersName, setUsersName] = useState('all-star');
    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');

    // The state for api request response of users
    const [usersList, setUsersList] = useState([]);

    // Toggle Fetch
    const [toggleFetch, setToggleFetch] = useState(false);

    // To assign all user info to
    const [currentUserAccountInfo, setCurrentUserAccountInfo] = useState([]);

    // to assign user task array from api request
    const [userTaskArray, setUserTaskArray] = useState([])


    const API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/Users?api_key=keyxASDYlQZpfwP0J'
    const TASK_API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/All%20User%20Tasks?api_key=keyxASDYlQZpfwP0J';

    const getUserInfo = async () => {
        console.log('getting user info...');

        const resp = await axios.get(`${API_URL}`);
        console.log(resp.data.records);
        setUsersList(resp.data.records);
        return(resp.data.records)
    }

    useEffect(() => {
        console.log('getting user list');
        getUserInfo();
        console.log(usersList)
    }, [toggleFetch])


    const handleLogInSubmit = (ev) => {
        ev.preventDefault();
        console.log('log in attempted');
        console.log(logInUsername);
        let userFound = usersList.find((user, index) => {
            if(user.fields.username === logInUsername)
            return true;
        });
        console.log(userFound);
        if (userFound.fields.password === logInPassword) {
            console.log('passwords match')
            setCurrentUsername(logInUsername);
            setCurrentUserAccountInfo(userFound);
            setUsersName(userFound.fields.firstName)
        } else {
            console.log("passwords don't match")
            alert("Password is incorrect. Please try again.")
            setLogInPassword('');
            setCurrentUsername('');
        }

    }

    const handleCreateAccountSubmit = (ev) => {
        ev.preventDefault();

        const createNewAccount = async (ev) => {
            ev.preventDefault();
            console.log('create account attempted');
    
            const newUser = {
                records: [
                    {
                        fields: {
                            username: newUserName,
                            password: newUserPassword,
                            firstName: newUserFirstName
                        }
                    }
                ]
            }
            await axios.post(`${API_URL}`, newUser)
        }
        createNewAccount(ev);
        setNewUserFirstName('');
        setNewUserPassword('');
        setNewUserName('');
        setToggleFetch(!toggleFetch);

    }

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


    // const getUserInfo = async () => {
    //     console.log('getting user info...');

    //     const resp = await axios.get(`${API_URL}`);
    //     console.log(resp.data.records);
    //     setUsersList(resp.data.records);
    //     return(resp.data.records)
    // }

    // useEffect(() => {
    //     console.log('getting user list');
    //     getUserInfo();
    //     console.log(usersList)
    // }, [toggleFetch])

    const getUsersTaskArray = async () => {
        console.log('getting users task array...');

        const resp = await axios.get(`${TASK_API_URL}`);
        console.log('api fetch results: ')
        console.log(resp.data.records);
        const arrayOfObjects = resp.data.records;

        let userTaskArray = [];
        arrayOfObjects.forEach((object) => {
            if (object.fields.Name === currentUsername) {
                userTaskArray.push(object.fields)
            }
            console.log('current user task array')
            console.log(userTaskArray);
        })

        return(resp.data.records);
        
    }

    useEffect(() =>{
        getUsersTaskArray();
        console.log('user task array: ' + userTaskArray);
    }, [toggleFetch])

    const sampleTaskArray = ['walk the dog', 'do the dishes', 'bake cookies']
    


    return (
        <div id='homepage' >
            <div id='user-log-in'>
                <h1>Hello, if you have an account, click 'Log In', otherwise, click 'Create Account'...</h1>
                <div id='user-forms'>
                    <form id='log-in' onSubmit={handleLogInSubmit}>
                        <h2>Log In: </h2>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username' placeholder='username' onChange={(ev) => setLogInUsername(ev.target.value)}/>
                        <br/>
                        <br/>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' placeholder='password' value={logInPassword} onChange={(ev) => setLogInPassword(ev.target.value)} />
                        <br/>
                        <br/>
                        <input type='submit' />
                    </form>
                    <form id='create-account' onSubmit={handleCreateAccountSubmit}>
                        <h2>Create new acount: </h2>
                        <label htmlFor='new-user-name'>First Name: </label>
                        <input type='text' id='new-user-name' value={newUserFirstName} placeholder='first name' onChange={(ev) => setNewUserFirstName(ev.target.value)} />
                        <br/>
                        <br/>
                        <label htmlFor='create-username'>Username: </label>
                        <input type='text' id='create-username' value={newUserName} placeholder='username' onChange={(ev) => setNewUserName(ev.target.value)}/>
                        <br/>
                        <br/>
                        <label htmlFor='create-password'>Create password: </label>
                        <input type='text' id='create-password' value={newUserPassword} placeholder='password' onChange={(ev) => setNewUserPassword(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input type='submit' />
                    </form>
                </div>
            </div>
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
                    setTaskEstTime={setTaskEstTime} />
                <div id='manage-tasks'>
                    <DisplayTaskList
                    taskArrayAll={sampleTaskArray}
                    />
                    {/* <DisplayTaskList 
                    taskArrayAll={userTaskArray}
                    /> */}
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