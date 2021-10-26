import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';
import FollowingDays from './FollowingDays.js';
import axios from 'axios';

const HomePage = ({name}) => {
    const [task, setTask] = useState('');
    const [taskImp, setTaskImp] = useState(1);
    const [taskUrg, setTaskUrg] = useState(1);
    const [taskEnj, setTaskEnj] = useState(1);
    const [taskEstTime, setTaskEstTime] = useState(5);

    const [currentUsername, setCurrentUsername] = useState('');

    const [logInUsername, setLogInUsername] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    const [usersName, setUsersName] = useState('all-star');
    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');

    const [usersList, setUsersList] = useState([]);

    const [toggleFetch, setToggleFetch] = useState(false);

    const [currentUserAccountInfo, setCurrentUserAccountInfo] = useState([]);


    const API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/Users?api_key=keyxASDYlQZpfwP0J'

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

    const addNewTask = (ev) => {
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

        // Create a POST request to the All User Tasks Table
        
    }
    


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
            <MyTasks />
            </div>
            <div id='my-tasks-management'>
                <div id='add-new-task-form' >
                    <form onSubmit={addNewTask}>
                        <input className='input-form' type='text' id='task' placeholder='Task' onChange={(ev) => setTask(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='importance' placeholder="How important is this task? (1-10)" onChange={(ev) => setTaskImp(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='urgency' placeholder="How urgent is this task? (1-10)" onChange={(ev) => setTaskUrg(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='enjoyment' placeholder="How much do you enjoy this task? (1-5)" onChange={(ev) => setTaskEnj(ev.target.value)} />
                        <br/>
                        <br/>
                        <input className='input-form'  type='text' id='time-est' placeholder="How long do you expect this task to take? (minutes)" onChange={(ev) => setTaskEstTime(ev.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                        <input className='add-button' type='submit' value='Add Task' />
                        <br/>
                    </form>
                </div>
            </div>
            <div id='habits-today'>
            <Habits />
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