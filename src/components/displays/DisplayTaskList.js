import useState from 'react';

const DisplayTaskList = ({taskArrayAll, currentUsername}) => {

    return (
        <div>
            {taskArrayAll.map((task) => {
                return task.fields.Name === currentUsername ?
                <h4>- {task.fields.task}</h4>
                :
                null
                
})}
        </div>
    )
}



export default DisplayTaskList;