import Welcome from './components/Welcome.js';
import HomePage from './components/Homepage.js'
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' exact>
        <Welcome  />
      </Route>
      <Route path='/homepage/name' exact >
        <HomePage />
      </Route>

    </div>
  );
}

export default App;
