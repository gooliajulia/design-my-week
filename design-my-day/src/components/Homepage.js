import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';


const HomePage = ({name}) => {
    const [holdName, setHoldName] = useState('')
    console.log(name)

    useEffect(() => {
        setHoldName(name);
    }, [])




    return (
        <div id='homepage' >
            <div id='greeting-habits'>
            <GreetingHeader
            name={holdName}/>
            <Habits />
            </div>
            <Today />
        </div>

    )
}


export default HomePage;