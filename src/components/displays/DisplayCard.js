import axios from "axios";
import {useState} from 'react';


const DisplayCard = ({taskName, taskImportance, taskUrgency, taskTimeEst, taskEnjoyment, taskID, TASK_API_URL, setToggleTasksFetch, toggleTasksFetch, toggleFilter, setToggleFilter}) => {
    const ifTask = ['task', 'importance', 'urgency', 'enjoyment', 'estimated time to complete']
    const [deleted, setDeleted] = useState(false)
    const [show, setShow] = useState(false);


    const handleDelete = async () => {
        console.log('delete button was clicked')
        console.log(taskID);
        await axios.delete(TASK_API_URL + `&records[]=${taskID}`)
        setToggleTasksFetch(!toggleTasksFetch);
        setToggleFilter(!toggleFilter);
        setDeleted(true);
        
    }

    return (
        <div className='card-display-outer'>
            { deleted ? null : 
            <div className={`display-card ${ deleted ? 'deleted' : null}`} id={taskID}>
            <div className='task-inline'>
            <h2>{taskName}</h2>
            <button className='delete' onClick={handleDelete}> x </button>
            </div>
            {show ? 
            <div>
                        <h3>{ifTask[1]}: {taskImportance}</h3>
                        <h3>{ifTask[2]}: {taskUrgency}</h3>
                        <h3>{ifTask[3]}: {taskEnjoyment}</h3>
                        <h3>{ifTask[4]}: {taskTimeEst} minutes</h3>

            </div>
            : null}


        </div>
    }
    </div>
    )
}


export default DisplayCard;