import CheckBox from "../functions/CheckBox";

const Today = ({days, weekDay, months, month, day, year,rankedTaskArray}) => {


    return (
        <div id='today'>
            <h1 className='today'>Today</h1>
            <h2 className='today'>{days[weekDay]}, {months[month]} {day}, {year}</h2>
            <h3>#1 Priority</h3>
            <div className='inline-habit'>
                <CheckBox />
                <h4>{rankedTaskArray.length > 0 ? rankedTaskArray[0].task : null }</h4>
            </div>
            <h3>Next up: </h3>
            <div className='inline-habit'>
                <CheckBox />
                <h4> {rankedTaskArray.length > 0 ? rankedTaskArray[1].task : null }</h4>
            </div>
            <div className='inline-habit'>
                <CheckBox />
                <h4> {rankedTaskArray.length > 0 ? rankedTaskArray[2].task : null }</h4>
            </div>
            <h3>Bonus tasks:</h3>
            <div className='inline-habit'>
                <CheckBox />
                <h4> {rankedTaskArray.length > 0 ? rankedTaskArray[3].task : null }</h4>
            </div>                
            <div className='inline-habit'>
                <CheckBox />
                <h4> {rankedTaskArray.length > 0 ? rankedTaskArray[4].task : null }</h4>
            </div>
        </div>
    )
}

export default Today;