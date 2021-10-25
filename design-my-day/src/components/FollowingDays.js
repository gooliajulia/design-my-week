
const FollowingDays = ({day, tasksArray}) => {
    return (
        <div>
            <h2>{day}</h2>
            <ul>
                {tasksArray.map((task) => {
                    <li>{task}</li>
                })}
            </ul>

        </div>
    )
}

export default FollowingDays;