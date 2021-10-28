
const FollowingDays = ({day, tasksArray}) => {
    return (
        <div className='day-display'>
            <h2>{day}</h2>
            <ul>
                {tasksArray.map((taskObject, idx) => (
                    <li key={idx}>{taskObject.task}</li>
                ))}
            </ul>

        </div>
    )
}

export default FollowingDays;