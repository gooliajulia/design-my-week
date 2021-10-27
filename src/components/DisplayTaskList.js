

const DisplayTaskList = ({taskArrayAll}) => {


    return (
        <div>
            {taskArrayAll.map((task) => (
                <h1>{task.fields.task}</h1>
            ))}
        </div>
    )
}



export default DisplayTaskList;