import WarmupButton from '../functions/WarmupButton.js';

const WarmUps = () => {
    
    const WarmupsArray = [
        {
            title: 'Typing',
            source: 'https://monkeytype.com/'
        },
        {
            title: 'Spanish',
            source: 'https://www.duolingo.com/learn'
        },
        {
            title: 'Coding',
            source: 'https://www.codewars.com/dashboard'
        },
        {
            title: 'Reflections',
            source: '/reflections'
        },
        {
            title: 'News',
            source: 'https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'
        },
        {
            title: 'Vocabulary',
            source: 'https://www.vocabulary.com'
        },
        {
            title: 'German',
            source: 'https://duolingo.com/learn'
        }
    ]

    return (
        <div id='warmups'>
            {WarmupsArray.map((warmupObject) => (
                <WarmupButton 
                    title={warmupObject.title}
                    source={warmupObject.source}
                />
            ))}
            <button id='add'> + </button>
        </div>
    )
}

export default WarmUps;