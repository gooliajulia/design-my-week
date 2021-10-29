import CheckBox from '../functions/CheckBox.js';

const Habits = () => {

    return (
        <div id='habits'>
            <h1>Habits</h1>
            <div id='habits-list'>
                <div className='inline-habit'>
                    <h4>make bed </h4>
                    <CheckBox />
                </div>
            <div className='inline-habit'>
                <h4>go for a walk</h4>
                <CheckBox />
            </div>
                <div className='inline-habit'>
                <h4>drink 8 glasses of water</h4>
                <div className='inline-checkboxes'>
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Habits;