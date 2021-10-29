import {useState} from 'react'

const WarmupButton = ({title, source}) => {
    const [buttonColor, setButtonColor] = useState('seashell');
    const [fontColor, setFontColor] = useState('black')

    const handleClick = (ev) => {
        ev.preventDefault();
        window.open(source);
        setButtonColor('#C7817F');
        setFontColor('seashell');
    }

    return (
        <button style={{backgroundColor: buttonColor , color: fontColor}} onClick={(ev) => {
            handleClick(ev)}} > {title}</button>
        
    )
}

export default WarmupButton;