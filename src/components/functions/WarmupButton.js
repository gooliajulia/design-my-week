import {useState} from 'react'

const WarmupButton = ({title, source}) => {
    const [buttonColor, setButtonColor] = useState('seashell');

    const handleClick = (ev) => {
        ev.preventDefault();
        window.open(source);
        setButtonColor('rgb(155, 103, 94)');
    }

    return (
        <button style={{backgroundColor: buttonColor}} onClick={(ev) => {
            handleClick(ev)}} > {title}</button>
        
    )
}

export default WarmupButton;