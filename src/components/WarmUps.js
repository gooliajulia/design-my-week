
const WarmUps = () => {

    const WarmUpClicked = (ev, title) => {
        ev.preventDefault();
        console.log(`${title} warmup was clicked`)
    }

    return (
        <div id='warmups'>
            <button onClick={(ev) => WarmUpClicked(ev, 'typing')} >Typing</button>
            <button onClick={(ev) => WarmUpClicked(ev, 'spanish')} >Spanish</button>
            <button onClick={(ev) => WarmUpClicked(ev, 'coding')} >Coding</button>
            <button onClick={(ev) => WarmUpClicked(ev, 'reflection')} >Reflection</button>
            <button onClick={(ev) => WarmUpClicked(ev, 'news')} >News</button>
            <button onClick={(ev) => WarmUpClicked(ev, 'vocabulary')} >Vocabulary</button>

        </div>
    )
}

export default WarmUps;