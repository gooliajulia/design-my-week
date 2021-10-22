
const Today = () => {

    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    console.log(month);
    console.log(day);
    console.log(d);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


    return (
        <div id='today'>
            <h1 className='today'>Today</h1>
            <h2 className='today'>{days[weekDay]}, {months[month]} {day}, {year}</h2>

        </div>
    )
}

export default Today;