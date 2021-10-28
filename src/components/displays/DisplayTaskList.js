import useState from 'react';
import DisplayCard from './DisplayCard.js';

const DisplayTaskList = ({taskArrayAll, currentUsername, TASK_API_URL}) => {

    return (
        <div id='display-cards'>
            {taskArrayAll.map((task) => {
                return task.fields.Name === currentUsername ?
                <div>
                    <DisplayCard 
                    type={'task'}
                    taskName={task.fields.task}
                    taskImportance={task.fields.importance}
                    taskUrgency={task.fields.importance}
                    taskEnjoyment={task.fields.enjoyment}
                    taskTimeEst={task.fields.minutes}
                    taskID={task.id}
                    TASK_API_URL={TASK_API_URL}
                    />
                </div>
                :
                null
                
})}
        </div>
    )
}



export default DisplayTaskList;