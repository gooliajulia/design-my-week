
const FollowingDays = ({day, tasksArray}) => {
    return (
        <div className='day-display'>
            <h2>{day}</h2>
            {tasksArray.map((taskObject, idx) => (
                    <h4 key={idx}>- {taskObject.task}</h4>
                ))};
        </div>
    )
}

export default FollowingDays;