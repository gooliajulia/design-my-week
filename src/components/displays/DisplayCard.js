

const DisplayCard = ({type}) => {
    const task = ['task', 'importance', 'urgency', 'enjoyment', 'estimated time to complete']
    const recipe = ['name', 'ingredients', 'directions']

    // Alternatively, we could try and use Class here. 

    return (
        <div className='display-card'>
            <h2>{type}</h2>
            <h3>Info will go here. Props and their values</h3>
        </div>
    )
}


export default DisplayCard;