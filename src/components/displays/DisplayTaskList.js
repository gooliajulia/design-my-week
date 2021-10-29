

import DisplayCard from './DisplayCard.js';

const DisplayTaskList = ({ TASK_API_URL, currentUserTaskArray, setToggleTasksFetch, toggleTasksFetch, setManageTasksToggle, manageTasksToggle, setToggleFilter, toggleFilter}) => {



    return (
        <div id='display-cards'>
                { currentUserTaskArray.map((task) => (
                    <DisplayCard 
                        type={'task'}
                        taskName={task.fields.task}
                        taskImportance={task.fields.importance}
                        taskUrgency={task.fields.importance}
                        taskEnjoyment={task.fields.enjoyment}
                        taskTimeEst={task.fields.minutes}
                        taskID={task.id}
                        TASK_API_URL={TASK_API_URL}
                        setToggleTasksFetch={setToggleTasksFetch}
                        toggleTasksFetch={toggleTasksFetch}
                        setManageTasksToggle={setManageTasksToggle}
                        manageTasksToggle={manageTasksToggle}
                        setToggleFilter={setToggleFilter}
                        toggleFilter={toggleFilter}
                    />
                )) }
        </div>
    )
}



export default DisplayTaskList;