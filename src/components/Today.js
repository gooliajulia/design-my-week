
const Today = () => {

    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


    return (
        <div id='today'>
            <h1 className='today'>Today</h1>
            <h2 className='today'>{days[weekDay]}, {months[month]} {day}, {year}</h2>

        </div>
    )
}

export default Today;