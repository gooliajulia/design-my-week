
import HomePage from './components/Homepage.js'
import './App.css';
import {Route, Link} from 'react-router-dom';
import {useState} from 'react';

console.log(process.env.REACT_APP_API_KEY)

function App() {

  const [name, setName] = useState('');

  const welcomeSubmit = (ev) => {
      ev.preventDefault();
      console.log('welcome submit')
      console.log(name);
  }
  return (
    <div className="App">
      <Route path='/' exact>
      <div id='welcome'>
          <h1 className='welcome'>Welcome!</h1>
          <h4 className='welcome'>Please enter your name so I can sign you in:</h4>
          <form id='name-submit' onSubmit={welcomeSubmit}>
            <input type='text' id='name' onChange={(ev) => setName(ev.target.value)}/>
            <br/>
            <br/>
            <Link to='/homepage/name'>
              <input type='submit' id='submit-name' value='Enter'/>
            </Link>
          </form>
        </div>
      </Route>
      <Route path='/homepage/name' exact >
        <HomePage name={name}/>
      </Route>

    </div>
  );
}

export default App;
