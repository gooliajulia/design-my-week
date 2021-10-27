import {useState} from 'react';


const WarmUps = () => {

    const [wasWarmupClicked, setWasWarmupClicked] = useState(false);
    const [buttonColor, setButtonColor] = useState('seashell')

    const typingSource = 'https://monkeytype.com/'
    const spanishSource = 'https://www.duolingo.com/learn'
    const codingSource = 'https://www.codewars.com/dashboard'
    const reflectionSource= '/reflections'
    const newsSource = 'https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'
    const vocabularySource = 'https://www.vocabulary.com'

    const WarmUpClicked = (ev, title, source) => {
        ev.preventDefault();
        console.log(`${title} warmup was clicked`);
        setWasWarmupClicked(true);
        console.log(wasWarmupClicked);
        window.open(source)
        setButtonColor('rgb(155, 103, 94)')
    }

    // style={{marginRight: spacing + 'em'}} 

    return (
        <div id='warmups'>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'typing', typingSource)} >Typing</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'spanish', spanishSource)} >Spanish</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'coding', codingSource)} >Coding</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'reflection', reflectionSource)} >Reflection</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'news', newsSource)} >News</button>
            <button style={{backgroundColor: buttonColor}} onClick={(ev) => WarmUpClicked(ev, 'vocabulary', vocabularySource)} >Vocabulary</button>

        </div>
    )
}

export default WarmUps;