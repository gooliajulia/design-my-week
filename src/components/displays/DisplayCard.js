

const DisplayCard = ({type, taskName, taskImportance, taskUrgency, taskTimeEst, taskEnjoyment}) => {
    const ifTask = ['task', 'importance', 'urgency', 'enjoyment', 'estimated time to complete']
    const ifRecipe = ['name', 'ingredients', 'directions']

    // Alternatively, we could try and use Class here. 

    return (
        <div className='display-card'>
            <h2>{type}</h2>
            <h3>{ifTask[0]}: {taskName}</h3>
            <h3>{ifTask[1]}: {taskImportance}</h3>
            <h3>{ifTask[2]}: {taskUrgency}</h3>
            <h3>{ifTask[3]}: {taskEnjoyment}</h3>
            <h3>{ifTask[4]}: {taskTimeEst}</h3>
        </div>
    )
}


export default DisplayCard;