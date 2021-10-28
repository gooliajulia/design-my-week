
import DisplayCard from './DisplayCard.js';

const DisplayTaskList = ({ currentUsername, TASK_API_URL, currentUserTaskArray}) => {

    return (
        <div id='display-cards'>
            <div>
                {currentUserTaskArray.map((task) => (
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
                ))}
            </div>
        </div>
    )
}



export default DisplayTaskList;