import {useState} from 'react';
import WarmupButton from './WarmupButton.js';


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
        }
    ]

    // const typingSource = 'https://monkeytype.com/'
    // const spanishSource = 'https://www.duolingo.com/learn'
    // const codingSource = 'https://www.codewars.com/dashboard'
    // const reflectionSource= '/reflections'
    // const newsSource = 'https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'
    // const vocabularySource = 'https://www.vocabulary.com'



    return (
        <div id='warmups'>
            {/* <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'typing', typingSource)} >Typing</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'spanish', spanishSource)} >Spanish</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'coding', codingSource)} >Coding</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'reflection', reflectionSource)} >Reflection</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'news', newsSource)} >News</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'vocabulary', vocabularySource)} >Vocabulary</button> */}
            {WarmupsArray.map((warmupObject) => (
                <WarmupButton 
                title={warmupObject.title}
                source={warmupObject.source}
                />
            ))}

            <WarmupButton 
            title='German'
            source={WarmupsArray[1].source}
            />

        </div>
    )
}

export default WarmUps;