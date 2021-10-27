import useState from 'react';

const DisplayTaskList = ({taskArrayAll, currentUsername}) => {
    


    return (
        <div>
            {taskArrayAll.map((task) => (
                <h2>{task.fields.task}</h2>
                
            ))}
        </div>
    )
}



export default DisplayTaskList;