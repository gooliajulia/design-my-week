import {useState, useEffect} from 'react';
import axios from 'axios';

const UserEntry = ({USER_API_URL, toggleUsersFetch, setToggleUsersFetch, setCurrentUserAccountInfo, currentUserAccountInfo, setUsersName, usersName, setCurrentUsername, userIsLoggedIn, setUserIsLoggedIn}) => {

    const [logInUsername, setLogInUsername] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');

    const [usersList, setUsersList] = useState([]);

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
            await axios.post(`${USER_API_URL}`, newUser)
        }
        createNewAccount(ev);
        setNewUserFirstName('');
        setNewUserPassword('');
        setNewUserName('');
        setToggleUsersFetch(!toggleUsersFetch);

    }

    const handleLogInSubmit = (ev) => {
        ev.preventDefault();
        console.log('log in attempted');
        console.log(logInUsername);
        let userFound = usersList.find((user) => {
            if(user.fields.username === logInUsername)
            return true;
        });
        console.log(userFound);
        if (userFound.fields.password === logInPassword) {
            console.log('passwords match')
            setCurrentUsername(logInUsername);
            setCurrentUserAccountInfo(userFound);
            setUsersName(userFound.fields.firstName)
            setUserIsLoggedIn(true);
        } else {
            console.log("passwords don't match")
            alert("Password is incorrect. Please try again.")
            setLogInPassword('');
            setCurrentUsername('');
            setUserIsLoggedIn(false);
        }
        console.log(userIsLoggedIn)
    }

    const getUserInfo = async () => {
        console.log('getting user info...');

        const resp = await axios.get(`${USER_API_URL}`);
        console.log(resp.data.records);
        setUsersList(resp.data.records);
        return(resp.data.records)
    }

    useEffect(() => {
        console.log('getting user list');
        getUserInfo();
        console.log(usersList)
    }, [toggleUsersFetch])

    return (
            <div id='user-log-in'>
                <h1>Hello!</h1>
                <h2>If you already have an account, please log in. Otherwise click 'Create Account'.</h2>
                <div id='user-forms'>
                    <form id='log-in' onSubmit={handleLogInSubmit}>
                        <h2>Log In: </h2>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username' onChange={(ev) => setLogInUsername(ev.target.value)}/>
                        <br/>
                        <br/>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' value={logInPassword} onChange={(ev) => setLogInPassword(ev.target.value)} />
                        <br/>
                        <br/>
                        <br/>
                        {/* <Link to={`./homepage/${usersName}`}> */}
                            <input type='submit' />
                        {/* </Link> */}
                    </form>
                    <form id='create-account' onSubmit={handleCreateAccountSubmit}>
                        <h2>Create new acount: </h2>
                        <label htmlFor='new-user-name'>First name: </label>
                        <input type='text' id='new-user-name' value={newUserFirstName} onChange={(ev) => setNewUserFirstName(ev.target.value)} />
                        {/* <br/> */}
                        <br/>
                        <label htmlFor='create-username'>Create new username: </label>
                        <input type='text' id='create-username' value={newUserName} onChange={(ev) => setNewUserName(ev.target.value)}/>
                        <br/>
                        {/* <br/> */}
                        <label htmlFor='create-password'>Create password: </label>
                        <input type='text' id='create-password' value={newUserPassword} onChange={(ev) => setNewUserPassword(ev.target.value)}/>
                        <br/>
                        <br/>
                        <input type='submit' />
                    </form>
                </div>
            </div>
            
    )
}


export default UserEntry;