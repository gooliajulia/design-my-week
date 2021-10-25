import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';
import Habits from './Habits.js';
import MyTasks from './MyTasks.js';
import FollowingDays from './FollowingDays.js';


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
            <div id='following-days-display'>
            <FollowingDays 
                day={'Tuesday'}
                tasksArray={['pay the bills', 'walk the dog', 'code some sick shit', 'pedicure', 'do the dishes']}
            />
            </div>
        </div>

    )
}


export default HomePage;