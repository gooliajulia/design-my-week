import {useEffect, useState} from 'react';



const DisplayTaskList = ({taskArrayAll}) => {




    return (
        <div>
            <h1>Tasks to complete: </h1>
            {taskArrayAll.map((object) => (
                <li>{object.task}</li>
            ))}


        </div>
    )
}



export default DisplayTaskList;