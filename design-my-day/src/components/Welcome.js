
import {useState} from 'react';

const Welcome = () => {
    const [name, setName] = useState('');

    const welcomeSubmit = (ev) => {
        ev.preventDefault();
        console.log('welcome submit')
        console.log(name);
    }


    return (
        <div id='welcome'>
            <form onSubmit={welcomeSubmit}>
                <h1 className='welcome'>Welcome!</h1>
                <h4 className='welcome'>Please enter your name so I can sign you in:</h4>
                <input type='text' id='name' onChange={(ev) => setName(ev.target.value)}/>
                <br/>
                <br/>
                {/* <Link to='/homepage/name'> */}
                    <input type='submit' value='Enter'/>
                {/* </Link> */}
            </form>
        </div>
    )
}


export default Welcome;