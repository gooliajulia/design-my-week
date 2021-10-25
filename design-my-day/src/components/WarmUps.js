
const WarmUps = () => {

    const WarmUpClicked = (title) => {
        console.log(`${title} warmup was clicked`)
    }

    return (
        <div id='warmups'>
            <button onClick={WarmUpClicked('typing')} >Typing</button>
            <button onClick={WarmUpClicked('typing')} >Spanish</button>
            <button onClick={WarmUpClicked('typing')} >Coding</button>
            <button onClick={WarmUpClicked('typing')} >Reflection</button>
            <button onClick={WarmUpClicked('typing')} >News</button>
            <button onClick={WarmUpClicked('typing')} >Vocabulary</button>

        </div>
    )
}

export default WarmUps;