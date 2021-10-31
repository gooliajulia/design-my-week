import {useState, useEffect} from 'react';
import axios from 'axios';

const UserEntry = ({USER_API_URL, toggleUsersFetch, setToggleUsersFetch, setCurrentUserAccountInfo, setUsersName, setCurrentUsername, userIsLoggedIn, setUserIsLoggedIn}) => {

    //_______Log In State_________//
    const [logInUsername, setLogInUsername] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    //____Create Account State____//
    const [newUserName, setNewUserName] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [newUserFirstName, setNewUserFirstName] = useState('');

    //___List of all users state__//
    const [usersList, setUsersList] = useState([]);

    //__Function to add new User account __//
    //__to the Users AirTable_____________//
    const handleCreateAccountSubmit = (ev) => {
        ev.preventDefault();

        const createNewAccount = async (ev) => {
            ev.preventDefault();
    
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

    // __ Function for log in that: ____//
    //_____1. searches user list for ___//
    //________user logging in___________//
    //_____2. checks password against__//
    //________stored password in ______//
    //________AirTable_________________//
    //_____3. Either sets user as ______//
    //________logged in or alerts_______//
    //________then to try password again__//
    const handleLogInSubmit = (ev) => {
        ev.preventDefault();
        getUserInfo();
        let userFound = usersList.find((user) => {
            if(user.fields.username === logInUsername) {
                return true}
                else {
                    setLogInPassword('');
                    setLogInUsername('');
                    alert('Username not found, please refresh the page and try again.')
                    return false
                }
        });

        if (userFound.fields.password === logInPassword) {
            setCurrentUsername(logInUsername);
            setCurrentUserAccountInfo(userFound);
            setUsersName(userFound.fields.firstName)
            setUserIsLoggedIn(true);
        } else {
            alert("Password is incorrect. Please try again.")
            setLogInPassword('');
            setCurrentUsername('');
            setUserIsLoggedIn(false);
        }
    }

    const getUserInfo = async () => {

        const resp = await axios.get(`${USER_API_URL}`);
        setUsersList(resp.data.records);
        return(resp.data.records);

    }

    useEffect(() => {
        getUserInfo();
    }, [toggleUsersFetch])

    return (
            <div id='user-log-in'>
                <h1>Hello!</h1>
                <h2>If you already have an account, please log in. Otherwise click 'Create Account'. If you want to explore the site as a demo without logging in, click 'Home'</h2>
                <h2></h2>
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
                        <input type='submit' />
                    </form>
                    <form id='create-account' onSubmit={handleCreateAccountSubmit}>
                        <h2>Create new account: </h2>
                        <label htmlFor='new-user-name'>First name: </label>
                        <input type='text' id='new-user-name' value={newUserFirstName} onChange={(ev) => setNewUserFirstName(ev.target.value)} />
                        <br/>
                        <label htmlFor='create-username'>Create new username: </label>
                        <input type='text' id='create-username' value={newUserName} onChange={(ev) => setNewUserName(ev.target.value)}/>
                        <br/>
                        <label htmlFor='create-password'>Create password: </label>
                        <input type='text' id='create-password' value={newUserPassword} onChange={(ev) => setNewUserPassword(ev.target.value)}/>
                        <br/>
                        <p>*note: please refresh page after creating account before you attempt to log in</p>
                        <input type='submit' />
                    </form>
                </div>
            </div>
            
    )
}

export default UserEntry;