

const DisplayTaskList = ({taskArrayAll}) => {


    return (
        <div>
            <h1>Tasks to complete: </h1>
            {taskArrayAll.map((object, idx) => (
                <li key={idx}>{object.task}</li>
            ))}


        </div>
    )
}



export default DisplayTaskList;