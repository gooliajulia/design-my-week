import {useState} from 'react';

const CheckBox = () => {
    const [marker, setMarker] = useState('')
    const [isChecked, setIsChecked] = useState(true);

    const handleCheck = (ev) => {
        ev.preventDefault();
        setIsChecked(!isChecked)
        isChecked ? setMarker('x') : setMarker('');
    }

    return (
        <button className='checkbox' onClick={(ev) => {
            handleCheck((ev))}}>{marker}</button>
    )
}

export default CheckBox;