import NotePad from "../functions/NotePad";


const Reflections = () => {

    const prompts = ['What are your top 3 priorities in your life right now and why?', 'Where and when are you being too hard on yourself?', "List 10 things you're greatful for and why.", "Describe your dream home.", "Where do you see yourself one year from now?"]

    const randomIndex = Math.floor(Math.random() * (prompts.length-1))

    return (
        <div id='reflections'>
            <h1>Reflections</h1>
            <h2>{prompts[randomIndex]}</h2>
            <NotePad />
        </div>
    )
}

export default Reflections;