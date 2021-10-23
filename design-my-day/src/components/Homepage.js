import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';


const HomePage = ({name}) => {
    const [holdName, setHoldName] = useState('')
    console.log(name)

    useEffect(() => {
        setHoldName(name);
    }, [])




    return (
        <div id='homepage' >
            <div id='greeting-tasks'>
            <GreetingHeader
            name={holdName}/>
            <MyTasks />
            </div>
            <div id='habits-today'>
            <Habits />
            <Today />
            </div>
        </div>

    )
}


export default HomePage;