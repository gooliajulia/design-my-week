import GreetingHeader from './GreetingHeader.js'
import Today from './Today.js'
import {useEffect, useState} from 'react';


const HomePage = ({name}) => {
    const [holdName, setHoldName] = useState('')
    console.log(name)

    useEffect(() => {
        setHoldName(name);
    }, [])




    return (
        <div id='homepage' >
            <GreetingHeader
            name={holdName}/>
            <Today />
        </div>

    )
}


export default HomePage;