import HomePage from './components/pages/Homepage.js'
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import {useState} from 'react';
import UserEntry from './components/pages/UserEntry.js'
import Reflections from './components/pages/Reflections.js';
import Nav from './components/sections/Nav.js';

console.log(process.env.REACT_APP_API_KEY)

function App() {

  const USER_API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/Users?api_key=keyxASDYlQZpfwP0J'
  const TASK_API_URL = 'https://api.airtable.com/v0/app8BFd6lNH00rllQ/All%20User%20Tasks?api_key=keyxASDYlQZpfwP0J';

  const [toggleUsersFetch, setToggleUsersFetch] = useState(false);
  const [toggleTasksFetch, setToggleTasksFetch] = useState(false);
  const [currentUserAccountInfo, setCurrentUserAccountInfo] = useState([]);
  const [usersName, setUsersName] = useState('');
  const [currentUsername, setCurrentUsername] = useState('sampleUser');
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Route path='/'>
        <Nav />
      </Route>
      <Route path='/' exact>
        { userIsLoggedIn ? <Redirect to={`/homepage/${usersName}`} /> :         
        <UserEntry 
          USER_API_URL={USER_API_URL}
          toggleUsersFetch={toggleUsersFetch}
          setToggleUsersFetch={setToggleUsersFetch}
          currentUserAccountInfo={currentUserAccountInfo}
          setCurrentUserAccountInfo={setCurrentUserAccountInfo}
          setUsersName={setUsersName}
          setCurrentUsername={setCurrentUsername}
          usersName={usersName}
          userIsLoggedIn={userIsLoggedIn}
          setUserIsLoggedIn={setUserIsLoggedIn}
        />}
    </Route>
    <Route path='/homepage/:usersName' exact>
      <HomePage               
        TASK_API_URL={TASK_API_URL}
        toggleTasksFetch={toggleTasksFetch}
        setToggleTasksFetch={setToggleTasksFetch}
        usersName={usersName}
        currentUsername={currentUsername}
        />
    </Route>
    <Route path='/reflections' >
      <Reflections />
    </Route>
    <footer>
    </footer>
  </div>
  );
}

export default App;
