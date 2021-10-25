import WarmUps from './WarmUps.js';

const GreetingHeader = ({name}) => {
    return (
        <div id='greeting-header'>
            <h1 className='greeting-header'>Good Morning, {name}!</h1>
            <WarmUps />

        </div>
    )
}

export default GreetingHeader;