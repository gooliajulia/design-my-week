import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import { useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';
import FollowingDays from './FollowingDays.js';
import axios from 'axios';

const HomePage = ({name}) => {
    const [usersName, setUsersName] = useState('Julia');
    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');
    const [newUserConfirmPassword, setNewUserConfirmPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(false);


    const API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/Users?api_key=keyxASDYlQZpfwP0J'

    const handleLogInSubmit = (ev) => {
        ev.preventDefault();
        console.log('log in attempted');
        const getUserInfo = async () => {
            console.log('getting user info...');

            const resp = await axios.get(`${API_URL}`);
            console.log(resp.data.records);
        }
        getUserInfo();
        setUsersName('change this to be fetched from api')
    }

    const createNewAccount = async (ev) => {
        ev.preventDefault();
        console.log('create account attempted');

        const handleConfirmPassword = () => {
            console.log('new user password: ' + newUserPassword);
            console.log('new user confirm password: ' + newUserConfirmPassword);
            console.log('checking passwords match')

            if ( newUserPassword === newUserConfirmPassword ) {
                setConfirmPassword(true);
                console.log('passwords match!')
            }
        };
        handleConfirmPassword();

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
        if (setConfirmPassword) {
        await axios.post(`${API_URL}`, newUser)
        } else {
            alert('passwords do not match');
        }
    }



    return (
        <div id='homepage' >
            <div id='user-log-in'>
                <h1>Hello, if you have an account, click 'Log In', otherwise, click 'Create Account'...</h1>
                <div id='user-forms'>
                    <form id='log-in' onSubmit={handleLogInSubmit}>
                        <h2>Log In: </h2>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username' placeholder='username' />
                        <br/>
                        <br/>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' placeholder='password' />
                        <br/>
                        <br/>
                        <input type='submit' />
                    </form>
                    <form id='create-account' onSubmit={createNewAccount}>
                        <h2>Create new acount: </h2>
                        <label htmlFor='new-user-name'>First Name: </label>
                        <input type='text' id='new-user-name' placeholder='first name' onChange={(ev) => setNewUserFirstName(ev.target.value)} />
                        <br/>
                        <br/>
                        <label htmlFor='create-username'>Username: </label>
                        <input type='text' id='create-username' placeholder='username' onChange={(ev) => setNewUserName(ev.target.value)}/>
                        <br/>
                        <br/>
                        <label htmlFor='create-password'>Create password: </label>
                        <input type='password' id='create-password' placeholder='password' onChange={(ev) => setNewUserPassword(ev.target.value)}/>
                        <br/>
                        <br/>
                        <label htmlFor='confirm-password' >Confirm password: </label>
                        <input type='password' id='confirm-password' placeholder='confirm password'  onChange={(ev) => setNewUserConfirmPassword(ev.target.value)}/>
                        <h5 className={ confirmPassword ? 'match' : 'noMatch'} id='confirm-password'>do passwords match</h5>
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