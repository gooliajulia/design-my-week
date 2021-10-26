
const Today = () => {

    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'october', 'November', 'December']


    return (
        <div id='today'>
            <h1 className='today'>Today</h1>
            <h2 className='today'>{days[weekDay]}, {months[month]} {day}, {year}</h2>

        </div>
    )
}

export default Today;