import axios from "axios"


const DisplayCard = ({type, taskName, taskImportance, taskUrgency, taskTimeEst, taskEnjoyment, taskID, TASK_API_URL, setToggleTasksFetch, toggleTasksFetch, manageTasksToggle, setManageTasksToggle, toggleFilter, setToggleFilter}) => {
    const ifTask = ['task', 'importance', 'urgency', 'enjoyment', 'estimated time to complete']
    // const ifRecipe = ['name', 'ingredients', 'directions']

    // Alternatively, we could try and use Class here. 

    const reRender = () => {
        this.forceUpdate();
    }

    const handleDelete = async () => {
        console.log('delete button was clicked')
        console.log(taskID);
        await axios.delete(TASK_API_URL + `&records[]=${taskID}`)
        setToggleTasksFetch(!toggleTasksFetch);
        // setManageTasksToggle(!manageTasksToggle);
        setToggleFilter(!toggleFilter);
        // reRender();
        
    }

    return (
        <div className='display-card' id={taskID}>
            <button className='delete' onClick={handleDelete}> x </button>
            <h2>{taskName}</h2>
            {/* <h3>{ifTask[0]}: {taskName}</h3> */}
            <h3>{ifTask[1]}: {taskImportance}</h3>
            <h3>{ifTask[2]}: {taskUrgency}</h3>
            <h3>{ifTask[3]}: {taskEnjoyment}</h3>
            <h3>{ifTask[4]}: {taskTimeEst}</h3>

        </div>
    )
}


export default DisplayCard;